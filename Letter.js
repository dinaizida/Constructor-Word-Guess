//Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// string value to store the underlying character for the letter

//A boolean value that stores whether that letter has been guessed yet

//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



var Letter = function(character){
    this.character =character;
    this.letterGuessed = false;
    this.toString = function(){
        if(this.letterGuessed){
            return this.character;
            console.log(this.character);
        }else{
            return "_";
            console.log('_');
        }
    }
    this.guessedCorrectly = function(newCharGuessed){
        if(this.character.toUpperCase() === newCharGuessed.toUpperCase()){
            this.letterGuessed = true;
            //console.log(this.letterGuessed);
        }
            //console.log(this.letterGuessed);
        
    }

}

module.exports = Letter;

// testing
// var letter1 = new Letter ("a");
// letter1.toString();

// letter1.guessedCorrectly("B");