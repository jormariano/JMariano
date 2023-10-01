import './ContactForm.css'
import { useState } from "react"
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [producto, setProducto] = useState('');
    const [consulta, setConsulta] = useState('');

    const enviarConsulta = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_surname: apellido,
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
        setApellido("");
        setEmail("");
        setProducto("");
        setConsulta("");
    }


    return (
        <form onSubmit={enviarConsulta} className="contact-form">

            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>

            <label htmlFor="apellido">Apellido: </label>
            <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}></input>

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <label htmlFor="choice">Producto: </label>
            <select id="choice" value={producto} onChange={(e) => setProducto(e.target.value)}>
                <option value="selection">Selecciona</option>
                <option value="ecommerce">Ecommerce</option>
                <option value="website">Página Web</option>
            </select>

            <label>Consulta: </label>
            <textarea value={consulta} onChange={(e) => setConsulta(e.target.value)}></textarea>

            <button type="submit">Enviar consulta</button>

        </form>
    )
}

export default ContactForm