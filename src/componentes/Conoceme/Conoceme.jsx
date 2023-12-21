import './Conoceme.css'
import { Link } from 'react-router-dom'

const Conoceme = () => {

    const imgConoceme = "../../img/conoceme-01.jpg"

    return (
        <div className='conoceme'>
            <img className='conoceme-img' src={imgConoceme} alt='foto de Jorgelina' />
            <div className='conoceme-texto'>
                <h2>Soy Jorgelina Mariano</h2>
                <p>Me formé en CoderHouse como Desarrolladora Front End, aprendiendo tecnologías Web tales como HTML, CSS, JavaScript y React. Actualmente, me encuentro estudiando programación Back End para desarrollar aplicaciones modernas con Node.js y MongoDB.</p>
                <p> Me especializo en el desarrollo de sitios web dinámicos, e-commerce y páginas institucionales. Creando código impecable, estoy comprometida a transformar ideas en realidad. </p>
                <p className='conoceme-contacto'> <Link to="/contacto" style={{ textDecoration: 'none', color: 'inherit'}}><strong>Contáctame</strong></Link> para soluciones confiables, eficientes y personalizadas. </p>
                <p className='conoceme-contacto'> <Link to="/contacto" style={{ textDecoration: 'none', color: 'inherit'}}><strong>Descargá mi CV</strong></Link></p>
            </div>
        </div>
    )
}

export default Conoceme