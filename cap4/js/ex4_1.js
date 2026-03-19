function calcularTaboada() {
    //referencias
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    //entradas
    var numero = Number(inNumero.value);
    
    //variavel do tipo string para a resposta ficar com " 1 2 3 4 "
    var respostaEspacada = "";

    //validações
    if (numero == 0 || isNaN(numero)) {
        alert("DIigite um valor válido");
        inNumero.focus();
        return;
    }

    //Execução
    for (var i = 1; i < 11; i++) {
        respostaEspacada = respostaEspacada + i + " X " + numero + " = " + numero * i + "\n";
    }

    //saída
    outTabuada.textContent = respostaEspacada;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularTaboada);