import { useState, useEffect } from "react"
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore"
import { db } from "../../services/config"

const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"))

        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })

    }, [productos])

    const descontarStock = async (producto) => {

        const productoRef = doc(db, "productos", producto.id);

        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock:nuevoStock});

    }

    return (
        <>
            <h2>Mis Productos:</h2>
            <div>
                {
                    productos.map(producto => (
                        <div key={producto.id}>
                            <h3>Nombre: {producto.nombre}</h3>
                            <h4>Precio: {producto.precio}</h4>
                            <h4>Stock: {producto.stock}</h4>
                            <p>Descripcion: {producto.descripcion}</p>
                            <button onClick={ () => descontarStock(producto)}>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Productos