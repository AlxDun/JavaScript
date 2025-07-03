let boton = document.getElementById("boton")
boton.addEventListener("click", async()=>{
    const peticion = await fetch("https://dog.ceo/api/breeds/image/random")
    const objeto = await peticion.json()
    document.getElementById("perros").src=objeto.message
})