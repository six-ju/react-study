const express = require('express');
const app = express();
const cors = require('cors');
console.log(123)
app.use(cors());
app.get('/api', (req, res) => {
    console.log(req.query.name)
    
    res.json({ message: 'Hello from the server!' });
});

app.enable('trust proxy');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
