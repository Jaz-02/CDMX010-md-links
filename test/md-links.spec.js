const mdlinks = require('./../pruebas');
const mock = require('./mock');
// const mock = require('./');

describe('getgetArrayMdFiles', () => {
  it('is a function', () => {
    // console.log('FIX ME!');
    expect(typeof mdlinks.getArrayMdFiles).toBe('function');
  });

  it('Should return an array files .md', () => {
    expect(mdlinks.getArrayMdFiles('./files')).toEqual(mock.filesMd);
  });

});

describe('getLinks', () => {
  it('is a function', () => {
    // console.log('FIX ME!');
    expect(typeof mdlinks.getLinks).toBe('function');
  });

  it('Should return an array of objects', () => {
    expect(mdlinks.getLinks('./filesTestmocks')).toEqual(mock.links);
  });

});

describe('readMDS', () => {
  it('is a function', () => {
    // console.log('FIX ME!');
    expect(typeof mdlinks.readMD).toBe('function');
  });

  it('Should return a string', () => {
    expect(mdlinks.readMD('./filesTestmocks/pruebas-MDL.md', "utf-8")).toEqual(mock.readFile);
  });

});

describe('stats', () => {
  it('is a function', () => {
    // console.log('FIX ME!');
    expect(typeof mdlinks.stats).toBe('function');
  });

  it('Should return an array of objects', () => {
    expect(mdlinks.stats('./files')).toEqual(mock.statsResult);
  });

});

// describe('getgetArrayMdFiles', () => {
//   it('is a function', () => {
//     // console.log('FIX ME!');
//     expect(typeof mdlinks.getArrayMdFiles).toBe('function');
//   });

//   it('Should return an array files .md', () => {
//     expect(mdlinks.getArrayMdFiles('./files')).toEqual(mock.filesMd);
//   });

//   it('Si retorna el array de objetos', () => {
//     expect([{
//       href: 'https://youtu.be/mJJloQY7A8Y',
//       text: 'Diferencia entre array y objetos',
//       file: 'C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\FAQ-CF.md'
//     },
//     {
//       href: 'https://youtu.be/mJJloQY7A8Y?t=236',
//       text: '¿Cómo agrego una nueva propiedad a un objeto?',
//       file: 'C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\FAQ-CF.md'
//     }]).toEqual([{
//       href: 'https://youtu.be/mJJloQY7A8Y',
//       text: 'Diferencia entre array y objetos',
//       file: 'C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\FAQ-CF.md'
//     },
//     {
//       href: 'https://youtu.be/mJJloQY7A8Y?t=236',
//       text: '¿Cómo agrego una nueva propiedad a un objeto?',
//       file: 'C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\FAQ-CF.md'
//     }])

//   });

// });

// describe('obtener los documentos .md', () => {

//   it('Deberia obtener archivos .md', () => {
//     // console.log('FIX ME!');
//     expect(getArrayMdFiles).toBeDefined();
//   });

//   it('Es una funcion', () => {
//     expect(typeof getArrayMdFiles).toBe('function');
//   });

//   it('Si retorna el array de objetos', () => {
//     expect(['C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\README-CF.md',
//     'C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\FAQ-CF.md'
//   ]).toEqual(['C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\README-CF.md',
//   'C:\\Users\\DE LA ROSA NIÑAS\\developeer\\Laboratoria\\CDMX010-md-links\\files\\FAQ-CF.md'])

//   });

//   it('Validar la información de cada Link', () => {
//     return (mdLink.validationLinks(helpers.links)).then(result => 
//       expect(result).toStrictEqual(helpers.validateLinks));
//   });

// });
