import { articulos } from '../../asyncmock';
import './Blog.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {

    return (
        <div className='blog-container'>
            {articulos.map((articulo, index) => (
                <Card key={index} className='blog-card'>
                    <Card.Img variant="top" src={articulo.img} alt={articulo.titulo} />
                    <Card.Body>
                        <Card.Title>{articulo.titulo}</Card.Title>
                        <Card.Text>{articulo.descripcion}</Card.Text>
                        <Button variant="primary">Leer artículo</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Blog