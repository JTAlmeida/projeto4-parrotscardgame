let cards = document.querySelectorAll(".card");

function flip() {
    this.classList.toggle('flip');
  }

 cards.forEach(card => card.addEventListener('click', flip));