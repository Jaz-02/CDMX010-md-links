const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const process = require('process');
const marked = require('marked');
require('colors');


function readFiles(files, pathAbsolute){

    let links = [];
    files.forEach(file => {
    const absoluteRuter = path.join(pathAbsolute, file);
    const extension = path.extname(absoluteRuter);
    if (extension === '.md'){
    let data = fs.readFileSync(absoluteRouter, 'utf8');
    let linksFile = fileLinks(data);
    links = links.concat(linksFile);
    } 
    else{
        console.log('path: ', absoluteRuter.blue, 'extension: ', extension.magenta, '\nIngresa solo archivos .md');

    }
});
return links
};

const getLinks = () => {
    
}
// const fileLinks = (data) => {
//     let linksCollection = [];
//     let regExp = /\bhttps?:\/\/\S+/gi;
//     linksCollection = data
//     .replace(/[()]/g, '')
//     .match(regExp);
//     return linksCollection;
// };



const validateLink = (links) => {
    let array =links.map(link => fetch(link)
    .then((respuesta) => {

    })
    )
}



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


  const files = fs.readdirSync('./files', 'utf-8');
  console.log(files.blue);















//
