import './Contact.css'
import Questions from "../Questions/Questions"
import ContactForm from "../ContactForm/ContactForm"

const Contact = () => {
    return (
            <div className='contact-questions-form'>
                <Questions />
                <ContactForm />
            </div>
    )
}

export default Contact