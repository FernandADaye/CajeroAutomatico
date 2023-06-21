//aquí están todos los datos sobre los usuarios //

var cuentasDePersonas=[
    { id: 1, nombre:"Mai", saldo:"200", pin:"123"},
    { id: 2, nombre: "Gera", saldo:"290", pin:"231"},
    { id: 3, nombre: "Maui", saldo:"67", pin:"321"}
]
//en esta sección están las opciones de usuarios basada desde JS //

const select= document.querySelector('select')
cuentasDePersonas.forEach((cuenta) => {
    console.log((cuenta));
    let option=document.createElement('option');
    option.value = cuenta.id;
    option.innerText=cuenta.nombre;
    select.appendChild(option)
    console.log(option);
});

//función única para la validación del PIN//
const body= document.querySelector('body')
const validatePIN=(id,pin)=>{
    let selected= cuentasDePersonas.filter(
        (cuenta)=>{
            return cuenta.id===parseInt(id)
            console.log(pin);
        }
    );
    if(selected[0].pin === pin) {
        alert('Bienvenido');
        window.location.href='http://127.0.0.1:5501/Cajero_Automatico/segundapantalla/Principal.html'
    }else{
        alert('intente de nuevo');
    }
};
//al dar 'sumbit'se debe ingresar un PIN //

var formulario = document.querySelector('form')
formulario.addEventListener('submit', (event)=> {
    event.preventDefault()
    let user_id= event.target["cuenta"].value;
    let pin = prompt ("Ingrese su pin");
    event.preventDefault()
    console.log(event.target[0].value);
    validatePIN(user_id, pin);
})