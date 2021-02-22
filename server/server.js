const express = require('express');
const bodyParser = require('body-parser')
var router = require('./router')
const cors = require('cors');

const app = express()
port = 3080;
app.use(cors());
app.options('*', cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(router)

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});