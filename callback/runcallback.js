const {buenosDias, buenasTardes} = require('./functions')

const saludar=(unafuncionCallback)=>{
    const saludo=unafuncionCallback('Jazmin de la Rosa');
    return saludo;
}

console.log(saludar(buenosDias))
console.log(saludar(buenasTardes))