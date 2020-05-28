// This code placed on very top of index.js turn our stack trace to be 
// limitless on production.
if (process.env.NODE_ENV !== 'production') { 
    Error.stackTraceLimit = Infinity 
  }
// ============================================================

const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(3000);
