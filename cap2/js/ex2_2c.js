function calcularPreco() {
    //(referencias) Referencias de entradas e saidas do HTML
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    //(entradas) obtenção do conteudo pelo usuário
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    //Função/processamento
    var valor = (quilo / 1000) * consumo;

    //(sáida) Respostas alterando conteudo da linha de respostas
    outValor.textContent = "Valor a pagar RS: " + valor.toFixed(2);




}
//referencia ao botao que ativa a function
var btCalcular = document.getElementById("btCalcular");
//o evento que ativa a function quando o click no botao acontece
btCalcular.addEventListener("click", calcularPreco);