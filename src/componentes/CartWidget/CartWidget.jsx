import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { cantidadTotal } = useContext(CarritoContext);

    const imgCarrito = "../../img/carrito-01.png"

    return (

        <Link to="/cart" style={{ textDecoration: 'none' }}>
            <div className='carrito'>
                <img className="imgCarrito" src={imgCarrito} alt="carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </div>
        </Link >

    )
}

export default CartWidget