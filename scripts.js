let quantCartas = 0;
let card1, card2;
let cartaVirada = false;
let travaCards = false;
let checaFim = false;
let cardTemplate = ``;
let contaTentativas = 0;
const cartinhas = [ 
    `
    <div class="card match1 check1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `,
    `
    <div class="card match2 check2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `,
    `
    <div class="card match3 check3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `,
    `
    <div class="card match4 check4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `,
    `
    <div class="card match5 check5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `,
    `
    <div class="card match6 check6" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./tripletsparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `,
    `
    <div class="card match7 check7" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./unicornparrot.gif" class="back-face gif" data-identifier:"back-face" />
    </div>
    `    
]
function quantidadeCartas(){
  quantCartas = prompt('Com quantas cartas deseja jogar? (4, 6, 8, 10, 12 ou 14)');

  if (quantCartas%2!==0 || quantCartas<4 || quantCartas>14){
    alert('Número inválido. Por favor insira um número par de 4 a 14.');
    quantidadeCartas();
  } 
  distribuiCartas();
}
quantidadeCartas();

function distribuiCartas(){
    for (i=0; i<quantCartas/2; i++){
        cardTemplate += cartinhas[i];
        cardTemplate += cartinhas[i];
    }
    document.querySelector(".cards").innerHTML = cardTemplate;
}
let cards = document.querySelectorAll(".card");

function flip() {
    if (travaCards){
        return;
    }
    if(this===card1){
        return;
    }

    this.classList.add('flip');

    if(cartaVirada===false){
        cartaVirada=true;
        card1=this;
        return;
    } 
    card2 = this;
    cartaVirada = false;
 
    checaDupla();
  }

function checaDupla(){
    if( (card1.classList.contains("match1") && card2.classList.contains("match1")) || (card1.classList.contains("match2") && card2.classList.contains("match2")) || (card1.classList.contains("match3") && card2.classList.contains("match3")) || (card1.classList.contains("match4") && card2.classList.contains("match4")) || (card1.classList.contains("match5") && card2.classList.contains("match5")) || (card1.classList.contains("match6") && card2.classList.contains("match6")) || (card1.classList.contains("match7") && card2.classList.contains("match7"))){
        card1.classList.add("check");
        card2.classList.add("check");
        travaCard();
    } else {
        desviraCard();
    }
}

function embaralha() {
    cards.forEach(card => {
      let posicaoAleatoria = Math.floor(Math.random() * quantCartas);
      card.style.order = posicaoAleatoria;
    });
  }
  embaralha();

function travaCard() {
    card1.removeEventListener('click', flip);
    card2.removeEventListener('click', flip);
    contaTentativas++;
    setTimeout(() => {
        testaFim();
    }, 1000);
  }

function desviraCard(){
    travaCards = true;
    setTimeout(() => {
    card1.classList.remove('flip');
    card2.classList.remove('flip');
    card1 = null;
    contaTentativas++;
    travaCards = false;
}, 1000);
}

let condicao1 = document.querySelector(".check1");
let condicao2 = document.querySelector(".check2");
let condicao3 = document.querySelector(".check3");
let condicao4 = document.querySelector(".check4");
let condicao5 = document.querySelector(".check5");
let condicao6 = document.querySelector(".check6");
let condicao7 = document.querySelector(".check7");

function testaFim(){
    if (quantCartas==4){
        if ( condicao1.classList.contains("check") && condicao2.classList.contains("check")){
            alert(`Você ganhou em ${contaTentativas} jogadas!`);
    }} else if (quantCartas==6){
        if ( condicao1.classList.contains("check") && condicao2.classList.contains("check") && condicao3.classList.contains("check")){
            alert(`Você ganhou em ${contaTentativas} jogadas!`); 
    }} else if (quantCartas==8){
        if ( condicao1.classList.contains("check") && condicao2.classList.contains("check") && condicao3.classList.contains("check") && condicao4.classList.contains("check")){
            alert(`Você ganhou em ${contaTentativas} jogadas!`); 
    }} else if (quantCartas==10){
        if ( condicao1.classList.contains("check") && condicao2.classList.contains("check") && condicao3.classList.contains("check") && condicao4.classList.contains("check") && condicao5.classList.contains("check")){
            alert(`Você ganhou em ${contaTentativas} jogadas!`); 
    }} else if (quantCartas==12){
        if ( condicao1.classList.contains("check") && condicao2.classList.contains("check") && condicao3.classList.contains("check") && condicao4.classList.contains("check") && condicao5.classList.contains("check") && condicao6.classList.contains("check")){
            alert(`Você ganhou em ${contaTentativas} jogadas!`); 
    }} else if (quantCartas==14){
        if ( condicao1.classList.contains("check") && condicao2.classList.contains("check") && condicao3.classList.contains("check") && condicao4.classList.contains("check") && condicao5.classList.contains("check") && condicao6.classList.contains("check") && condicao7.classList.contains("check")){
            alert(`Você ganhou em ${contaTentativas} jogadas!`);
        } 
    }
}

cards.forEach(card => card.addEventListener('click', flip));