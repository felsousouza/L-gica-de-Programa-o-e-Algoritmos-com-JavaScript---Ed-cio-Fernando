function exibirNotas() {
    //referencia
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    // Limpa mensagens (caso, segunda execução)
    //fazendo isso o programa cada vez que é executado, ele limpa os campos 
    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    //entrada
    var saque = Number(inSaque.value)

    //validação 1 = se numero é 0 ou é caractere nao numero
    if (saque == 0 || isNaN(saque)) {
        alert("Informe o valor do saque corretamente"); // exibe alerta
        inSaque.focus(); // posiciona em inSaque
        return;
    }

    //validação 2 = se o saque é multiplo de 10.(escolhido 10 pois é o menor, e o 50 e 100 sao multiploes de 10) Se não for quer dizer que 
    //é numero quebrado e nao sera possivel
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }

    //calcula notas de 100, 50 e 10
    //primeiro calcula notas de 100, e o restante, fica armazenado na variavel resto
    //segundo, os proximos calculos sao feitos com a variavel resto, e nao mais saque
    var notasCem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto / 50);
    var resto = resto % 50;
    var notasDez = Math.floor(resto / 10);

    //exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de R$ 50: " +
            notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
    }


}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNotas);