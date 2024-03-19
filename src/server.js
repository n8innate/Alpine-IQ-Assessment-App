const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Contact = require('./models/Contact.js');

// Parse incoming JSON 
app.use(express.json());

// Middleware...
app.get('/', (req, res) => {
    res.send("Hello New Job! :)")
});

app.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.post('/contacts', async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }

});

// Start the Server...
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
});
