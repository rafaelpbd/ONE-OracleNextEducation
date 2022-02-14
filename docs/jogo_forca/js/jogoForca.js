tela = document.getElementById("canvas");
pincel = tela.getContext('2d');

function criaQuadrado(cor, x, y, width, lenght) {
        
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, width, lenght);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, width, lenght);

}

function sorteiaItem() {
    
    // limpar a area desenhada sempre que o tema for escolhido

    let limpaCanvas = document.querySelector("canvas")
    let context = limpaCanvas.getContext('2d')
    context.clearRect(0, 0, limpaCanvas.width, limpaCanvas.height);

    // reinicializar essas variaveis para nao haver repeticao quando o tema for escolhido novamente

    erros = "Erros: "
    listaErros = [" ",""]
    itemSorteado = []
    listaAcertos = []
    local = []

    // desenhaTexto(1150, 200, tema)

    var sortear = sorteia(temaEscolhido.length) // variavel para sortear um numero que servirá como forma de escolher um item aleatorio dentro da lista de temas 

        /* for para separar cada letra do item escolhido e 
        joga-la em uma lista com cada letra separada e com letra
            maiuscula, para facilitar na hora de fazer comparaçoes */

        for(let i = 0; i < temaEscolhido[sortear].length; i++) {

            itemSorteado.push(temaEscolhido[sortear][i]);
            itemSorteado[i] = itemSorteado[i].toUpperCase();
        }

        /* for para separar os locais onde devem ser desenhados
        os tracos e as letras */

        for(let count = 230; count <= 230 + (40 * itemSorteado.length); count += 40) {

            local.push(count)
            console.log("Locais: " + local)
        
        }

        /* */
        for(let x = 0; x < itemSorteado.length; x++) {

            listaAcertos[x] = " "

        }

        
        /* verifica se o caractere do item sorteado é um espaço,
        se for, não desenha traço e deixa um espaço vazio, se não for, desenha um traço nos locais definidos no for anterior */

        for(let m = 0; m < itemSorteado.length; m++) {

            if(itemSorteado[m] == " ") {

                desenhaTexto(local[m], 525, " ")
                listaAcertos[m] = "_"
                

            } else {

                desenhaTexto(local[m], 525, "_")

            }
        }

        

        console.log(itemSorteado)
}

function desenhaTexto(x, y, texto) {
    
    /* funçao para desenhar um texto dentro da area de canvas disponivel */

    pincel.font='30px Gochi Hand, cursive';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);

}

function sorteia(tamanho) {

    /* sorteia um numero aleatorio entre 0 e o numero passado dentro do parametro */

    return Math.floor(Math.random() * tamanho)

}

function limpaBoneco() {

    let cor = document.getElementById("cabeca");
        cor.style.cssText = "visibility: hidden;";
        cor = document.getElementById("tronco");
        cor.style.cssText = "visibility: hidden;";
        cor = document.getElementById("bracoEsq");
        cor.style.cssText = "visibility: hidden;";
        cor = document.getElementById("bracoDir");
        cor.style.cssText = "visibility: hidden;";
        cor = document.getElementById("pernaEsq");
        cor.style.cssText = "visibility: hidden;";
        cor = document.getElementById("pernaDir");
        cor.style.cssText = "visibility: hidden;";
}

