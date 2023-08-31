const paths = [
    "dhCollectibles/datos/figura1.json",
    "dhCollectibles/datos/figura2.json",
    "dhCollectibles/datos/figura3.json"
];
const fs = require('fs')
const util = require('util')
const rfAsync = util.promisify(fs.readFile)

async function importar(brand) {
    let leakedData = []
    
    for(let i = 0; i < paths.length; i++) {
        const data = await rfAsync(paths[i], 'utf8')
        const figures = JSON.parse(data)
        leakedData = leakedData.concat(figures.filter(function (figure) {
            return figure.marca === brand
        }))
    }
    return leakedData
}

module.exports = importar