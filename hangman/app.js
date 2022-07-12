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

const myPuzzle = getPuzzle('4').then((puzzle) => {
    console.log(puzzle);
}, (err) => {
    console.log(`Error: ${err}`);
})

getCountry('EG').then((country) => {
    console.log(country.name.official);
}, (err) => {
    console.log(`Error: ${err}`);
})


