function fazerDeposito() {
    //refencias
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    //entrada
    var valor = Number(inValor.value);

    //validações
    if (valor == 0 || isNaN(valor)) {
        alert("Digite um valor válido")
        inValor.focus();
        return;
    }
    
    //variaveis para condições
    var tempoTres = Math.floor(valor / 3);
    var resto = valor % 3;
    var tempoDois = Math.floor(resto / 1.75);
    resto = resto % 1.75
    var tempoUm = Math.floor(resto / 1);
    resto = resto % 1;

    var tempo = tempoTres * 120 + tempoDois * 60 + tempoUm * 30;
    resto = Number(resto);

    outTempo.textContent = "Tempo: " + tempo + "min";
    outTroco.textContent = "Troco R$: " + resto.toFixed(2);



}
//referencia do botao
var btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click", fazerDeposito);