

/*
condicionales
1 - simple
2 - compuesto
3 - anidado 
4 - multiple
5 - operadro ternario 

simple 
if(true){
    console.log("esto es verdad")
}
/* compuesto 
if(false){
    console.log("esto es verdad")
} else {
    console.log("esto es falso")
}
/* multiple 
switch(1){
    case 1:
        break
    default:
        break
}
/* anidado 
if(true){
    
}else if (true){

}else if(true){

}else if(true){

}else{

}
/* ternario 
let variable = condition ? true : false 
/*
ciclos 
1 - for 
2 - while
3 - do-while
*/
let opcion = prompt("ingrese una opcion: \n1 - Calcular bruto\n2 - Calcular deducciones\n3 - Calcular auxilio de transporte \n4 calcular salario neto")

// console.log(typeof opcion)
//console.log(typeof 1)
// isNaN
let valorHora
let cantidadHoras
switch(opcion){
    case "1":
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt("ingrese la cantidad de horas: ");
        if(isNaN(valorHora) || isNaN(cantidadHoras)){
            console.log("El valor ingresado no corresponde a un numero valido");
        } else {
            console.log("El salario bruto es: " + (valorHora * cantidadHoras));
        }
        console.log();
        break;
    case "2":
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt("ingrese la cantidad de horas: ");
        if(isNaN(valorHora) || isNaN(cantidadHoras)){
            console.log("el valor ingresado no corresponde a un numero valido");
        } else{
            console.log("las deducciones son: " + valorHora * cantidadHoras *  0.08);
        }
        break;
    case "3":
         valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt("ingrese la cantidad de horas: ");
        if(isNaN(valorHora) || isNaN(cantidadHoras)){
            console.log("el valor ingresado no corresponde a un numero valido");
        } else if(valorHora*cantidadHoras < 1400000) {
            console.log("Tiene derecho a auxilio de transporte");
        } else{
            console.log("No tiene derecho a auxilio de tranporte");
        }
        break;
    case "4":
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt("ingrese la cantidad de horas: ");
        if(isNaN(valorHora) || isNaN(cantidadHoras)){
            console.log("el valor ingresado no corresponde a un numero valido");
        }else if(valorHora*cantidadHoras < 1400000) {
            console.log("El salario neto es: " (valorHora*cantidadHoras) - (valorHora*cantidadHoras * 0.08) + 200000);
        } else{
            console.log("El salario neto es: " (valorHora*cantidadHoras) - (valorHora*cantidadHoras * 0.08));
        }
        break;
    default:
        break;
}