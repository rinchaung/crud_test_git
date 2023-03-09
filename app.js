const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const createRoute = require('./routes/create');
const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const DB_URL = process.env.DB_URL;

// Connect mongoDB
mongoose.connect(DB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log(`mongoDB is conneted on 😊 ${DB_URL}!`));

// body-parser
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Express ejs layouts
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', createRoute);

// Listen port number
app.listen(PORT, () => console.log(`Server is listen at port 😊 ${PORT}!`));