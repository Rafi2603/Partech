const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 2655;
const session = require('express-session');
const cors = require('cors');
const PTRoute = require('./src/routes/routes');
const store = new session.MemoryStore();
const app = express();

// CORS configuration
const corsOptions = {
    origin: '*',
    Credentials: true,
    optionsSuccessStatus: 200
};

app.use(session({
    secret: 'secret',
    resave: false,
    cookie: { maxAge: 1800000 }, // 1800000 milliseconds = 30 minutes
    saveUninitialized: false,
    store
}));

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Parse incoming JSON data
app.use(bodyParser.json());

// Parse incoming URL-encoded data with extended option
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send('Not logged in');
    }
});

// Use the HB_Route for handling additional routes
app.use('/', PTRoute);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log('Server Successfully Running on Port: ' + port);
});