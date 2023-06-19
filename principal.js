var cuentasDePersonas=[
    { id: 1, nombre:"Mai", saldo:"200", pin:"123"},
    { id: 2, nombre: "Gera", saldo:"290", pin:"231"},
    { id: 3, nombre: "Maui", saldo:"67", pi:"321"}
]
var formulario = document.querySelector('form')
formulario.addEventListener('submit', (event)=> {
    let pin = prompt ("Ingrese su pin");
    if (pin != null){
        if (pin === '000'){
            console.log("Correcto");
        }else{
            console.log("Incorrecto");
        }
    }
    event.preventDefault()
    console.log(event.target[0].value);
})




