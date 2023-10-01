import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !email || !emailConfirmacion) {
            setError("Por favor, completa todos los campos")
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos de email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            email,
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden, vuelva a intentarlo");
                    });
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock");
            })
    }



    return (
        <div>
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <Card style={{ height: '200px', width: '250px', margin: '5px' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{producto.item.id}.- {producto.item.nombre}</Card.Title>
                                    <Card.Text>{producto.item.nombre} x {producto.cantidad}</Card.Text>
                                    <Card.Text>Precio: {producto.item.precio} </Card.Text>
                                    <Card.Text>Cantidad total: {cantidadTotal}</Card.Text>
                                </Card.Body>
                            </Card>
                            <hr />
                        </div>
                    ))
                }
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Confirmacion Email:</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }

                <button type="submit">Finalizar compra</button>
            </form>

            {
                ordenId && (
                    <p>Gracias por tu compra. Tu numero de orden es: {ordenId}</p>
                )
            }

        </div>
    )
}

export default CheckOut