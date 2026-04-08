//recebe nome, duração em min, e converte min em horas
function converterDuracao() {
    //cria referencia aos elementos da página
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //obtem conteudos dos campos de entrada 
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //arredonda para baixo o resultado, para ter o valor da hora cheia
    var horas = Math.floor(duracao / 60);
    //obtem o resto da divisão entre os numeros, para ter os minutos restantes
    var minutos = duracao % 60;

    //saída,altera o conteudo dos parágrafos das respostas
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + minutos + "minuto(s)";
}
//cria refernecia ao elemento btConverter(botão)
var btConverter = document.getElementById("btConverter");
//registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);