const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

const port = process.env.PORT || 4201;

app.use(express.static(__dirname + '/dist/client'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => {
    console.log("server client running on express :" + port);
})