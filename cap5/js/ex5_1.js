var pacientes = []; // declara vetor global

function adicionarPaciente() {

    // REFERENCIAS
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    //ENTRADAS
    var nome = inPaciente.value; // obtém nome do paciente

    // VALIDAÇÕES
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome); // adiciona o nome no final do vetor

    var lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
// cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

function adicionarUrgente() {
    // REFERENCIAS
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    //ENTRADAS
    var nome = inPaciente.value; // obtém nome do paciente

    // VALIDAÇÕES
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome); // adiciona o nome no inicio do vetor

    var lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgente);

function atenderPaciente() {
    // verifica se vetor pacientes está vazio
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }
    // cria referência aos elementos de saída de dados
    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    // remove paciente do início da fila (e obtém nome)
    var atender = pacientes.shift();

    // exibe nome do paciente em atendimento
    outAtendimento.textContent = atender;

    // string para concatenar pacientes
    var lista = "";

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);