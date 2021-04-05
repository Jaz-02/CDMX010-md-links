let fs = require('fs')

fs.readFile('README.MD', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });

// console.log(readFile);

const files = fs.readdirSync('./files', 'utf-8')
