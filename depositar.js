const depositar = () => {
        actions.innerHTML = "";
    var saldoSumante = prompt("ingrese su monto");
if (saldoSumante>1000){
    var saldoFinal= selected[0].saldo;
    alert('Límite de deposito $1,000 pesos')
}else{
    var saldoFinal= Number(saldoSumante) + (selected[0].saldo);
    selected[0].saldo = saldoFinal;
}
    var botDepositar =
    `
    <h2 class="fuente">Su saldo es de : ${saldoFinal}  </h2>
`
actions.innerHTML = botDepositar;
};