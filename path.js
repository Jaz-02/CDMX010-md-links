const { match } = require('assert');
let fs = require('fs');
require('colors');
let path = require('path');
// const { stringify } = require('querystring');

const links = () => {
    collection = string
    .replace(/[{()}]/g, '')
    .match(/\bhttps?:\/\/\S+/gi);
    return collection;
}

const ruter = path.resolve('./files');
console.log(ruter.red);


// const joinRuter = path.join(ruter, files);
//     console.log(joinRuter.white);

const files = fs.readdirSync('./files', 'utf-8');
  console.log(files.blue);

const prueba =files.forEach(archivos => {
    const joinRuter = path.join(ruter, archivos);
    console.log(joinRuter.white);
    const extension = path.extname(archivos)
    if (extension === '.md'){
    // console.log(archivos.red)
     
    string = fs.readFileSync(joinRuter, 'utf-8' );
    link = links(string);
    console.log('path: ', joinRuter.red, 'extension: ', extension.blue,);
    console.log('link: ', link);
    } 
    else{
        console.log('path: ', joinRuter.blue, 'extension: ', extension.magenta, '\nIngresa solo archivos .md');

    }
});














// fs.readdirSync('./files', 'utf-8', () => {
//     let ext = path.extname('./files');
//     // console.log(ext.blue);
//     if (ext === '.md'){
//         fs.readFile('./files/README-CF.md', 'utf-8', (err, data) =>{
//             if(err) {
//                 console.log('error: ', err);
//               } else {
//                 console.log(data.grey);
//               }
//         });   
//     } else {

//         console.log("error");
//     }
// });
