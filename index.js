const fs = require('fs');
const readline = require('readline');

const [ queryVal, path]  = process.argv.slice( 2, 4 )

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  crlfDelay: 100
});

rl.on('line', (line) => {
    
   let start = line.search(queryVal)
    if(start>=0) {
        let print = line.substr(start,queryVal.length+40)
        print = print.replace(queryVal,`[32m${queryVal}[39m`)
       console.log("Found in Line:\n",print);
    }
   
});