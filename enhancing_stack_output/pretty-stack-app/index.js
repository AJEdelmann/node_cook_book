// npm cute-stack is a tool for creating prettified stack traces.
require('cute-stack')() 

const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(3000);
