var Letter = require('./Letter');


var Word = function(wordToGuess){
      //An array of new Letter objects representing the letters of the underlying word
    this.lettersArr = [];
    this.wordToGuess = wordToGuess;
    

    this.wordToLetters = function(){
        var wordToGuessArr = this.wordToGuess.split("");
          //console.log(wordToGuessArr);
        for(var i = 0; i < wordToGuessArr.length; i++){
            // console.log("begin");
            var wordLetter = new Letter(wordToGuessArr[i]);
            this.lettersArr.push(wordLetter);

            // console.log(this.lettersArr);
            // console.log(wordToGuessArr.length);
        }
    }
    
    //A function that returns a string representing the word
    this.toString = function(){
        return this.lettersArr.join(' ');

        console.log("joint array " + this.lettersArr.join(' '));
    }
    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuess = function(guessedLetter){
        for (var i = 0; i < this.lettersArr.length; i ++){
            this.lettersArr[i].guessedCorrectly(guessedLetter);
            
        }

    }

}

//testing 
// var word = new Word("aaaBBB");
// console.log(word);

// word.wordToLetters();

// word.toString();

// word.userGuess("k");

module.exports = Word;


