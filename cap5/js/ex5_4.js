var criancas = []; //vetor criado
function adicionarCriancas() {
    //referencia
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    //entrada
    var nome = inNome.value;
    var idade = Number(inIdade.value);

    //validações
    if (nome == "" || !idade) {
        alert("Digite um nome e uma idade válidos");
        inNome.focus();
        return;
    }

    //incluindo no vetor características do nosso objeto
    criancas.push({ nome: nome, idade: idade });

    //limpar campos para continuar incluindo mais objetos
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    //chamando a funciton listarCriancas()
    listarCriancas();

} var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas)

function listarCriancas() {
    //validação do vetor, se vazio, alerta irá aparecer
    if (criancas.length == 0) {
        alert("O vetor esta vazio");
        return;
    }

    //referencia 
    var outLista = document.getElementById("outLista");

    //entrada de lista para concatenação 
    var lista = "";

    //laço para incluir os dados do vetor em uma lista concatenada
    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
    }

    //Mostra a lista pronta
    outLista.textContent = lista;
} var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

function resumirLista() {
    //Verificação se vetor vazio
    if (criancas.length == 0) {
        alert("O vetor esta vazio");
        return;
    }

    //cria copia do vetor de criancas
    var copia = criancas.slice();

    //ordena o vetor copia pela idade
    copia.sort(function (a, b) { return a.idade - b.idade });

    //concatenação do resumo
    var resumo = "";

    //variável aux recebe o valor da idade mais baixa informada (já esta em ordem crescente)
    var aux = copia[0].idade;

    //vetor para receber os nomes das pessoas que tem a idade da variavel acima
    var nomes = [];

    //percorre os elementos do vetor (classificado por idade)
    for (var i = 0; i < copia.length; i++) {
        /*percorrendo o vetor copia, ordenado por idadei da menor para a maior,
        caso idade for igual a idade armazenada na variável aux, adiciona o nome também ao vetor */
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            // aqui esta informando a idade(aux) e a quantidade de crianças dentro dessa idade(criancas.length).
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            //aqui, no mesmo resumo, agora calcula e já informa a porcentagem de criancas com essa mesma idade, comparada com o total de crianças informadas pela copia do vetor
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            //por ultimo, ele adiciona no resumo os nomes das crianças que foram adicionadas a essa mesma idade
            resumo += "(" + nomes.join(", ") + ")\n\n";

            /*Agora vem uma parte importante. O valor da primeira idade, já tinha sido separado na var aux.
            Portanto, precisamos pegar a proxima idade e substituir o novo valor, pelo outro.
            Lembrando que ainda estou dentro do laço, então esse processo vai se repetir enquanto o i(var do laço) for menor
            que o numero total de de itens do vetor copia(que copiou todo o vetor criancas), assim passando por todas as idades
            como mostrado abaixo */

            aux = copia[i].idade;//obtem nova idade na ordem
            nomes = []; // limpa o vetor dos nomes
            nomes.push(copia[i].nome); //adiciona o proximo nome, que acompanha a idade nova obtida acima
        }
    }
    /*
    Explicação
    Como, abaixo, esta informando as informações da ultima idade?
    Simples: No laço acima, quando a idade muda, apenas mostra o resultado das idades anteriores. Assim, a ultima idade nunca é mostrada dentro do laço.
    Porém, no final do laço, nós pegamos essa idade nova, adicionando o valor da idade dentro de acordo com o valor do laço(i) que esta percorrendo o vetor.
    limpamos o conteudo dos nomes, que esta com os nomes da idade anterior,
    e por fim, adicionamos os nomes vinculados com a ultima idade, seguindo a mesma lógica. */
    // adiciona os nomes da última idade ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    // altera conteúdo de outLista
    document.getElementById("outLista").textContent = resumo;


} var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);