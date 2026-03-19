function verFusoHorario() {
    //referencia
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    //entrada
    var horaBrasil = Number(inHoraBrasil.value);

    //validação
        //valida se existe conteudo válido na horaBrasil
    if (horaBrasil == 0 || isNaN(horaBrasil)) {
        alert("Informe um horário no brasil!")
        inHoraBrasil.focus();
        return;
    }
        //valida se hora > 24
    if (horaBrasil > 24) {
        alert("Informe um hora válida. De 1 à 24")
        inHoraBrasil.focus();
        return;

    }

    //variavel do calculo de hora da frança
    var horaFranca = horaBrasil + 5;

    //caso passe de 24 o calculo, subtrai para ter as horas iniciais
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;

    }

    //saída, resposta ao usuário
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}
//referencia ao botao + adicionando um evento quando clicado no botao
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verFusoHorario);