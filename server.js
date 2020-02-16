const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

//Serve static content for the app from "public" directory
app.use(express.static('public'));

//Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes & give the server access to them
let routes = require('./controllers/burger_controllers.js');

app.use(routes);

//Start the server so it can handle client requests.
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});