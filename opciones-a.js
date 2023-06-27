//se crea parte del contenido de la sengunda pagina (va después de validar el pin )//
const  renderMenu = ()=>{
    let menu = `
    <div>
        <h1>Bienvenid@ ${selected[0].nombre}</h1>
        <div>
            <a class="botMenu" href="#" onclick="consultar()" role="button"> Consultar </a>
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