const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// For simplicity, we use an in-memory data store
let pages = [];

app.get('/:pageName', (req, res) => {
    const pageName = decodeURIComponent(req.params.pageName);
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/pages', (req, res) => {
    res.json(pages);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
