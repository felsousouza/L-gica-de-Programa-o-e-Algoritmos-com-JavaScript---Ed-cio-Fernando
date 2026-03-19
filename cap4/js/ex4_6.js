function verificarPrimo() {
    // cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta")
    var num = Number(inNumero.value); // obtém o número informado

    // verifica se preencheu corretamente o campo inNumero
    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...");
        inNumero.focus();
        return;
    }
    var numDivisores = 0; // declara e inicializa contador

    // percorre os possíveis divisores do num
    for (var i = 2; i <= num / 2; i++) { //o trecho i <= num/2 esta dividindo
        //... onum pela metade para o contador ir somente até a metade, pois
        //...nenhum número maior que a metade consegue dividir um número inteiro exceto ele mesmo.
        if (num % i == 0) {
            temDivisor = 1; // muda o flag
            break; // sai da repetição
        }
    }
    // se num > 1 e não possui divisor
    if (num > 1 && !temDivisor) {//se numero maior que 1 E NÃO tem temDivisor, é primo
        outResposta.textContent = num + " É primo";
    } else {
        outResposta.textContent = num + " Não é primo";
    }

    inNumero.value = "";
}
// referencia elemento e após associa function ao evento click
var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);