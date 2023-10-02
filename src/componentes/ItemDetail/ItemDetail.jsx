import './ItemDetail.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, preciopesos, pesos, preciousd, usd, moneda, stock, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        console.log("Productos agregados: " + cantidad)
        
        const item = {id, nombre, preciousd};
        agregarProducto(item, cantidad);
    }

    return (
        <>
            <Card className='item-detail' style={{ height: '320px', width: '450px', margin: '5px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{id}.- {nombre}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text><strong>Stock: {stock}</strong></Card.Text>
                    <Button variant="primary">Adquirir en {preciopesos} {pesos}</Button>
                    <Button variant="primary">Adquirir en {preciousd} {usd}</Button>
                </Card.Body>
                {
                    agregarCantidad > 0 ? ( <Link to='/cart'> Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} /> )
                }
            </Card>
        </>
    )
}

export default ItemDetail