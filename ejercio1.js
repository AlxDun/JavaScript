while(true){
    let name = prompt("Ingrese su nombre")
    if (name==""){alert("El espacio no puede estar vacio.")}
    else{break}}

while(true){
    let age = prompt("Ingrese su edad")
    if (age>=18){alert(`Estimado ${name}, usted es mayor de edad.`); break}
    else if (age<18){alert(`Estimado ${name}, usted es menor de edad.`); break}
    else{alert(`Estimado ${name}, que carajinhos puso?, ingrese otra vez su edad.`)}}