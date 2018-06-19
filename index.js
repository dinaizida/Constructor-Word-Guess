var Word = require('./Word.js');
var inquirer = require('inquirer');

var gameRules =
    "   " + "\r\n" +
    "***** Game RULES (HINT: this Game using US States names): *****" + "\r\n" +
    "   " + "\r\n" +
    "1. Press any letter (a-z) on the keyboard to guess a letter." + "\r\n" +
    "2. If your choice is incorrect, the letter you guessed does not appear in the word." + "\r\n" +
    "3. Keep guessing letters." + "\r\n" +
    "4. For every incorrect guess, the number of guesses remaining decrease by 1." + "\r\n" +
    "5. If your choice is correct, the letter you guessed appears in the word." + "\r\n" +
    "6. If you correctly guess all the letters in the word before the number of guesses remaining reaches 0, you win." + "\r\n" +
    "7.If you run out of guesses before the entire word is revealed, you lose." + "\r\n" +
    "   " + "\r\n" +
    "8. You can exit the game at any time by pressing Ctrl + C on your keyboard." + "\r\n" +
    "   ";
"******************************" + "\r\n" +
"   " + "\r\n" +
console.log(gameRules);

var wordList = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Delaware',
    'Florida',
    'Georgia',
    'Illinois',
    'Montana'
];
// variables for computer to pick randomly from the array of words
var randomWord = "";
var computerWord = "";
var wins = 0;
var losses = 0;
var numberOfSlots = 0; //Number of underscores/slots that have been filled in with a letters.
var numberOfGuesses = 10;
//variable and array to hold letters that user already guessed.
var userGuess = "";
var userGuessesArray = [];
//When user guesses correctly, set this variable to true for that letter. The default value will be false.
var userGuessedCorrectly = false;

askToStart();

function askToStart() {
    //game confirmation prompt to user
    inquirer.prompt([{
        type: "text",
        name: "namePlayer",
        message: "What is your name?"
    }, {
        type: "confirm",
        name: "wantToPlay",
        message: "Do you want to play?",
        default: true
    }]).then(function(answers) {
        // check is user wnats to play and then call startGame function
        if (answers.wantToPlay) {
            console.log("Great " + answers.namePlayer + " let's start!");
            startGame();
        } else {
            console.log('Come back again ' + answers.namePlayer + " !");
            return;
        };
    });
};

function startGame() {
    numberOfGuesses = 10; //reset number of remaining guesses before starting a game
    //empty out list of already guessed letters.
    userGuess = "";
    userGuessesArray = [];
    numberOfSlots = 0;
    getWord(); // get a word from the wordList array

};

//Function to choose a random word from the list of states in the word array.
function getWord() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

    // using the Word constructor to create computerWord instance of it.
    computerWord = new Word(randomWord);
    console.log("Your word has " + randomWord.length + " letters.");
    console.log("Word To Guess:");
    underscoresToPrint(); // to print undersocres array that will be replaced with maching letters

    //Use the  Word.js to split the word and generate letters.
    computerWord.splitWord();
    computerWord.generateLetters();
    guessLetter();
};

// create an array with all underscores that will be replaced with the correct letters
var underscoresToPrint = function() {
    for (var i = 0; i < randomWord.length; i++) {
        computerWord.underscores.push('_');
    }
    return computerWord.underscores;
};

// prompt the user to enter a letter.
function guessLetter() {
    //ask user to enter a letter if there are "underscores" still need to be filled in
    // if there are still quesses remaining
    if (numberOfSlots < computerWord.letters.length || numberOfGuesses > 0) {
        inquirer.prompt([{
            name: "userLetter",
            message: "Enter a letter between A-Z! ",
        }]).then(function(answer) {
            answer.userLetter.toUpperCase();
            console.log('You entered: ' + answer.userLetter.toUpperCase());
            //user guess has to be set to false here to print out "Correct or Incorrect "- matching correctly each time
            userGuessedCorrectly = false;
            //check if the letter was already entered by user
            if (userGuessesArray.indexOf(answer.userLetter.toUpperCase()) > -1) {
                console.log('You already entered that letter. Please enter another one.');
                //run prompt again for user to enter another letter
                guessLetter();
            } else if (userGuessesArray.indexOf(answer.userLetter.toUpperCase()) === -1) {
                //if letter was not entered, add letter to an array with guessed letters
                userGuess = userGuess.concat(" " + answer.userLetter.toUpperCase());
                userGuessesArray.push(answer.userLetter.toUpperCase());
                console.log('Letters already entered: ' + userGuess + " ");

                //check if the letter that the user guessed matches one of the letters in the word.
                for (var i = 0; i < computerWord.letters.length; i++) {
                    //If the user guess equals one of the letters in the word and letterGuessed is equal to false for that letter...
                    if (answer.userLetter.toUpperCase() === computerWord.letters[i].character && computerWord.letters[i].letterGuessed === false) {
                        //Set letterGuessed property for that letter equal to true.
                        computerWord.letters[i].letterGuessed === true;
                        //Set userGuessedCorrectly to true.
                        userGuessedCorrectly = true;
                        computerWord.underscores[i] = answer.userLetter.toUpperCase(); //replace the underscore by matching letter in the underscore array
                        numberOfSlots++
                    }
                }
                console.log("Word To Guess:");
                computerWord.splitWord();
                computerWord.generateLetters();

                //If letter matches correctly
                if (userGuessedCorrectly) {
                    console.log('CORRECT!');
                    // check if the user won or lost.
                    winsLosses();
                }
                //if letter does not matches
                else {
                    console.log('INCORRECT!');
                    numberOfGuesses--;
                    console.log("You have " + numberOfGuesses + " guesses left.");
                    //check if the user won or lost.
                    winsLosses();
                };
            };
        });
    };
};

//This function will check if the user won or lost after user guesses a letter.
function winsLosses() {
    if (numberOfGuesses === 0) {
        console.log('You LOST!  The correct US state was: ' + randomWord);
        losses++;
        console.log('Wins: ' + wins);
        console.log('Losses: ' + losses);
        console.log('******************************');
        askToPlayAgain();
    } //chesk is all slots filled in by entered correctly letters
    else if (numberOfSlots === computerWord.letters.length) {
        console.log("You WON!");
        wins++;
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("******************************");
        askToPlayAgain();
    } else { //if user still need to enter letters to continue guessing the word
        guessLetter()
    };

};

function askToPlayAgain() {
    //game confirmation prompt to user
    inquirer.prompt([{
        type: "confirm",
        name: "wantToPlayAgain",
        message: "Do you want to play again?",
        default: true
    }]).then(function(result) {
        // check is user wnats to play and then call startGame function
        if (result.wantToPlayAgain) {
            //Empty out the array that contains the letters already guessed.
            // userGuess = "";
            // userGuessesArray = [];
            //Set number of slots filled in with letters back to zero.
            //numberOfSlots = 0;
            console.log("Great, let's start!");
            startGame();
        } else {
            console.log('Come back again!');
            return;
        };
    });
};