var clubes = [];

function adicionarClubes() {
    //referencia
    var inClube = document.getElementById("inClube");
    //entrada
    var clube = inClube.value;
    //validação se clube digitado certo
    if (clube == "") {
        alert("Digite o nome do Clube");
        inClube.focus();
        return;
    }
    //inclusão no vetor de caracteristica do objeto
    clubes.push({ nome: clube });
    //limpar campos para continuar digitando
    inClube.value = "";
    inClube.focus();
    //chamar a function listarClubes
    listarClubes();
} var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes() {
    //Validação se vetor esta vazia
    if (clubes.length == 0) {
        alert("O vetor esta vazio");
        return;
    }
    //referencia 
    var outLista = document.getElementById("outLista");
    //entrada de lista para concatenar resposta
    var lista = "";
    //laço para pegar nome do clube dentro do vetor e concatenar em lista
    /* i inicia em 0 pois a primeira posição de um vetor é 0, então para que passe por ela, ele precisa iniciar da mesma numeração */
    for (var i = 0; i < clubes.length; i++) {
        lista += (i + 1) + ". " + clubes[i].nome + "\n";
    }
    outLista.textContent = lista;


} var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela() {

    var jogos = "";//entrada de variavel de jogos montados
    var copia = clubes.slice(); //copia do vetor para manipulação
    var jogo1 = "";//entrada de variavel para montar os jogos
    var jogo2 = "";//entrada de variavel para montar os jogos
    if (clubes.length % 2 !== 0) {
        alert("digite pelo menos mais 1 clube para montar a tabela dos jogos");
        inClube.focus();
        return;
    } else {
        //laço ENQUANTO. Aqui foi usando o while por ser mais recomendado, pois enquanto o valor for maior que 1, ou seja, 
        //tiver pelo menos 2 elementos (0 e 1), ele vai executar o comando de armazenar o primeiro e o ultimo em variaveis diferentes
        while (copia.length > 1) {
            jogo1 = copia.shift().nome;
            jogo2 = copia.pop().nome;
            jogos += jogo1 + " X " + jogo2 + "\n";
        }
        outLista.textContent = jogos;
    }
} var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela)

