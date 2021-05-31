const { mdlinks } = require("./pruebas");

// console.log(mdlinks)

const path = process.argv[2]


const statsOptionIndex = process.argv.indexOf('--stats')
const validateOptionIndex = process.argv.indexOf('--validate')

const options = {
    stats: statsOptionIndex > 0,
    validate: validateOptionIndex > 0
}

mdlinks(path, options);

