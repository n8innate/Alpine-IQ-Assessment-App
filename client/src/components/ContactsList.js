import React from 'react';

function ContactsList({ contacts }) {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    Name: {contact.name},
                    Email: {contact.email},
                    Address: {contact.address ? contact.address : 'N/A'}
                </li>
            ))}
        </ul>
    );
};

export default ContactsList;
