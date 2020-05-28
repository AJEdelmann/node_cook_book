const express = require('express') 
const app = express() 
const stylus = require('stylus') 
 
app.get('/some.css', (req, res) => { 
  const css = stylus(` 
    body 
      color:black 
  `).render() 
  res.send(css) 
}) 
 
app.listen(3000)

// DEBUG=* node index.js 
// Turn on all loggings

// $ DEBUG=express:* node index.js
// look only at express log output

// $ DEBUG=my-app node index.js
// Just turn on logs for my app namespace

// $ DEBUG_COLORS=no DEBUG=* node index.js
// In production, if we want to turn on debug logs we can produce more 
// standard logging output with the above

// $ DEBUG=* npm run --silent prod
// In order to run the code above we need to install pino-debug
// We should see the express logs in JSON form, where the msg field 
// contains the log contents and the ns field contains the relevant 
// debug message. Additionally, pino adds a few other useful fields, 
// such as time, pid, hostname, level (the log level defaults to 20, 
// which is debug level), and v (the log format version)