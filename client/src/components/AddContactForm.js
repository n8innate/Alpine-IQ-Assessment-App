import React, { useState } from 'react';

function AddContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    // Fetch Request to POST new Contacts 
    const handleSubmit = () => {
        e.preventDefault();

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
        })
        .catch((e) => {
            console.error("Error: ", e)
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContactForm;

