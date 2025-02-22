//colors array: This array holds distinct color values in strings, representing the colors for the cards in the memory match game. 
//These colors create pairs for the game.
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
//cards array: Initialized by shuffling and attaching the 'colors' array, this 'cards' array holds the color values for the cards in the game. 
//The shuffle function employs the Fisher-Yates algorithm to randomize the order of the colors and then duplicates these colors to create pairs, forming the set of cards for gameplay.
let cards = shuffle(colors.concat(colors));
//selectedCards: This variable acts as a temporary storage for the currently selected cards during the game. 
//When a player clicks on a card, it gets added to this array to enable match comparisons.
let selectedCards = [];
//score: This variable tracks the player's score throughout the game. 
//The score gets incremented whenever the player matches a pair of cards successfully. 
//It's updated and displayed to reflect the player's progress and performance.
let score = 0;
//timeLeft: It represents the time remaining for the player to complete the game. 
//Initially set to a specific duration, it counts down as the game progresses. 
//When it reaches zero, the game ends.
let timeLeft = 30;
//gameInterval: This variable manages the game timer. 
//It's utilized to control the countdown mechanism for the game's duration. 
//The interval continuously decrements the 'timeLeft' variable, updating the displayed time and triggering the game's end when the time expires.
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
//for starting the game
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}
//for shuffling the elements of an array in random order.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];//swaps the values at positions 'i' and 'j' without requiring a temporary variable.
    }
    return array;
}

function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;//This line uses array destructuring to assign the first two elements of the 'selectedCards' array to 'card1' and 'card2'. 
    //These variables represent the two cards selected by the player for comparison.
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);