function trocaCoresTemas(temaCor) {
        
        cor = temaCor
        cor.style.cssText = "color: white;" + "font-size: 30px;";
        cor = document.getElementById("frutasLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("filmesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("animaisLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";

}

function verificaFimJogo() {

    if(!(listaAcertos.includes(" ")) == true && itemSorteado.length > 1) {

        let ganhou = document.getElementById("telaGanhou");
        ganhou.style.cssText = "visibility: visible;";

        let temaVitoria = document.getElementById("temaVitoria");
            
        temaVitoria.play();
        temaVitoria.volume = 0.2;

    } 
    
    /* verifica se a lista de erros está completa, se estiver, finaliza o jogo */
    
    else if(contadorErros >= 6 && itemSorteado.length > 1) {

        // alert("Infelizmente, você perdeu!")
        
        let tururu = document.getElementById("tururu");
            
        tururu.play();
        tururu.volume = 0.2;

        let death = document.getElementById("telaPerdeu");
            death.style.cssText = "visibility: visible;";

            death.style.cssText.onclick = "visibility: hidden;";
    }

}


function chutar() {

    /* Nessa funçao que é chamada quando o botao tentar é 
    clicado, verifica-se se a letra chutada pelo usuario
    é igual a alguma letra que esteja no item que foi sorteado previamente dentro do tema escolhido, também verifica se a letra chutada já foi tentada anteriormente pelo usuário e foi considerada um erro. */

    let tentativa = document.getElementById("chute");
    chute = tentativa.value.toUpperCase(); /* converte o chute do usuario para letra maiuscula */ 

        /*  */

    for(let i = 0; i < itemSorteado.length; i++) {
        
        // for(n = 0; n < itemSorteado.length; n++) {

        //     listaAcertos[n] = ""

        // }

            if(itemSorteado[i] == chute) {
        
                desenhaTexto(local[i], 520, chute)
                listaAcertos[i] = chute
                // contadorAcertos += 1
                // listaAcertos.push(chute)
                console.log("listAcert: " + listaAcertos)
                // console.log("contAcertos: " + contadorAcertos)


                // if(!(listaAcertos.includes(chute)) == true && ((listaErros.includes(chute)) == false)) {
        
                //        // listaAcertos.push(chute)
                        
                //         listaAcertos[i] = chute
                //         console.log("listAcert: " + listaAcertos)
                //     }
                
                

                if ((chute.includes(listaAcertos)) == true) {

                    contadorAcertos += 1

                }

                console.log("contAcertos: " + contadorAcertos)
            }    
        
        if (!(itemSorteado.includes(chute)) == true){
            
            if(!(listaErros.includes(chute)) == true) {
                listaErros.push(chute)
                contadorErros += 1 

                if(contadorErros == 1) {
                    
                    let cor = document.getElementById("cabeca");
                    cor.style.cssText = "visibility: visible;" + "font-size: 30px;";

                }
                
                else if(contadorErros == 2) {
                    
                    let cor = document.getElementById("tronco");
                    cor.style.cssText = "visibility: visible;";

                }

                else if(contadorErros == 3) {
                    
                    let cor = document.getElementById("bracoDir");
                    cor.style.cssText = "visibility: visible;";

                }

                else if(contadorErros == 4) {
                    
                    let cor = document.getElementById("bracoEsq");
                    cor.style.cssText = "visibility: visible;";

                }

                else if(contadorErros == 5) {
                    
                    let cor = document.getElementById("pernaDir");
                    cor.style.cssText = "visibility: visible;";

                }

                else if(contadorErros == 6) {
                    
                    let cor = document.getElementById("pernaEsq");
                    cor.style.cssText = "visibility: visible;";
                

                }

                console.log("contErros: " + contadorErros)
                console.log(listaErros)
                erros = erros + " " + chute;
                desenhaTexto(240, 140, erros)
            }
        } 

        // if(!(listaAcertos.includes(chute)) == true && ((listaErros.includes(chute)) == false)) {
        
        //     listaAcertos.push(chute)
        //     console.log("listAcert: " + listaAcertos)

        // }
    }

    if(itemSorteado.length == 0) {

        alert("Por favor, escolha um tema!")

    }

    /* verifica se a lista de acertos está completa, se estiver, finaliza o jogo */

    // if(!(listaAcertos.includes(" ")) == true) {

    //     alert("Parabéns, você ganhou!")

    // } 
    
    // /* verifica se a lista de erros está completa, se estiver, finaliza o jogo */
    
    // else if(contadorErros >= 6 && itemSorteado.length > 1) {

    //     alert("Infelizmente, você perdeu!")

    // }

    
    verificaFimJogo()

    let limpaInput = document.getElementById("chute");
        limpaInput.value = ""

    console.log(itemSorteado)
    console.log(listaAcertos)

}


function selecionar() {

    let selecionar = document.getElementById("chute");
    selecionar.select();
    selecionar.value = ""

}

function escolheTema() {

   tema = document.querySelector('input[name="tema"]:checked').value;
   console.log(tema)
   
   contadorAcertos = 0
   contadorErros = 0
   temaEscolhido = []

   limpaBoneco()

    if(tema == "filmes") {

        temaEscolhido = filmes;
        let cor = document.getElementById("filmesLabel");
        cor.style.cssText = "color: white;" + "font-size: 40px;";
        cor = document.getElementById("frutasLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("animaisLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("paisesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";


    } else if(tema == "frutas") {

        temaEscolhido = frutas;
        
        let cor = document.getElementById("frutasLabel");
        
        cor.style.cssText = "color: white;" + "font-size: 40px;";
        cor = document.getElementById("filmesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("animaisLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("paisesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";

    } else if(tema == "paises") {

        temaEscolhido = paises;
        let cor = document.getElementById("paisesLabel");
        cor.style.cssText = "color: white;" + "font-size: 40px;";
        cor = document.getElementById("frutasLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("filmesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("animaisLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";

        // reinicia o jogo
        let perdeu = document.getElementById("telaPerdeu");
        perdeu.style.cssText = "visibility: hidden;";
        let ganhou = document.getElementById("telaGanhou");
        ganhou.style.cssText = "visibility: hidden;";
        
        // pausa a musica final
        let tururu = document.getElementById("tururu");    
        tururu.pause();
        tururu.currentTime = 0;

        let temaVitoria = document.getElementById("temaVitoria");    
        temaVitoria.pause();
        temaVitoria.currentTime = 0;
        
    } else if(tema == "animais") {

        temaEscolhido = animais;
        let cor = document.getElementById("animaisLabel");
        cor.style.cssText = "color: white;" + "font-size: 40px;";
        cor = document.getElementById("paisesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("frutasLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";
        cor = document.getElementById("filmesLabel");
        cor.style.cssText = "color: black;" + "font-size: 20px;";

    }
    
    sorteiaItem()

}

var erros = "Erros: "
var chute = ""
var teste = false
var contadorErros = 0
var contadorAcertos = 0

var letras = []
var tema = ""
var itemSorteado = []
var local = []
var temaEscolhido = []
var listaErros = []
var listaAcertos = []
var filmes = ["matrix", "titanic", "star wars", "os vingadores", "Jurassic Park", "o rei leao", "velozes e furiosos", "frozen", "avatar", "os incriveis", "pantera negra", "toy story", "piratas do caribe"]
var frutas = ["Abacate", "Abacaxi", "Amora", "Banana", "Caqui", "Goiaba", "Jabuticaba", "Jaca", "Kiwi", "Laranja", "Limao", "pera", "Mamao", "Manga", "Maracuja", "Melancia", "Morango", "Pessego", "Siriguela", "Pitaya", "Uva"]
var paises = ["africa do Sul", "Argentina", "Belgica", "Brasil", "Canada", "Chile", "Egito", "Grecia", "Hungria", "india", "japao", "Mexico", "Paraguai", "Portugal", "Suecia", "Tailandia", "Turquia", "Uruguai", "Nigeria", "Marrocos"]
var animais = ["abelha", "aranha", "baleia", "cachorro", "cavalo", "elefante", "formiga", "golfinho", "gato", "hiena", "hipopotamo", "jacare", "leao", "macaco", "ovelha", "panda", "pato", "rinoceronte", "sapo", "tartaruga", "zebra"]

