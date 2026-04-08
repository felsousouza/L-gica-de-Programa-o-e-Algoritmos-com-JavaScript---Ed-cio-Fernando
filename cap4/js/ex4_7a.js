function repetirFruta() {
    //referencia 
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    //entrada de variáveis
    var fruta = inFruta.value;
    var num = Number(inNumero.value);
    var resposta = "*";
    //validação
    if (isNaN(num) || num == "") {
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }
    if (fruta == "") {
        alert("Digite uma fruta válida");
        inFruta.focus();
        return;
    }
    // se o numero for menor que i, vai acrescentar o * no final
    for (var i = 1; i <= num; i++) {
        if (i < num ) {
             resposta = resposta + fruta + " * "; // se o numero for menor que i, vai acrescentar o * no final
        } else {//se nao vai retirar o *. Assim no final do laço não terá o *
            resposta = resposta + fruta; 
        }
        outResposta.textContent = resposta
    }
}
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);