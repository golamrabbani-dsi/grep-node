const fs = require('fs');
const readline = require('readline');
console.log(process.argv)
let [ queryVal, path, caseSensetive]  = process.argv.slice( 2, 5 )

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  crlfDelay: 100
});

rl.on('line', (line) => {
    if(!caseSensetive) {
        queryVal = queryVal.toLowerCase();
        line = line.toLowerCase()
    }
   let start = line.search(queryVal)
    if(start>=0) {
        let print = line.substr(start,queryVal.length+40)
        print = print.replace(queryVal,`[32m${queryVal}[39m`)
       console.log("Found in Line:\n",print);
    }
   
});