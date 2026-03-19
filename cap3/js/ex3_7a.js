function verificarParImpar() {
    //referencia
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //entrada 
    var numero = Number(inNumero.value);

    //limpar
    outResposta.textContent = "";

    //validações
    if (isNaN(numero)) {
        alert("Digite um número");
        inNumero.focus();
        return;
    }

    //variavel de calculo se é par ou impar
    var resposta = numero % 2;

    //Processamento/ condição
    if (resposta == 0) {
        outResposta.textContent = "Resposta: " + numero + " é Par";
    } else {
        outResposta.textContent = "Resposta: " + numero + " é Impar";
    }
}
//referencia ao botão
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificarParImpar);