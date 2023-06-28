const consultar = () => {
    var botConsultar =`
<h2 class="fuente" >Perfil</h2>
<p class="fuente">Nombre del propietario:</p>
<p class="data">${selected[0].nombre}</p>
<p class="fuente">Saldo:</p>
<p class="data">$ ${selected[0].saldo} pesos</p>
<p class="fuente">ID de tarjeta:</p>
<p class="data">${selected[0].tarjeta}</p>
`
actions.innerHTML = botConsultar;

};

