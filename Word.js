var Letter = require('.Letter');


var Word = function(wordToGuess){
      //An array of new Letter objects representing the letters of the underlying word
    this.lettersArr = [];
    this.wordToGuess = wordToGuess;

    this.wordToLetters = function(){
        var wordToGuessArr = this.wordToGuess.split("");
        for(var i = 0; i < wordToGuessArr.length; i ++){
            var wordLetter = new Letter(wordToGuessArr[i]);
            this.lettersArr.push(wordLetter);
        }
    }

    //A function that returns a string representing the word
    this.toString = function(){
        return this.lettersArr.join(' ');
    }
    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuess = function(guessedLetter){
        for (var i = 0; i < letterArr.length; i ++){
            this.letterArr[i].guessedCorrectly(guessedLetter);
        }

    }

}

module.exports = Word;


