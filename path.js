let fs = require('fs');
require('colors');
let path = require('path');
const fetch = require('node-fetch');



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
console.log(prueba);


const statusLinks = (promis) => {
    Promise.all(promis)
    .then((result) => {
        result.map((resultt) => {
            if (resultt.status === "OK") {
                console.log()
            }
        })
    })
}

const validateLink = (link) => 
fetch(link)
  .then((a) => {
      return {href: link, status: "FAIL"}
  })














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
