function verificarLados() {
    //REFENCIAS
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResposta = document.getElementById("outResposta");
    var outTriangulo = document.getElementById("outTriangulo");

    //entradas
    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    //validações de entradas
    if (ladoA == 0 || isNaN(ladoA)) {
        alert("Digite um valor válido: A partir de 1");
        inLadoA.focus();
        return;
    }
    if (ladoB == 0 || isNaN(ladoB)) {
        alert("Digite um valor válido: A partir de 1");
        inLadoB.focus();
        return;
    }
    if (ladoC == 0 || isNaN(ladoC)) {
        alert("Digite um valor válido: A partir de 1");
        inLadoC.focus();
        return;
    }

    //variáveis para condições
    var somaAB = ladoA + ladoB;
    var somaAC = ladoA + ladoC;
    var somaBC = ladoB + ladoC;

    //aqui teve que ser feito em if, else if pois eu precisava que ele so 
    //passasse para a proxima verificação após constatar que a anterior nao acontecia
    //e quando acontecesse uma, ele encerrasse ali
    if (ladoA > somaBC || ladoB > somaAC || ladoC > somaAB) {
        outResposta.textContent = ("Lados não formam um triângulo");
    } else if (ladoA === ladoB && ladoC === ladoA) {
        outResposta.textContent = ("Lados podem formar um triângulo");
        outTriangulo.textContent = ("Tipo: Equilátero");
    }
    else if (ladoA === ladoB || ladoB === ladoC ||ladoA === ladoC) {
        outResposta.textContent = ("Lados podem formar um triângulo");
        outTriangulo.textContent = ("Tipo: Isósceles");
    } else  {
        outResposta.textContent = ("Lados podem formar um triângulo");
        outTriangulo.textContent = ("Tipo: Escaleno");
    }


}
//REFENCIA DO BOTAO VERIFICAR
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarLados);