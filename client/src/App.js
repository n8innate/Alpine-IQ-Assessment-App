import React, { useEffect, useState } from 'react';
import AddContactForm from './components/AddContactForm.js';
import ContactsList from './components/ContactsList.js';

function App() {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = () => {
        fetch('/contacts')
            .then((res) => res.json())
            .then((data) => setContacts(data))
            .catch((e) => console.error("Error: ", e))
    };

    useEffect(() => {
        fetchContacts();
    }, [])

    return (
        <div>
            <h1>Contact Directory</h1>
            <AddContactForm contacts={contacts} onContactAdded={fetchContacts} />
            <ContactsList contacts={contacts} />
        </div>
    );
}

export default App;
