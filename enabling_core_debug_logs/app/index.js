const express = require('express') 
const app = express() 
 
app.get('/', (req, res) => res.send('hey')) 
 
setTimeout(function myTimeout() {  
   console.log('I waited for you.') 
}, 100) 
 
app.listen(3000)

// $ NODE_DEBUG=timer node index.js
// This code set the NODE_DEBUG environment to timer flag

// $ NODE_DEBUG=timer,http node index.js
// This code set the NODE_DEBUG environment to timer and http flag

// The NODE_DEBUG environment variable can be set to any 
// combination of the following flags:
// http
// net
// tls
// stream
// module
// timer
// cluster
// child_process
// fs