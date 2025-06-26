console.log("Talisimo")

const products={
    1:{id:1, name:"SmartPhone", price:600000},
    2:{id:2, name:"Egg", price:700},
    3:{id:3, name:"Car", price:75000000},
    
}

const setProducts = new Set(Object.values(products).map(product => product.name))

const mapProducts = new Map([["Electronic", "SmartPhone"],["Food", "Egg"],["Vehicle", "Car"]])

for (const id in products){console.log(`Product ID: ${id}   Name: ${products[id].name}  Price: ${products[id].price}`)}
console.log("")

for (const product of setProducts){console.log(`Product name: ${product}`)}
console.log("")

mapProducts.forEach((product, category) => {console.log(`Category: ${category} Name: ${product}`)})