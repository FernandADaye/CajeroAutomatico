const retirar = () => {
    actions.innerHTML = "";
var saldoRestante = prompt("Ingrese su monto");
if (saldoRestante > 1000){
    var saldoFinal= selected[0].saldo;
    alert('Límite de reiro $1,000 pesos');
}else {
    if (selected[0].saldo < saldoRestante)
    {
        var saldoFinal= selected[0].saldo;
        alert('Monto insuficiente ');
        }else{
        var saldoFinal= selected[0].saldo - saldoRestante;
        selected[0].saldo = saldoFinal;}
    }
var botretirar =
`
<h2 class="fuente">Su saldo es de : ${saldoFinal}  </h2>
`
actions.innerHTML = botretirar;
};

