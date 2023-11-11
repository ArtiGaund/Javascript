// task 1) on click card should flip
// task 2) method for success, fail, reseting the event and shuffling method which shuffles cards

// grabbing all cards by querySelectorAll bz they have same class name
const cards = document.querySelectorAll(".card")
console.log(cards);
// variables to keep track of which div is flipped
var isFlipped = false;
var firstCard;
var secondCard;
// after clicking on card, it will provide the reference of flip method
cards.forEach((card) => card.addEventListener("click", flip));

function flip(){
  // console.log("Card flipped");
  // console.log(this)
  // enabling flip properties
  this.classList.add("flip");
  if(!isFlipped){
    isFlipped = true;
    // keep track of first card
    firstCard = this;
  } else{
      secondCard = this;
      console.log(firstCard);
      console.log(secondCard);
      checkIt();
  }
}
function checkIt(){
  // console.log("Checking...");
  // checking is done by using data-image 
  (firstCard.dataset.image === secondCard.dataset.image ? success() : fail());
}
function success(){
  // console.log("Success");
  firstCard.removeEventListener("click", flip); 
  secondCard.removeEventListener("click", flip); 
  reset();
}

function fail(){
  // console.log("Failed");
  // removing flip class from the card
  // flipping was occuring instintly, we have to hold it for few second
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    // reset is important bz after 1st and 2nd flip the this keyword have the value, which create the mess
    reset();
  }, 1000)
}

function reset(){
  isFlipped = false;
  firstCard = null;
  secondCard = null ;
}

// todo shuffle fuction
// it will run on load bz of iife
(function shuffle(){
  cards.forEach((card) => {
    // flex box (there are 16 cards)
    var index = Math.floor(Math.random() *16)
    // flex box property, card will be placed at this index 
    card.style.order = index;
  })
})()