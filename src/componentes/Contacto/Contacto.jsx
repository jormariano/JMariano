import './Contacto.css'
import Questions from "../Questions/Questions"
import ContactForm from "../ContactForm/ContactForm"

const Contacto = () => {
    return (
            <div className='contact-questions-form'>
                <Questions />
                <ContactForm />
            </div>
    )
}

export default Contacto