const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const PTRoute = require('./src/routes/routes');
const store = new session.MemoryStore();
const app = express();

// CORS configuration
const corsOptions = {
    origin: '*',
    methods: "GET,POST,PUT,DELETE",
    Credentials: true,
    optionsSuccessStatus: 200
};
//app.use(cors());
// app.post('/loginuser', async (req, res) => {
//     const {username,password} = req.body;
  
//     // Perform login logic (using your existing services.js functions)
//     const result = await loginUser({ username, password });
  
//     // Send the result back to the frontend
//     res.json(result);
//   });

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
app.listen(5000, () => {
    console.log('Server Successfully Running on Port: 5000');
});