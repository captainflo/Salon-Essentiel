const express = require("express");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cors = require('cors');
const forceSsl = require('force-ssl-heroku');
 
app.use(morgan('combined')); /*login server in your terminal */
app.use(cors());
app.use(forceSsl);

// Routes

require('./routes/htmlRoutes')(app);

// Connect Mongo Atlas
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Server Setup
const PORT = process.env.PORT || 3001;
console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
app.listen(PORT);

