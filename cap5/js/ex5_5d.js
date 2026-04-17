const noticias = [];

function adcNoticias() {
    //referencia
    let inNoticia = document.getElementById("inNoticia");
    let outContador = document.getElementById("outContador");
    //entrada
    let noticia = inNoticia.value;
    let qtdCadastradas = 0;
    //validação se conteudo vazio ou valido
    if (noticia == "") {
        alert("Digite uma noticia");
        inNoticia.focus();
        return;
    }
    //inclusão de noticia no vetor
    noticias.push(noticia);
    //limpeza de campos para novas inclusões
    inNoticia.value = "";
    inNoticia.focus();
    //entrada de dados de quantidade de noticias no vetor
    qtdCadastradas = noticias.length;
    //saída de resultado com qta de noticias informadas
    outContador.textContent = qtdCadastradas;

}let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adcNoticias);

function visualizarNoticias() {
    //verificação se vetor esta vazio
    if (noticias.length === 0) {
        alert("Insira alguma noticia");
        return;
    } 
    //referencias normais   
    let inQuantidade = document.getElementById("inQuantidade"); 
    //referencia de ul pois a lista esta dentro de uma ul vazia no html.
    const ul = document.getElementById("outNoticias");
    //entradas
    let qtd = Number(inQuantidade.value); 
    let copia = noticias.slice().reverse();
    let numero = noticias.length; //entrada de cont de qtd de noticias novamente somente para mostrar na lista diminuindo dentro do laço
    //limpeza da lista
    ul.innerHTML = "";
    for (let i = 0; i < qtd && copia.length > 0; i++) {
        const contNoticiasRec = copia.shift();

        const li = document.createElement("li");
        li.textContent = numero + "º - " + contNoticiasRec;
        ul.appendChild(li);

        numero--;
    }

    

} let btVisualizar = document.getElementById("btVisualizar");
btVisualizar.addEventListener("click", visualizarNoticias);
