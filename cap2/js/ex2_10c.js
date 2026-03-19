function mostrarPromocao() {
    //referencia
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");

    //entradas
    var preco = Number(inPreco.value);
    var produto = inProduto.value;

    //processamento 
    var descontoProduto = preco / 2;
    var precoPromocao = (preco * 2) + descontoProduto;

    //saidas
    outPromocao.textContent = produto + " - Promoção: Leve 3 por RS: " + precoPromocao.toFixed(2);
    outValor.textContent = "O 3º produto custa apenas RS: " + descontoProduto.toFixed(2);
    
}
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao);