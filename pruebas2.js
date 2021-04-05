let fs = require('fs');
require('colors');
let path = require('path');
// let readMd = require('read-mardown');

// let path = "/path/to/something";
// FileReader.

fs.readdir('./files', 'utf-8', () => {
  let ext = path.extname('./files/README-CF.md');
  // console.log(ext.blue);
  if (ext === '.md'){
      fs.readFile('./files/README-CF.md', 'utf-8', (err, data) =>{
          if(err) {
              console.log('error: ', err);
            } else {
              console.log(data.grey);
            }
      });   
  } else {

      console.log("error");
  }
});

  // let ext = path.extname('./files/README-DL.md');
    // console.log(ext.blue);

  console.log("ultima linea de codigo".blue);

// let file = fs.readdirSync('./files');

// console.log(file);