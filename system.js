let fs = require('fs');
//const { url } = require('inspector');
let path = require('path');
require('colors');
//const fetch = require('node-fetch');

//  IDENTIFICAR MD E IMPRIMIRLOS
//const readFiles = () => {
  function readFiles(files, absolutePath) {
    let links = [];
    //const arrayLinks = files.map(archivo => { // [[links], [links] ,  []]
    files.forEach(archivo => { 
      const join = path.join(absolutePath, archivo);
      const extension = path.extname(join);
      //let links = [];
      if ( extension === '.md' ) {
        let data = fs.readFileSync(join, 'utf8');
        //let links = fileLinks(data);
        const newLinks = fileLinks(data);
        links = links.concat(newLinks);
        //console.log('links acá', links);
      };
      //return links;
    });
    return links;
    //return arrayLinks
    // traer los links con url, texto y status
  };
//  OBTENER LINKS
const fileLinks = (data) => {
  let linksCollection = [];
  let regularExpression = /\bhttps?:\/\/\S+/gi;
  //readFiles( data );
  linksCollection = data
  .replace(/[{()}]/g, '')
  .match(regularExpression);
  //console.log('gelinks', linksCollection);
  //return linksCollection;
  return linksCollection || []; // --> la forma más ideomática de escribir esta idea

  //console.log('continua aca')// ...
  // return linksCollection; 
  // let result = data.replace(/[{()}]/g, '').match(regularExpression);
  // return result
};

function main () {
  //  RUTA ABSOLUTA DE CARPETA
  const ruteAbsolute = path.resolve('./files');
  //console.log(ruteAbsolute.red);
  //  VOLVER ABSOLUTO MIS LINKS y obtenerlos
  const files = fs.readdirSync('./files');
  //console.log(fileSync);
  const links = readFiles(files, ruteAbsolute);
  console.log(links);

  // linksValidation(links);
  // statsValidateOption(links)
  // validateOption(links); // ook

}
main()
