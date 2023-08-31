async function desafio2() {
    const importFigures = require('./DhCollectibles/collectibles')

    hotToys = await importFigures("Hot Toys")
    bandai = await importFigures("Bandai")
    starWars = await importFigures("Star Wars")
    let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]
    
    let collectibles = {
        figuras: unifiedCollectibles,
        listFigures: function () {
            for (let figure of this.figuras) {
                console.log(`Figura: ${figure.nombre}`)
                console.log(`   Marca: ${figure.marca}`)
                console.log(`   Precio: $${figure.precio}`);
                console.log(`   Stock disponible: ${figure.stock}\n`);
            }
        },
        figuresByBrands: function (brand) {
            return this.figuras.filter(function (figure) {
                return figure.marca === brand
            })
        }
    }
    
    console.log("\nLISTA DE TODAS LAS FIGURAS");
    collectibles.listFigures()
    console.log("\nFIGURAS DE STAR WARS");
    console.log(collectibles.figuresByBrands("Star Wars"));
    console.log("\nFIGURAS DE BANDAI");
    console.log(collectibles.figuresByBrands("Bandai"));
    console.log("\nFIGURAS DE HOT TOYS");
    console.log(collectibles.figuresByBrands("Hot Toys"));
}
