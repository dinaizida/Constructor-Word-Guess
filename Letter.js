

var Letter = function(character) {
    this.character = character.toUpperCase();
    this.letterGuessed = false;
    this.showCharacter = function() {
        if (this.letterGuessed) {
            console.log(this.character);
            

        } else {
        //console.log('_');
            
        }
    }
}

module.exports = Letter;

// testing
// var letterTest = new Letter ("a");
// letterTest.showCharacter();
//letterTest.guessedCorrectly("B");