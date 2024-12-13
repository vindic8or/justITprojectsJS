const buttonStart = document.getElementById("buttonStart");
let game;
//? Project Requirements
//! 1. Random Number Generation: Generate a random number within a given range (e.g., 1 to 100) at the start of each game.
//* for the sake of this project, the range is 1 to 100

//? function to generate a random integer between two desired numbers, inclusively 
function genRandNum(x,y) {
  //consts below make sure that we are starting at the lower number going up, in case numbers are entered larger to smaller
  const lower = Number(x < y ? x : y), upper = Number(x > y ? x : y);
  const randNum = Math.floor((Math.random() * (upper - lower + 1)) + lower);
  
  console.log(
    `Returning a number between ${lower} and ${upper}\n the number is ${randNum}.`
  );
  return randNum;

  // logic that makes it only possible for numbers to be entered could be added; ignore for now
}

buttonStart.addEventListener("click", ()=>{
  // genRandNum(0,0);
  ;
  console.log(
    
    getUserInput()
  );
  
})

//! 2. User Input: Allow the user to input their guesses.
// let userInput = 
let attempt;
// console.log(userInput);
function getUserInput(){
  attempt = Number(prompt("Enter a number"));
  console.log(isNaN(attempt));
  // console.log(attempt);
  
  //  getUserInput() return attempt; 
  if (typeof attempt == "number"){
    
    return attempt
  } else {
    getUserInput();
  }
  // console.log(
  // );
  
}


//! 3. Feedback: Provide feedback after each guess:
//!    If the guess is too high, display "Too High."
//!    If the guess is too low, display "Too Low."
//!    If the guess is correct, congratulate the user.


//! 4. Track Guesses: Keep track of the number of guesses the user has made.


//! 5. Game Restart Option: Provide a button to restart the game, resetting the random number and guess count.


//! 6. Input Validation: Ensure that the user's input is a number within the specified range and provide an error message if the input is invalid.



//? Guess the Number Game - Project Brief
//* Introduction
//* Create a JavaScript program that simulates a Guess the Number game. The user will try to guess a 
//* randomly generated number within a specified range. The program will provide feedback after each 
//* guess and allow the user to restart the game at any time.

//? Design Considerations
//* • Structure your program with clear and modular functions (e.g., generating random numbers, 
//* validating input, providing feedback).
//* • Use meaningful variable and function names to ensure code readability.
//* • Incorporate basic styling to make the game visually appealing (optional but encouraged).
//* • Ensure intuitive and user-friendly input and restart functionality



