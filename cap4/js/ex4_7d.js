function criarEstrelas() {
    //referencias
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    //entradas
    var num = Number(inNumero.value);
    var estrelas = "";
    var resposta = "";
    //validações
    if (!num) {
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }
    //lógica
    for (var i = 1; i <= num; i++) {
        estrelas = estrelas + "*";
        for (var b = i; b <= num; b++) {
            resposta += estrelas + "\n";
            break;
        }
    }

    /* Uma forma de simplificar essa logica é retirando o segundo laço que criei
    pois no fim ele acaba nao servindo de nada, pois toda vez sai e reseta.
    Eu posso utilizar no lugar dele, somente :
    
    resposta += estrelas + "\n";
      
    */ 
    //saída
    outResposta.textContent = resposta;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);