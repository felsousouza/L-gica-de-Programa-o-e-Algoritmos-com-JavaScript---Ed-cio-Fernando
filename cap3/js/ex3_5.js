function exibirRaizQuadrada() {
    //refencia
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //entrada
    var numero = Number(inNumero.value);
    var raiz = Math.sqrt(numero);
    
    //validação
    if (numero == 0 ||isNaN(numero)) {
        alert("Insira um numero válido");
        inNumero.focus();
        return;
    }

    //condições
        //expli. do raciocinio
        //se raiz quadra for igual ao valor da raiz quadrada arredonda
        //para baixo (Math.floor()), então é um numero inteiro
    if(raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raíz Quadrada é: " + raiz;
    } else {
        outResposta.textContent = "Não há raiz exata para " + numero;
    }

}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirRaizQuadrada);
