
function copia() {

    var copiaTexto = document.getElementById("caixa_codificadora");
    copiaTexto.select();
    navigator.clipboard.writeText(copiaTexto.value);

}

function caracteresEsperiais(caractere) {
    
    const caracteresEsp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return caracteresEsp.test(caractere);

}

function caracteresComAcento(caractere) {
    
    const caracteresAcento = /ãẽĩõũâêîôûáéíóú/;
    return caracteresAcento.test(caractere);

}

function selecionar() {

    var selecionar = document.getElementById("caixa_decodificadora");
    selecionar.select();

}

function codificar() {

    var criptografia = document.getElementById("caixa_decodificadora");
    var texto = criptografia.value;

    var novoTexto = []
    textoCriptografado = ""

    var contador = 0;
  
    for(i = 0; i < texto.length; i++) {
        var testeMinuscula = "";
        testeMinuscula = texto[i]; 
        
        if (texto[i] == testeMinuscula.toLowerCase() && caracteresEsperiais(testeMinuscula) != true && caracteresComAcento(testeMinuscula) != true) {

            novoTexto[i] = texto[i] 

        } else {
            var alertaLetraMaiuscula = document.getElementById("caixa_decodificadora");
            alertaLetraMaiuscula.value = "Digite somente letras minusculas, sem acento e não use caracteres especiais."
            var limparCampoTexto = document.getElementById("caixa_codificadora");
            limparCampoTexto.value = ""
            contador = texto.length;
            break;
        }
        console.log(testeMinuscula);
    }
    
    
    while(contador < texto.length) {
        if(novoTexto[contador] == "a") {
            novoTexto[contador] = "ai";
            textoCriptografado += novoTexto[contador]
            contador++;
        }
        else if(novoTexto[contador] == "e") {
            novoTexto[contador] = "enter";
            textoCriptografado += novoTexto[contador]
            contador++;
        }
        else if(novoTexto[contador] == "i") {
            novoTexto[contador] = "imes";
            textoCriptografado += novoTexto[contador]
            contador++;
        }
        else if(novoTexto[contador] == "o") {
            novoTexto[contador] = "ober";
            textoCriptografado += novoTexto[contador]
            contador++;
        }
        else if(novoTexto[contador] == "u") {
            novoTexto[contador] = "ufat";
            textoCriptografado += novoTexto[contador]
            contador++;
        }
        else {
            textoCriptografado += novoTexto[contador]
            contador++;

        }

        document.getElementById("caixa_codificadora").value = textoCriptografado;

    };  
}

function descriptografar() {

    var descriptografia = document.getElementById("caixa_decodificadora");
    var texto = descriptografia.value;
    
    var novoTexto = []
    textoDescriptografado = ""

    var contador = 0;
  
    for(contador = 0; contador < texto.length; contador++) {
        novoTexto[contador] = texto[contador]

    }
    
    contador = 0;
    
    while(contador < texto.length) {
        if(novoTexto[contador] == "a") {
            novoTexto[contador] = "a";
            textoDescriptografado += novoTexto[contador];
            contador+= 2;
        }
        else if(novoTexto[contador] == "e") {
            novoTexto[contador] = "e";
            textoDescriptografado += novoTexto[contador]
            contador+= 5;
        }
        else if(novoTexto[contador] == "i") {
            novoTexto[contador] = "i";
            textoDescriptografado += novoTexto[contador]
            contador+= 4;
        }
        else if(novoTexto[contador] == "o") {
            novoTexto[contador] = "o";
            textoDescriptografado += novoTexto[contador]
            contador+= 4;
        }
        else if(novoTexto[contador] == "u") {
            novoTexto[contador] = "u";
            textoDescriptografado += novoTexto[contador]
            contador+= 4;
        }
        else {
            textoDescriptografado += novoTexto[contador]
            contador++;

        }

        document.getElementById("caixa_codificadora").value = textoDescriptografado;

    };

};

var textoCriptografado = ""
var textoDescriptografado = ""



/* 
    document.getElementById("caixa_codificadora").value = textoCriptografado;
    
    
    caixa_codificadora.value = textoCriptografado 
    console.log(textoCriptografado);
    console.log(textoDescriptografado);

*/


    












/*


var caixa_decodificadora = document.querySelector("#caixa_decodificadora");
caixa_decodificadora.focus();
*/
