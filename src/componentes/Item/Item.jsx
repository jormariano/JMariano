import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, stock, preciousd, usd, preciopesos, pesos }) => {

    const handleClick = () => {
        console.log('Click')
    }

    return (

        <Card style={{ height: '250px', width: '450px', margin: '5px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Link to={`/item/${id}`}><Card.Title>{id}.- {nombre}</Card.Title></Link>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text><strong>Stock: {stock}</strong></Card.Text>
                <Link to={`/item/${id}`}> Ver detalles </Link>
                <Button onClick={handleClick} variant="primary">Adquirir en {preciopesos} {pesos}</Button>
                <Button onClick={handleClick} variant="primary">Adquirir en {preciousd} {usd}</Button>
            </Card.Body>
        </Card>
    )
}

export default Item