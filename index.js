const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

// Allow CORS from specific origin
app.use(cors({
    origin: 'https://benkivuva.github.io'
}));

// Sample data array
let data = [];

// Create
app.post('/api/data', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.json(newItem);
});

// Read
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Update
app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    data = data.map(item => (item.id === id ? newData : item));
    res.json(newData);
});

// Delete
app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    data = data.filter(item => item.id !== id);
    res.status(204).end();
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
