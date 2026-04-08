const candidatos = [];
const aprovados = [];

function adicionarCandidatos() {
    //referencia 
    let inCandidato = document.getElementById("inCandidato");
    let inAcertos = document.getElementById("inAcertos");
    //entrada
    let candidato = inCandidato.value;
    let acerto = Number(inAcertos.value);
    //validação
    if (candidato == "" || !acerto) {
        alert("Digite os dados corretamente");
        inCandidato.focus();
        return;
    }
    //inclusão no vetor
    if (acerto >= 0) {
        candidatos.push({ nome: candidato, acertos: acerto });
    } else {
        alert("Digite um valor de acertos válido");
        inAcertos.focus();
        return;
    }
    //limpar campos para conctinuar incluindo
    inCandidato.value = "";
    inAcertos.value = "";
    inCandidato.focus();
    //chamada de função de listar nomes e acertos
    listarCandidatos();
} let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidatos);

function listarCandidatos() {
    //referencia 
    let inCandidato = document.getElementById("inCandidato");
    //validação se vetor esta vazio
    if (candidatos.length == 0) {
        alert("Inclua algum candidato para listar");
        inCandidato.focus();
        return;
    }
    //referencia de resposta
    let outLista = document.getElementById("outLista");
    //entrada de lista
    let lista = "";
    for (let i = 0; i < candidatos.length; i++) {
        lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
    }
    outLista.textContent = lista;

}

function listarAprovados() {
    let numAcertos = Number(prompt("Número de Acertos para Aprovação: "));
    //cria copia do vetor principal de candidados, ordena o vetor copia em ordem crescente, e reverte a ordem
    let copia = candidatos.slice().sort(function (a, b) { return a.acertos - b.acertos }).reverse();
    //entrada de lista com aprovados para concatenação
    let listaAprovados = "";
    //ordena o vetor copia em ordem decrescente
    for (let i = 0; i < copia.length; i++) {
        if (copia[i].acertos >= numAcertos) {
            /*Esta é a forma correta de colocar elementos dentro de um array (const aprovados = []). */
            aprovados.push(copia[i]);
            listaAprovados += aprovados[i].nome + " - " + aprovados[i].acertos +" acertos\n";
        }

    }
    //referencia de outLista
    let outLista = document.getElementById("outLista");
    //saida de resultado
    outLista.textContent = listaAprovados;
    

} let btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", listarAprovados)