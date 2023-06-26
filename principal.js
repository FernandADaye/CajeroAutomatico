//aquí están todos los datos sobre los usuarios //

var cuentasDePersonas=[
    { id: 1, nombre:"Mai", saldo:"200", pin:"123"},
    { id: 2, nombre: "Gera", saldo:"290", pin:"231"},
    { id: 3, nombre: "Maui", saldo:"67", pin:"321"}
]
//en esta sección están las opciones de usuarios basada desde JS //

const select= document.querySelector('select')
cuentasDePersonas.forEach((cuenta) => {
    let option=document.createElement('option');
    option.value = cuenta.id;
    option.innerText=cuenta.nombre;
    select.appendChild(option)
    console.log(option);
});


//función única para la validación del PIN//   
let selected= [];    
const wrapper = document.querySelector('#wrapper')
const body= document.querySelector('body')
const validatePIN=(id,pin)=>{
    selected= cuentasDePersonas.filter(
        (cuenta)=>{
            return cuenta.id===parseInt(id)
        });
    if(selected[0].pin === pin) {
        alert('Bienvenido');  
        wrapper.innerHTML="";
        renderMenu( )
    }else{
        alert('intente de nuevo');
    }
};

//al dar 'sumbit'se debe ingresar un PIN //

var formulario = document.querySelector('form')
formulario.addEventListener('submit', (event)=> {
    event.preventDefault()
    let user_id = event.target["cuenta"].value;
    let pin = prompt ("Ingrese su pin");
    validatePIN(user_id, pin);
})
//se crea parte del contenido de la sengunda pagina (va después de validar el pin )//
const  renderMenu = ()=>{
    let menu = `
    <div>
        <h1>Bienvenid@ ${selected[0].nombre}</h1>
        <div>
            <a class="botMenu" href="#" role="button">Consultar </a>
        </div>
        <div>
            <a class="botMenu" href="#" role="button">Depositar </a>
        </div>
        <div>
            <a class="botMenu" href="#" role="button">Retirar </a>
        </div>
        <div>
            <a class="botMenu" href="#" role="button">Salir </a>
        </div>
    </div>
    `
    wrapper.innerHTML= menu

};

