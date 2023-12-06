import './ContactForm.css'
import { useState } from "react"
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [producto, setProducto] = useState('');
    const [consulta, setConsulta] = useState('');

    const enviarConsulta = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: consulta
        };

        emailjs.send(
            "service_2saukcv",
            "template_p2mqptg",
            templateParams,
            "UfjLrlwtLdoGMn4bR"
        )
            .then(() => {
                alert("Consulta enviada")
            })
            .catch(() => {
                alert("Error, intente nuevamente")
            })

        setNombre("");
        setEmail("");
        setProducto("");
        setConsulta("");
    }


    return (

        <form onSubmit={enviarConsulta} className="contact-form">

            <h3 className='contact-form-h3'>CONTÁCTAME</h3>

            <input type="text" placeholder="  NOMBRE COMPLETO *" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>

            <input type="email" placeholder="  E-MAIL *" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <select id="choice" value={producto} onChange={(e) => setProducto(e.target.value)}>
                <option value="" disabled hidden>SELECCIONA UN PRODUCTO</option>
                <option value="ecommerce"> SITIO WEB</option>
                <option value="website"> E-COMMERCE</option>
            </select>

            <textarea value={consulta} placeholder="  MENSAJE *" onChange={(e) => setConsulta(e.target.value)}></textarea>

            <button type="submit" className='contact-form-button'>ENVIAR CONSULTA</button>

        </form>
    )
}

export default ContactForm