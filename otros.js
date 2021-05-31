let fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
require('colors');


function readFile(files, ruterPath) {
    let links = [];

    files.forEach(archivo => {
        const joinRuter = path.join(ruterPath, archivo);
        const extension = path.extname(joinRuter);

        if (extension === '.md') {
            let data = fs.readFileSync(joinRuter, 'utf-8');
            const newLinks = fileLinks(data);
            links = links.concat(newLinks);
        };

    });

    return links;
};

const fileLinks = (data) => {
    let linksCollection = [];
    let regularExpression = /\bhttps?:\/\/\S+/gi;
    linksCollection = data
    .replace(/[{()}]/g, '')
    .match(regularExpression);

    return linksCollection || [];


};

const linksValidatacion = ( links ) => {
    links.map( link => fetch( link )
    .then((response) => {
      return console.log('status'.red, { 
        href: link, status: response.status /*? 'OK' : 'rechazado'*/});
      })
    .catch((error) =>{
      console.log(error)
      return { href: link, status:'rechazado' }
    }) 
  )};
  



function main () {

    const ruterAbsolute = path.resolve('./files');
 
    const files = fs.readdirSync('./files');

    const links = readFile(files, ruterAbsolute);
    console.log(links);

    linksValidatacion(links);

}
main()
















// getFiles('./files')
//   .then(files => console.log(files))
//   .catch(e => console.error(e));
