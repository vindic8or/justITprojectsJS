// wanted to complete all tasks, but spent spent too much time fiddling with css instead of focusing on functionality, but I think it looks good and the task is complete.
// ! The page is fully functioning.
// TODO some minor adjustments, like making buttons depend on the bottom of the page, so they don't move around on the page depending on the quote's length. basically make buttons stick to the bottom of the page. so they don't move around
// TODO make it so the copy quote function invokes the new quote function before copying, if the new quote hasn't been invoked yet
// TODO  

//? start of the code 
// a list containing items as quote and author objects 
const quotes = [
  { 
    quote: "Some people are so poor, all they have is pride.",
    author: "Unknown"
  },

  {
    quote: "We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence.",
    author : "Martin Luther King Jr"
  },

  {
    quote: "When men feel the wound that cannot heal, they either bury themselves in woman's arms and ask her for healing, which she cannot provide, or they hide themselves in macho pride and enforced loneliness.",
    author: "James Hollis" 
  },

  {
    quote: "Everybody wants to be a bodybuilder, but don't nobody wants to lift this heavy-ass weight! I do it though!",
    author: "Ronnie Coleman",
  },
  
  {
    quote: "Light weight, baby.",
    author: "Ronnie Coleman" 
  },

  {
    quote: "That's hockey, you know, it's only a game. Why you have to be mad?",
    author: "Ilya Bryzgalov" 
  },

  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch" 
  },

  {
    quote: 'Gasan instructed his adherents one day: "Those who speak against killing and who desire to spare the lives of all conscious beings are right. It is good to protect even animals and insects. But what about those persons who kill time, what about those who are destroying wealth, and those who destroy political economy? We should not overlook them. Furthermore, what of the one who preaches without enlightenment? He is killing Buddhism.',
    author: "Zen Koan" 
  },

  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    author: "St. Francis of Assisi"
  },

  {
    quote: "I have been all things unholy. If God can work through me, he can work through anyone.",
    author: "St. Francis of Assisi" 
  },

  {
    quote: "Muddy water is best cleared by leaving it alone.",
    author: "Alan Watts"
  },
  
  {
    quote: "Trying to define yourself is like trying to bite your own teeth.",
    author: "Alan Watts"
  },

  {
    quote: "Muddy water is best cleared by leaving it alone.",
    author: "Alan Watts"
  }

]

// defining the HTML targets
const buttonNew = document.getElementById("buttonNew");
const buttonCopy = document.getElementById("buttonCopy");
const quoteText = document.getElementById("quoteText");

// lastRoll variable helps prevent the function from returning the same number as a previus roll.
let lastRoll;

// function that has list as a parameter. generates a random number depending on the size of the list. if the number that has been randomed is the same, the function gets invoked recursivelly untill a different number has been rolled, then returned.
function randNum(list) {
  const rolled = Math.floor(Math.random() * list.length);
  rolled === lastRoll ? randNum(list) : lastRoll = rolled; return lastRoll;
}

// updates the paragraph to one of the quotes
function quoteUpdate(){
  quoteText.textContent = `${quotes[lastRoll].quote} -${quotes[lastRoll].author}`;
}

// listens for mouseclick over buttonNew button and invokes the function to update paragraph content
buttonNew.addEventListener("click",() => {
  randNum(quotes);
    quoteUpdate();
}
);

// listens for mouseclick over buttonCopy button and copies the quote into clipboard
buttonCopy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(quoteText.textContent);
  quoteText.textContent = "Thank you, have a good day";
  
})


//? Random Quote Generator - Project Brief
//? Create a JavaScript program that simulates a simple Random Quote Generator. The application will 
//? display a random quote from a pre-defined list each time a button is clicked. Users should also have 
//? the option to copy the displayed quote to the clipboard.
//? Project Requirements

//! 1. Pre-defined Quotes: Create an array containing at least 5 quotes, each with an associated 
//! author.

//! 2. Random Quote Display: Use a button to display a random quote from the array.
//! 3. Author Attribution: Ensure each quote includes the name of the author.

//! 4. Copy to Clipboard: Provide a button to copy the currently displayed quote to the clipboard.

//! 5. Data Validation: Ensure no quote is repeated consecutively when generating a new random 
//! quote.

//! 6. Thank You Message: Display a message thanking the user after they copy a quote to the 
//! clipboard.

//? Design Considerations
//? • Structure your program to include clear and organized functions.
//? • Use meaningful variable names to ensure readability.
//? • Incorporate basic styling to make the application visually appealing (optional but 
//? encouraged).

//? • Ensure all buttons have clear and intuitive functionality.