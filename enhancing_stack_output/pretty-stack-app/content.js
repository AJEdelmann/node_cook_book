function content (opts, c = 20) { 
    return --c ? content(opts, c) : opts.ohoh 
  } 
   
  module.exports = content 

// You got an error that doesn't give you too much info because is limited to 
// 10 by default. Type on your terminal:
// $ node --stack-trace-limit=21 index.js
// it will show you on last line that the problem is on routes.js