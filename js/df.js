let interes = 1.8;
let monto = 0;
let total = 0;
let cuotas = 0;



const pedirMonto = () => {
    monto = Number(prompt("¿cuanto dinero quiere que le prestemos? (entre 1.000$ y 20.000$"));
    while (isNaN((monto)) || monto < 1000 || monto > 20000 ) {
        monto = Number(prompt("cuanto dinero quiere que le prestemos, entre 1.000$ y 20.000$. "));
    }
}




const pedirCuotas = () => {
    cuotas = Number(prompt("¿En cuantas cuotas desea devolver el dinero? 1-12"))
    while (isNaN(cuotas) || cuotas > 12 || cuotas == 0) {
        cuotas = Number(prompt("En cuantas cuotas desea devolver el dinero, de 1 a 12"))
    } 
}




const init = () => {
    pedirMonto();   
    pedirCuotas();
      total = monto * interes/cuotas
} 
init();
alert("Tu total a pagar durante" +" "+ cuotas +" "+ "meses, será de"+" "+ total +"$ARS")


