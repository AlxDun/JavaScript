function validateProduct(product){
    if (!product.nombre || typeof product.precio !== "number"){
        console.error("Product data not valid")
        return false;
    }
    return true;
}

fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

const newProduct = { id: 4, nombre: "Tilin", precio: 1}

fetch("http://localhost:3000/productos", {
    method: "Post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newProduct)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

const updatedProduct = {nombre: "Tilin", precio: 0}

fetch("http://localhost:3000/productos/4", {
    method: "Put",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedProduct)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

fetch("http://localhost:3000/productos/1", {method: "DELETE"})
    .then (() => console.log("deleted"))
    .catch (error => console.error(error))