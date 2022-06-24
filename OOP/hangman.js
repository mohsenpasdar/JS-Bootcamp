const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['e', 's', 'd']
}

Hangman.prototype.getPuzzle = function () {
    const puzzle = this.word.map(character => {
        return this.guessedLetters.includes(character) || character === ' ' ? character : "*"
    })
    return puzzle.join('')
}

const game1 = new Hangman('Andrew', 10)
const game2 = new Hangman('Mohsen pasdar', 4)

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());