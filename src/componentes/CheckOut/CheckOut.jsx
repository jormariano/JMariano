import './CheckOut.css'
import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const CheckOut = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

        if (!nombre || !email || !emailConfirmacion) {
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
            <form onSubmit={manejadorFormulario} className='chekout-form'>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id} className='checkout-productos'>
                            <div className='checkout-product-description'>
                                <img src={producto.item.img} alt='img del producto' />
                                <div>
                                    <h3>{producto.item.nombre} x {producto.cantidad}</h3>
                                    <h4>Precio: {producto.item.pesos}{producto.item.preciopesos} - {producto.item.preciousd} {producto.item.usd} </h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <p><strong>CANTIDAD TOTAL: {cantidadTotal} productos</strong></p>
                <div className='form-buy'>
                    <input type="text" placeholder="  NOMBRE COMPLETO *" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <input type="email" placeholder="  E-MAIL *" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="email" placeholder="  CONFIRMACIÓN DE E-MAIL *" id='emailconfirmacion' value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                    {
                        error && <p style={{ color: "red" }}>{error}</p>
                    }

                    <button type="submit">COMPRAR</button>
                </div>
            </form>

            {
                ordenId && (
                    <div className='orden-id'>
                        <p>¡Muchas gracias por tu compra!</p>
                        <p>Tu número de orden es: {ordenId}</p>
                    </div>
                )
            }

        </div>
    )
}

export default CheckOut