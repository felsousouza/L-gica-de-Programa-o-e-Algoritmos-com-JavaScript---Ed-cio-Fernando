const numeros = [];

function adicionarNumeros() {
    //referencia
    let inNumero = document.getElementById("inNumero");
    //entrada
    let num = Number(inNumero.value);
    //validação simples(se conteudo vazio, ou for caracteres, volta)
    if (num == "" || isNaN(num)) {
        alert("Digite apenas números");
        inNumero.focus();
        return;
    }
    //inclusão no vetor
    if (numeros.indexOf(num) >= 0) {
        alert("Você já digitou este número antes, digite outro: ");
        inNumero.value = "";
        inNumero.focus();
        return;
    } else {
         numeros.push(num);
    }
   
    //limpar campos e focar para colocar mais números
    inNumero.value = "";
    inNumero.focus();
    //chama function de lista
    listarNumeros();
} let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumeros);

function listarNumeros() {      
    //validação, se vetor vazio, nao executa
    if (numeros.length == 0) {
        alert("O vetor esta vazio");
        return;
    }
    //referencia
    let outLista = document.getElementById("outLista");
    //lista para concatenação
    lista = "";
    //laço para concatenar lista e adicionar numeros
    for (let i = 0; i < numeros.length; i++) {
        if (numeros)
        lista = "Números: " + numeros.join(", ")
    }

    outLista.textContent = lista;
}

function verificarOrdem() {
    //referencia 
    let outResposta = document.getElementById("outResposta");
    //entrada de variavel com ordem crescente do vetor, sem alterar o vetor original
    //slice faz uma copia do original, e sort modifica a ordem da copia.
    const numCresc = numeros.slice().sort(function (a, b) { 
        return a - b
    });
    let emOrdem = true; // variavel de controle
    //percorrer o vetor, verificando se numeros é diferente de numCresc (vetor original, vetor copia com ordem alterada)
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] != numCresc[i]) {
            emOrdem = false;
            break;
        }
    }
    //verifcar se variavel de controle mudou de true para false
    if (emOrdem) {
        outResposta.textContent = "Atenção... Números estão em ordem crescente!";
    } else {
        outResposta.textContent = "Atenção... Números não estão em ordem crescente";
    }
}let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);