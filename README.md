Constructor-Word-Guess

# Project Name

Constructor-Word-Guess

# Project Description:

This program using CLI to interact with a user.

  Game RULES (HINT: this Game using US States names): 
  - Press any letter (a-z) on the keyboard to guess a letter.
  - If your choice is incorrect, the letter you guessed does not appear in the word.
  - Keep guessing letters.
  - For every incorrect guess, the number of guesses remaining decrease by 1.
  - If your choice is correct, the letter you guessed appears in the word.
  - If you correctly guess all the letters in the word before the number of guesses remaining reaches 0, you win.
  - If you run out of guesses before the entire word is revealed, you lose.
  - You can exit the game at any time by pressing Ctrl + C on your keyboard.
  
 Files: 

-Letter.js: Contains a constructor, Letter. This constructor displays a blank placeholder depending on whether or not the user has guessed the letter.

-Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

-index.js: The file containing the logic for the course of the game, which depends on Word.js and randomly selects a word and uses the Word constructor to store it. Prompts the user for each guess and keeps track of the user's remaining guesses

# Technologies Used: 

JavaScript, Node.js, NPM packages. 


![Screen Shot](https://github.com/dinaizida/Constructor-Word-Guess/blob/master/assets/images/....png)
