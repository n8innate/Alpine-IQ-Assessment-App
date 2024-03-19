const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Parse incoming JSON 
app.use(express.json());

// Middleware...
app.get('/', (req, res) => {
    res.send("Hello New Job! :)")
});

// Start the Server...
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})

