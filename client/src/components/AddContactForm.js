import React, { useState } from 'react';

function AddContactForm({ onContactAdded, contacts }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    // Fetch Request to POST new Contacts 
    const handleSubmit = (e) => {
        e.preventDefault();

        // See if the email has been used already
        setError('');

        const emailExists = contacts.some((contact) => contact.email.toLowerCase() === email.toLowerCase());
        if (emailExists) {
            setError("That email has already been added.");
            return;
        }

        const contact = { name, email, address };

        fetch('/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
        .then(() => {
            console.log("New Contact Added");
            setName('');
            setEmail('');
            setAddress('');
            onContactAdded();
        })
        .catch((e) => {
            console.error("Error: ", e)
        })
    }
    
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    { error && <div style={{color:"red"}}>{error}</div> }
                </div>
            </div>
            <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContactForm;

