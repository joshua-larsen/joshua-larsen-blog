
// Create a new file called 'index.ts' in the 'src' folder
// Import the necessary modules and create a basic Express.js server

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


