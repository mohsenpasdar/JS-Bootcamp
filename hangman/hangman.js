const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every(char => this.guessedLetters.includes(char))

    if (this.remainingGuesses < 1) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    }
}

Hangman.prototype.getStatusMEssage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was ${this.word.join('')}`
    } else if (this.status = 'finished') {
        return `Great work! You guessed the word!`
    }
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

    if (this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.guessedLetters.push(guess)
    } 

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    this.calculateStatus()
}




