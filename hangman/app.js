const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat mio', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
window.addEventListener('keypress', (e) => {
    if (game1.status === 'playing') {
        const guess = e.key
        game1.makeGuess(guess)
        puzzleEl.textContent = game1.puzzle
        guessesEl.textContent = game1.statusMessage
    }
})

getPuzzle('1', (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
})

getCountry('AF', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(country.name.official);
    }
})


