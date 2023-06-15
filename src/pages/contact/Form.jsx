import { useState } from 'react';
import './contact.css'

const Form = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submited')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="contact-col contact-container">
            <form onSubmit={onSubmit}>
                <div>
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div>
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                </div>
                <div>
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}
export default Form