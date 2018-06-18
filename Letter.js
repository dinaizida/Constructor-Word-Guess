//Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
// string value to store the underlying character for the letter
//A boolean value that stores whether that letter has been guessed yet
//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

var Letter = function(character) {
    this.character = character.toUpperCase();
    this.letterGuessed = false;
    this.showCharacter = function() {
        if (this.letterGuessed) {
            console.log(this.character);
            return this.character;

        } else {
            console.log('_');
            return '_'
        }
    }

    this.guessedCorrectly = function(newCharGuessed) {
        if (this.character === newCharGuessed.toUpperCase()) {
            this.letterGuessed = true;
            console.log(this.letterGuessed);
        }
        console.log(this.letterGuessed);
    }
}

module.exports = Letter;

// testing
// var letterTest = new Letter ("a");
// letterTest.showCharacter();
//letterTest.guessedCorrectly("B");