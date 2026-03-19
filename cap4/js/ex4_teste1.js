/* Aqui esta um exempli de como fazer o exercicio 7D mas com 2 laços de repetição, 
1 comandando a linha, e 1 dentro colocando as estrelas*/ 
function criarEstrelas() {
    //referencias
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    //entradas
    var num = Number(inNumero.value);
    var resposta = "";
    //validações
    if (!num) {
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }
    //lógica
    for (var i = 1; i <= num; i++) {
        
        for (var b = 1; b <= i; b++) {
            resposta += "*";
        }
       resposta += "\n"
    }


    //saída
    outResposta.textContent = resposta;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);