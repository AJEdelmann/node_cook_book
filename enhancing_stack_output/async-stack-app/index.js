// install longjohn as a developer dependency
// $ npm install --save-dev longjohn
// longjohn help us to obtain asynchronous stack traces
if (process.env.NODE_ENV !== 'production') { 
    require('longjohn') 
  } 

const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(3000);
