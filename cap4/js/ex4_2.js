function contarDecrescente() {
    //Referencias
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //entrada 
    numero = Number(inNumero.value);
    var espaco = "Entre " + numero + " e " + "1: ";

    //validações
    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }

    //processamento
    for (var i = numero; i > 1; i = i - 1) {
        espaco = espaco + i + ", ";
    }
    //isolando somente o ultimo numero para ficar com . no final, e não virgula como os acima
    espaco = espaco + i + ".";

    /* forma de isolar o primeiro numero, para obter o mesmo resultado
    var espaco = "Entre " + numero + " e 1: " + numero;
    for (var i = numero - 1; i > 0; i--) {
    espaco = espaco + ", " + i;
} */


    //saida
    outResposta.textContent = espaco;
}
//referencia ao botao
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", contarDecrescente);