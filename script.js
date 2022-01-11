let cards = [];
let sum = 0;
let message = '';
let hasBlackJack = false;
let isAlive = false;
let msg = '';
let msgEl = document.querySelector('#msg-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

function startGame() {
    cards = []
    isAlive = true;
    hasBlackJack = false;
    cards[0] = getRandomCard();
    cards[1] = getRandomCard();
    sum = cards[0] + cards[1];
    renderGame();
}

function getRandomCard() {
    let res = Math.floor(Math.random() * 13) + 1;

    if (res === 1) {
        return 11;
    } else if (res > 10) {
        return 10;
    } else {
        return res;
    }
}

function renderGame() {
    cardsEl.innerHTML = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += ' ' + cards[i];
    }
    sumEl.innerHTML = 'Sum: ' + sum;
    if (sum < 21) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = 'Wohoo! You\'ve got BlackJack';
        hasBlackJack = true;
    } else {
        message = 'You\'re out of the game!';
        isAlive = false;
    }

    msgEl.innerHTML = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
    
        renderGame();
    }
}