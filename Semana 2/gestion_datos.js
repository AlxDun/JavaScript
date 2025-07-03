console.log("Gestion de datos")

const products={1:{id:1, name:"SmartPhone", price:600000}, 2:{id:2, name:"Egg", price:700}, 3:{id:3, name:"Car", price:75000000}, 4:{id:4, name:"Automobile", price:80000000}}

const setProducts = new Set(Object.values(products).map(product => product.name))

const mapProducts = new Map([["Electronic", "SmartPhone"],["Food", "Egg"],["Vehicle", ["Car", "Automobile"]]])

console.log("Impresion del arreglo de los productos:")
for (const id in products){console.log(`Product ID: ${id} | Name: ${products[id].name} | Price: ${products[id].price}`)}

console.log("Impresion del Set con los nombres de los productos:")
for (const product of setProducts){console.log(`Product name: ${product}`)}

console.log("Impresion del Map con los nombres y la categoria de los productos:")
mapProducts.forEach((product, category) => {if (Array.isArray(product)) {product.forEach(item => {console.log(`Category: ${category} | Name: ${item}`)});} else {console.log(`Category: ${category} | Name: ${product}`)}})