import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const Item = ({ id, nombre, descripcion, stock, preciousd, usd, preciopesos, pesos }) => {

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

        <Card style={{ height: '350px', width: '450px', margin: '5px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Link to={`/item/${id}`}><Card.Title>{id}.- {nombre}</Card.Title></Link>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text><strong>Stock: {stock}</strong></Card.Text>
                <Link to={`/item/${id}`}> Ver detalles </Link>
                <Button onClick={handleClick} variant="primary">Adquirir en {preciopesos} {pesos}</Button>
                <Button onClick={handleClick} variant="primary">Adquirir en {preciousd} {usd}</Button>
                {
                    agregarCantidad > 0 ? (<Link to='/cart'> Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </Card.Body>
        </Card>
    )
}

export default Item