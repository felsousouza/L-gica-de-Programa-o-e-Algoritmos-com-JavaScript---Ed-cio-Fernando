function mostrarValor() {
    //referencias
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");

    //entradas
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    //Processamento
    var bloco = Math.ceil(tempo / 15);
    var valorTotal = valor * bloco;


    //saídas
    outValor.textContent = "Valor a pagar RS:" + valorTotal.toFixed(2);

}
var btCalcularValor = document.getElementById("btCalcularValor");
btCalcularValor.addEventListener("click", mostrarValor);
