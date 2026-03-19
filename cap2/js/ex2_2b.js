function promocao() {
    //(Referências)refencias de todos os elementos do HTML
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //(entradas) Obter conteudos 
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //(funcionalidade) calculo de promoção
    var entrada = preco / 2;
    var parcela = entrada / 12;

    //(saída)respostas com os valores
    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de RS: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de RS: " + parcela.toFixed(2);

}
//referencia do botao que vai acionar a função, tem que ser fora dela
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", promocao);