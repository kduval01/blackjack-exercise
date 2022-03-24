var deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
           2,3,4,5,6,7,8,9,10,10,10,10,11,
           2,3,4,5,6,7,8,9,10,10,10,10,11,
           2,3,4,5,6,7,8,9,10,10,10,10,11]; 
var suits = ["♠", "♣", "♥", "♦"]           
var playerHand;
var dealerHand;
           
function drawRandomCard(deck){
 var randomIndex =  Math.floor(deck.length * Math.random());
 return deck[randomIndex];
}

function startGame(){
    playerHand = [drawRandomCard(deck), drawRandomCard(deck)];
    dealerHand = [drawRandomCard(deck), drawRandomCard(deck)];
}

function getHandValue(hand){
    var sum = 0
    for(var i=0; i<hand.length; i++){
        sum += hand[i];
    }
    return sum;
}
startGame();
console.log('player hand ' + playerHand);
console.log('player hand value' + getHandValue(playerHand));
console.log('dealer hand ' + dealerHand);
console.log('deaaler hand value' + getHandValue(dealerHand));

function hit(){
    playerHand.push(drawRandomCard(deck));
    console.log('new player hand: ' + playerHand)
    if(getHandValue(playerHand) > 21){
        console.log("BUST")
    }
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
