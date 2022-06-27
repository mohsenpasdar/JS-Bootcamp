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

