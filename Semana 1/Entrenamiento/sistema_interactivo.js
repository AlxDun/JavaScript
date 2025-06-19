// Declaramos variables globales
let nombre=""
let edad

// Mensaje de bienvenida.
console.log("Bienvenido!")

// Capturar datos del usuario.
while(true){
    nombre=prompt("Ingrese su nombre.")
    if (nombre==""){console.error("Error: El campo está vacio."); alert("El campo no puede estar vacio.")}
    else {break}
}

while(true){
    edad=parseInt(prompt("Ingrese su edad"))
    if (isNaN(edad)||edad<1){console.error("Error: por favor ingrese un numero valido."); alert("Debe ingresar un numero valido.")}
    else{break}
}

// Validacion y mensaje
if (edad>=18){alert(`Saludos ${nombre}, eres mayor de edad.`)}
else if (edad<18){alert(`Saludos ${edad}, eres menor edad.`)}