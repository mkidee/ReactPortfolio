import React, { useState } from 'react';

// Constructs the "Contact" page
export default function Contact() {
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isMessageEmpty, setIsMessageEmpty] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);

    // If the user clicks in and then out without adding any input value,
    // then it errors
    const handleBlur = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value.trim();

        if (fieldName === 'name') {
            setIsNameEmpty(fieldValue === '');
        }

        // .test is a regex validation method that returns a boolean in order
        // to compare to the fieldValue
        if (fieldName === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsEmailInvalid(!emailPattern.test(fieldValue));
        }

        if (fieldName === 'message') {
            setIsMessageEmpty(fieldValue === '');
        }
    };

    // Clears previous error messages and checks to see if any fields are
    // empty upon clicking the submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Clear previous error messages
        setIsNameEmpty(false);
        setIsEmailInvalid(false);
        setIsMessageEmpty(false);

        // Check for empty fields
        if (!name) {
            setIsNameEmpty(true);
            return;
        }

        if (!email) {
            setIsEmailInvalid(true);
            return;
        }

        if (!message) {
            setIsMessageEmpty(true);
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        event.target.reset();
    };

    return (
        <div className='contact'>
            <form className='contact-form main-container' onSubmit={handleSubmit}>
                <div className='contact-items name'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onBlur={handleBlur}
                    />
                    <div className='form-errors'>
                        {isNameEmpty && <span className='error'>Name is required</span>}
                    </div>
                </div>

                <div className='contact-items email'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        onBlur={handleBlur}
                    />
                    <div className='form-errors'>
                        {isEmailInvalid && <span className='error'>Invalid email address</span>}
                    </div>
                </div>

                <div className='contact-items message'>
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' rows={5} onBlur={handleBlur} />
                    <div className='form-errors'>
                        {isMessageEmpty && <span className='error'>Message is required</span>}
                    </div>
                </div>

                <div className='contact-items submit'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}