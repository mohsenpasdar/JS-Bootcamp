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

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data.puzzle);
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()