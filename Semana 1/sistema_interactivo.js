// Mensaje de bienvenida.
console.log("Bienvenido!")

// Capturar datos del usuario.
do {
    nombre=prompt("Ingrese su nombre.").trim()
    if (nombre==""){console.error("Error: El campo está vacio."); alert("El campo no puede estar vacio.")}
}   while(nombre=="")

do {
    edad=parseInt(prompt("Ingrese su edad"))
    if (isNaN(edad)||edad<1){console.error("Error: por favor ingrese un numero valido."); alert("Debe ingresar un numero valido.")}
}   while(isNaN(edad)||edad<1)

// Validacion y mensaje
if (edad>=18){alert(`Saludos ${nombre}, eres mayor de edad.`)}
else if (edad<18){alert(`Saludos ${nombre}, eres menor edad.`)}
