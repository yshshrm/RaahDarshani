const fs = require('fs');

function driver(){

    fs.readFile('output.txt', 'utf8', function(err, data) {  
        if (err) throw err;
        console.log(data);
        if(data){
            console.log("hello");
        }
        fs.writeFile('output.txt', '', function(){console.log('done')})
    });
}

console.log('before setInterval');

setInterval(driver, 1000);
