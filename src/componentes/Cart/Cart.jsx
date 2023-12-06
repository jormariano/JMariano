import './Cart.css'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className='cart-vacio'>
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/list' className='cart-vacio-list'>VER PRODUCTOS</Link>
                </div>
            </>
        )
    }

    return (

        <div className='cart-productos-list'>

            {
                carrito.map(producto => <CartItem key={producto.id} {...producto} />)
            }

            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button className='cart-button-empty' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link className='cart-button-empty' to='/Checkout'>Finalizar Compra</Link>

        </div>
    )
}

export default Cart