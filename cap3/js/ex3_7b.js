function verificarVelocidade() {
    //refencias
    inVeloPermitida = document.getElementById("inVeloPermitida");
    inVeloCondutor = document.getElementById("inVeloCondutor");
    outResposta = document.getElementById("outResposta");

    //entradas
    veloPermitida = Number(inVeloPermitida.value);
    veloCondutor = Number(inVeloCondutor.value);

    //validações 
    if (veloPermitida == 0 || isNaN(veloPermitida)) {
        alert("Digite um número válido");
        inVeloPermitida.focus();
        return;
    }
    if (veloCondutor == 0 || isNaN(veloCondutor)) {
        alert("Digite um número válido");
        inVeloCondutor.focus();
        return;
    }

    //processamento
    if (veloCondutor <= veloPermitida) {
        outResposta.textContent = "Situação: Sem multa de velocidade";
    } else if (veloCondutor <= (veloPermitida * 1.20)) {
        outResposta.textContent = "Situação: Multa Leve";
    } else {
        outResposta.textContent = "Situação: Multa grave";
    }
}
//refenrcia do botao
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade)
