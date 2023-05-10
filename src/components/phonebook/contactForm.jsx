import { useState } from "react";
import css from './contact-form.module.css';
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {

    const [state, setState] = useState({
        name: '',
        number: '',
    });

    function handleInputChange(event) {
        const { name, value } = event.currentTarget;
        setState(state => ({ ...state, [name]: value }));
    };

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(state);

        reset();
    };

    function reset() {
        setState({ name: '', number: '', });
    };
    
    return (
        <form
            className={css.contactForm}
            onSubmit={handleSubmit}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={state.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={state.number}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm;