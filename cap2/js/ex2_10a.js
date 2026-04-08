function mostrarPromocao() {
    //referencias 
    var inRemedio = document.getElementById("inRemedio");
    var inPreco = document.getElementById("inPreco");

    //(entrada) pegando somente o conteudo informado pelo usuario
    var remedio = inRemedio.value;
    var preco = Number(inPreco.value);

    //(processamento)
    var promocao = Math.floor(preco * 2);

    //(Sáida) Resposta ao usuário 
    outRemedio.textContent = "Pomoção de " + remedio;
    outPromocao.textContent = "Leve 2 por apenas RS: " + promocao.toFixed(2);

}
//referencia do botao
var btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", mostrarPromocao);