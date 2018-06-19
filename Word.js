var Letter = require('./Letter');

var Word = function(wordToGuess) {
    //An array of new Letter objects representing the letters of the underlying word
    this.letters = [];
    this.wordToGuess = wordToGuess;
    //This is an array of underscores representing the number of underscores needed for the random chosen word 
    this.underscores = [];
    //word to split into array of letters 
    this.splitWord = function(){
        this.letters = this.wordToGuess.split("");
        //console.log('this.letters- ' + this.letters);
         //determine the number of undrescores for the word 
        var numberUnderscores = this.letters.length;
          //console.log(numberUnderscores);
        //Create a loop that pushes the underscores to the this.underscores array .
		// for (var i=0; i < numberUnderscores; i++ ) {
		// this.underscores.push("_ ");
		// }
		//console.log(this.underscores);
        console.log(this.underscores.join(" "));//prints array of underscores matching the number of the letters in the word
    };
    // function generate a letter (if letterGuessed set to true or false - from Leeter.js) for each letter of the word
    this.generateLetters = function(){
        for ( var i = 0; i < this.letters.length; i++){
            this.letters[i] = new Letter(this.letters[i]);
            this.letters[i].showCharacter();
        }
    }
}
module.exports = Word;

//testing 
// var word = new Word("aaaBBB");
// console.log(word);
// word.splitWord();
// word.generateLetters();



