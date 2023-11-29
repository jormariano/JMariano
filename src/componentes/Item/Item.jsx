import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const Item = ({ id, nombre, descripcion, stock, preciousd, usd, preciopesos, pesos, img }) => {

    const handleClick = () => {
        console.log('Click')
    }

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        console.log("Productos agregados: " + cantidad)

        const item = { id, nombre, preciousd };
        agregarProducto(item, cantidad);
    }

    return (

        <Card style={{ height: '500px', width: '400px', margin: '5px' }}>
            <Card.Img variant="top" src={img} className='item-card-img' />
            <Card.Body>
                <Link to={`/item/${id}`}><Card.Title className='item-card-title'>{nombre}</Card.Title></Link>
                <Card.Text className='item-card-valor'><strong>Valor: {pesos}{preciopesos} - {preciousd} {usd}</strong></Card.Text>
                {
                    agregarCantidad > 0 ? (<Link to='/cart'> Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </Card.Body>
        </Card>
    )
}

export default Item