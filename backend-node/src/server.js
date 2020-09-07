'use strict';

const express = require('express');
const routes = require('./routes');
var port = process.env.PORT || 3000;


const app = express();


app.use(express.json());
app.use(routes);

app.listen(port,  function () {
    console.log('Node.js listening on port ' + port + '...');
});


