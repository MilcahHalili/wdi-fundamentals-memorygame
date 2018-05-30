console.log("Up and running!");
var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = []
var cardOne = cards[0];
cardsInPlay.push("queen");
console.log("User flipped queen")
var cardTwo = cards[1];
cardsInPlay.push("king");
console.log("User flipped king")
if (cardsInPlay.length === 2 && cardsInPlay[0] != cardsInPlay[1]) {
	alert("Sorry, try again.")
}