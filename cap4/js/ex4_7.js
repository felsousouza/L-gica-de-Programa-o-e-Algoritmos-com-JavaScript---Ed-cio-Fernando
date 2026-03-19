function fabricarEstrelas() {
    //referencias
    var inNumero = document.getElementById("inNumero");
    var outEspacos = document.getElementById("outEspacos");

    //entradas
    var num = Number(inNumero.value);
    var estrelas = "";

    //validações
    if (num == "" || isNaN(num)) {
        alert("DIgite apenas números inteiros");
        inNumero.focus();
        return;
    }

   
    
    //laço
    for (var i = 1; i <= num; i++) {
        if ((i % 2) !== 0) {
            estrelas = estrelas + "*"
        }else {
            estrelas = estrelas + "-"
        }
    }

    //saída
    outEspacos.textContent = estrelas;
}
var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", fabricarEstrelas)
