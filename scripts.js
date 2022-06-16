let quantCartas = 0;

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
  let cardTemplate = ``;
  if (quantCartas == 4){
    cardTemplate = `
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
    `;
      document.querySelector(".cards").innerHTML = cardTemplate;
  } else if (quantCartas == 6){
      cardTemplate = `
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
    `;
      document.querySelector(".cards").innerHTML = cardTemplate;
  } else if (quantCartas == 8){
      cardTemplate = `
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
    `;
      document.querySelector(".cards").innerHTML = cardTemplate;
  } else if (quantCartas == 10){
      cardTemplate = `
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
    `;
      document.querySelector(".cards").innerHTML = cardTemplate;
  } else if (quantCartas == 12){
      cardTemplate = `
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card6" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./tripletsparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card6" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./tripletsparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
    `
      document.querySelector(".cards").innerHTML = cardTemplate;
  } else if (quantCartas == 14){
      cardTemplate = `
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card1" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./bobrossparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card2" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./explodyparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card3" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./fiestaparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card4" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./metalparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card5" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./revertitparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card6" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./tripletsparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card6" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./tripletsparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card7" data-identifier:"card">
            <img src="./front.png" class="front-face" data-identifier:"front-face" />
            <img src="./unicornparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
        <div class="card card7" data-identifier:"card">
          <img src="./front.png" class="front-face" data-identifier:"front-face" />
          <img src="./unicornparrot.gif" class="back-face gif" data-identifier:"back-face" />
        </div>
    `;
      document.querySelector(".cards").innerHTML = cardTemplate;
  }
}
let cards = document.querySelectorAll(".card");

function embaralha() {
  quantCartas = quantCartas;
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * quantCartas);
    card.style.order = ramdomPos;
  });
}
embaralha();

function flip() {
    this.classList.toggle('flip');
  }

cards.forEach(card => card.addEventListener('click', flip));
