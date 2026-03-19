function mostrarPrevisao() {
    //referencias
    var inNumero = document.getElementById("inNumero");
    var inAnos = document.getElementById("inAnos");
    var outResposta = document.getElementById("outResposta");
    //entradas
    var num = Number(inNumero.value);
    var anos = Number(inAnos.value);
    var resposta = "";
    //validações
    if (num < 2 || isNaN(num)) {
        alert("Digite um número válido. Acima de 2");
        inNumero.focus();
        return;
    }
    if (anos == "" || isNaN(anos)) {
        alert("Digite quantidade de anos válidos.");
        inAnos.focus();
        return;
    }
    //laço
    for (var i = 1; i <= anos; i++) {
        if (i == 1) { // isolando a primeira resposta, não tem calculo aqui de triplicar, e so colocar o mesmo numero digitado pelo usuario
            //por ser apenas o 1 laço
            resposta = resposta + i + "º Ano: " + num + " Chinchilas\n";
        }
        if (i > 1) {// aqui esta ultiplicando o numero por 3 e acumulando o valor nele mesmo. Para que a cada repetição
            //esse valor seja multiplicado por 3 novamente
            num = num * 3;
            resposta = resposta + i + "º Ano: " + num + " Chinchilas\n";
        }

        /*Outra forma mais simples de chegar no mesmo resultado, é com apenas 1 laço
        de repetição, sem usar, if. Vou deixar aqui pois foio chatGPT que me orientou
        dessa forma, e não foi um pensamento meu. Mas fica para futuros exeplos
        de simplificação
        
        for (var i = 1; i <= anos; i++) {
            // += é igual resposta = resposta + ....
            resposta += i + "º Ano: " + num + " Chinchilas\n";
 
             num = num * 3;
        }
        
        */
    }
    outResposta.textContent = resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPrevisao);