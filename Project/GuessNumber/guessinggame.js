let randomNumber;
let attempts = 0;
const maxAttempts = 10;
let p = document.getElementById("para");
function getRandomNumber(start, end) {
    // Ensure start is less than or equal to end
    if (start > end) {
        [start, end] = [end, start]; // Swap values if start is greater than end
    }
    // Calculate the range
    let range = end - start + 1;
    // Generate a random number within the range
    let randomNumbers = Math.floor(Math.random() * range) + start;
    return randomNumbers;
}

// Function to reset the game
function resetGame() {
    let startInput = document.getElementById('start').value;
    let endInput = document.getElementById('end').value;

    let start = parseInt(startInput);
    let end = parseInt(endInput);

    if (isNaN(start) || isNaN(end)) {
        alert('Please enter valid numbers for start and end.');
        return;
    }

    randomNumber = getRandomNumber(start, end);
    attempts = 0;
    p.textContent = '';
    document.getElementById('main').value = '';
    p.textContent = `Game started. Guess a number between ${start} and ${end}.`;
}

// Event listener for Play Game button
document.getElementById('green').addEventListener('click', function() {
    resetGame();
    restart();
    p.textContent = 'Game started. Guess a number between 1 and 100.';
});

// Event listener for Exit Game button
document.getElementById('red').addEventListener('click', function() {
    resetGame();
    restart();
    p.textContent = 'Game exited.';
    document.getElementById('main').value = '';
});

function restart() {
    let startInput = document.getElementById('start').value = '';
    let endInput = document.getElementById('end').value = '';
}

// Event listener for Guess button
document.getElementById('btn_guess').addEventListener('click', function() {
    const guess = parseInt(document.querySelector('#main').value);
    if (isNaN(guess) || guess < start || guess > end) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    attempts++;

    if (guess === randomNumber) {
        p.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        p.textContent = 'Its to Small, Try a higher number.';
    } else {
        p.textContent = 'Its to larger, Try a lower number.';
    }

    // Check if maximum attempts reached
    if (attempts === maxAttempts) {
        p.textContent = `Game over. The correct number was ${randomNumber}.`;
    }
});

document.getElementById('generateBtn').addEventListener('click', function() {
    let startInput = document.getElementById('start').value;
    let endInput = document.getElementById('end').value;

    let start = parseInt(startInput);
    let end = parseInt(endInput);

    if (isNaN(start) || isNaN(end)) {
        alert('Please enter valid numbers for start and end.');
        return;
    }

    randomNumber = getRandomNumber(start, end);
    alert(`Random number generated between ${start} and ${end}.`);
});