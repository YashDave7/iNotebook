const connectToMongoDB = require('./db');
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config({path: __dirname+'/.env'});

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// MIDDLEWARES.
app.use(express.json());

// CONNECTION TO THE DATABASE.
connectToMongoDB();

// AVAILABLE ROUTES.
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


// RUNNING THE APPLICATION ON THE LOCALHOST PORT.
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
