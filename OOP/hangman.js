const Hangman = function (word, remainingGuesses) {
    this.word = word,
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Andrew', 10)
const game2 = new Hangman('Mohsen', 4)

console.log(game1);
console.log(game2);