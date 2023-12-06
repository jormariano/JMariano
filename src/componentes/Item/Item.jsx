import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
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

        <Card style={{ height: '500px', width: '400px', margin: '5px' }}>
            <Card.Img variant="top" src={img} className='item-card-img' />
            <Card.Body className='item-card-body'>
                <Link to={`/item/${id}`}><Card.Title className='item-card-title'>{nombre}</Card.Title></Link>
                <Card.Text><strong>Stock: {stock}</strong></Card.Text>
                <Card.Text><strong>Valor: {pesos}{preciopesos} - {preciousd} {usd}</strong></Card.Text>
                {
                    agregarCantidad > 0 ? (<Link className='cart-button-finish' to='/cart'> Ir al carrito </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </Card.Body>
        </Card>
    )
}

export default Item