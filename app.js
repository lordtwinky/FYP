const express = require('express');
//don't need to install 'path' through dependancies, because it is a core module
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);


//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
});

//On err
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

const groups = require('./routes/groups');

const topics = require('./routes/topics');

const documents = require('./routes/documents');


//Port Number for live (for heroku)
const port = process.env.PORT || 8080;
//Port Number for testing
// const port = 3000;

// CORS Middleware
app.use(cors());

//Set Static Folder (linked to public folder)
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/groups', groups);

app.use('/topics', topics);

app.use('/documents', documents);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
