import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, preciopesos, pesos, preciousd, usd, stock, descripcion, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        console.log("Productos agregados: " + cantidad)

        const item = { id, nombre, preciousd };
        agregarProducto(item, cantidad);
    }

    return (
        <>
            <div className='item-detail'>
                <div className='item-img-detail'>
                    <img src={img} className='detail-card-img' />
                    <div className='item-detail-text'>
                        <h2>{nombre}</h2>
                        <h3>{descripcion}</h3>
                        <h4><strong>Stock: {stock}</strong></h4>
                        <p><strong>{pesos}{preciopesos} - {preciousd} {usd}</strong></p>
                    </div>
                </div>
                {
                    agregarCantidad > 0 ? (<Link to='/cart'> Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
        </>
    )
}

export default ItemDetail