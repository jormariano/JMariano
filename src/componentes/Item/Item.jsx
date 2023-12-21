import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const Item = ({ id, nombre, descripcion, stock, preciousd, usd, preciopesos, pesos, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, preciousd, usd, preciopesos, pesos, img };
        agregarProducto(item, cantidad);
    }

    return (

        <>
            <div className='item-card'>
                <img src={img} alt='imagen item' className='item-card-img' />
                <div className='item-card-body'>
                    <Link to={`/item/${id}`} className='item-card-title'><h2 className='item-card-title'>{nombre}</h2></Link>
                    <h4><strong>Stock: {stock}</strong></h4>
                    <h4><strong>Valor: {pesos}{preciopesos} - {preciousd} {usd}</strong></h4>
                    {
                        agregarCantidad > 0 ? (<Link className='cart-button-finish' to='/cart'> Ir al carrito </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                    }
                </div>
            </div>
        </>

    )
}

export default Item