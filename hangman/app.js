const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('catt', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMEssage()

window.addEventListener('keypress', (e) => {
    if (game1.status === 'playing') {
        const guess = e.key
        game1.makeGuess(guess)
        puzzleEl.textContent = game1.getPuzzle()
        guessesEl.textContent = game1.getStatusMEssage()
    }
})

