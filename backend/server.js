const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;  // Assicurati che questa sia la porta corretta

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js backend!' });
});

app.get('/api/due', (req, res) => {
  res.json({ message: 'secondo messaggio!' });
});


app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
