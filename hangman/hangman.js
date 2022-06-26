const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    const puzzle = this.word.map(character => {
        return this.guessedLetters.includes(character) || character === ' ' ? character : "*"
    })
    return puzzle.join('')
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    } 

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

const game1 = new Hangman('cat', 2)

console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
})