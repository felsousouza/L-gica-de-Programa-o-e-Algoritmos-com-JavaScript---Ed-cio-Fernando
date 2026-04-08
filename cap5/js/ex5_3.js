var carros = [];//vetor criado

function adicionarCarro() {
    //referencias 
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");

    //entradas
    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    //validações
    if (modelo == "") {
        alert("Digite um modelo válido.");
        inModelo.focus();
        return;
    }
    if (!preco) {
        alert("Digite um número válido.");
        inPreco.focus();
        return;
    }

    //entrada de objetos dentro do vetor
    carros.push({ modelo: modelo, preco: preco });

    //limpar campos, importante para que a pessoa continue adicionando itens
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    //chamando a function de listar carros, criada abaixo dessa
    listarCarros();
} var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarro);

function listarCarros() {
    //AQUI PRIMEIRO TEM QUE VERIFICAR SE O VETOR ESTA VAZIO
    if (carros.length == 0) {
        alert("Não há carros na lista");
        return;
    }

    //referencia do conteudo de saida
    var outLista = document.getElementById("outLista");

    //usando concatenação de lista para exibir a lista do vetor
    var lista = "";

    for (var i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }

    //saida
    outLista.textContent = lista;

} var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);

function filtrarCarros() {
    // faz a leitura do valor máximo a partir do método prompt
    var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar ? "));

    // se não preencheu ou conteúdo inválido ...
    if (maximo == 0 || isNaN(maximo)) {
        return; // ... retorna
    }

    // para concatenar lista de carros que obedecem ao critério de pesquisa / filtro
    var lista = "";

    // percorre todos os elementos do vetor
    for (var i = 0; i < carros.length; i++) {
        // verifica se o preço é inferior (ou igual) ao máximo
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " - R$: " +
                carros[i].preco.toFixed(2) + "\n";
        }
    }

    //REFERENCIA AO CONTEUDO DE SAÍDA
    var outLista = document.getElementById("outLista"); 
    
    // se a lista esta vazia, significa que nenhum veículo foi encontrado(no for)
    if (lista == "") {
        outLista.textContent = "Não há carros com preço até R$ " +
            maximo.toFixed(2);
    } else {
        // senão, mostra os veículos obtidos
        outLista.textContent = "Carros até R$ " + maximo.toFixed(2) +
            "\n------------------------\n" + lista;
    }
}
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);