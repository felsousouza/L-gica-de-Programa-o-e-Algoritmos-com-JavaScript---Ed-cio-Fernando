function verificarNumero() {
    //referencias
    var inNumero = document.getElementById("inNumero");
    var outDivisores = document.getElementById("outDivisores");
    var outResposta = document.getElementById("outResposta");
    //entradas
    var num = Number(inNumero.value);
    var resposta = "Divisores do " + num + ": ";
    var cal = 0;
    var acumulador = 0;
    //validações - se for qualquer coisa que não um numero > 0 
    if (!num) {
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }
    //lógica
    for (var i = 1; i <= num / 2; i++) {
        cal = num % i; //verifica que o numero é divisivel por i e resto 0
        if (cal == 0) {// se sim (o de cima)
            if (i == 1) {
                resposta = resposta + i;
                acumulador = acumulador + i;
            } else {
                resposta = resposta + ", " + i;
                acumulador = acumulador + i; //acumulaodor recebe ele mesmo + valor de i
            }

        }
    }
    //saida dos divisores
    outDivisores.textContent = resposta + "(Soma: " + acumulador + ")";
    //saída com resposta se num é ou não perfeito
    if (acumulador == num) {
        outResposta.textContent = acumulador + " É um número Perfeito"
    } else {
        outResposta.textContent = acumulador + " Não é um numero perfeito"
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);