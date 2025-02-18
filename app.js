// we initialise the express and say that it is required to be able to use its features and create an instance of it
const express = require('express');
const app = express();
const port = 3000;

//this line is a must to be able to use JSON in post 
app.use(express.json());

// creating a get path to send a response to the client
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Express.js App!');
});

app.get('/about', (req, res) => {
    res.send('This is asimple Express.js app created for learning purposes.');
});

app.get(`/greet/:name`, (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

app.post('/submit', (req, res) => {
    const {username , email} = req.body;
    if(!username || !email) {
        res.status(400).send('Username and Email are required');
        return;
    }
    res.send(`Form submitted successfully! Username: ${username}, Email: ${email}`);
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
