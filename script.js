// // var randomNumber1=Math.floor(Math.random()*6)+1;
// // var randonDiceImages="dice"+randomNumber1+".png";
// // var randomImageSource="images/"+randomDiceImages;
// // var image1 =document.querySelectorAll("img")[0];
// // image1.setAttribute("src","randomImageSource");

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImages = "dice" + randomNumber1 + ".png"; // Fixed variable name
// var randomImageSource = "images/" + randomDiceImages; // Fixed variable name
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource); // Fixed syntax for setAttribute

// var randomNumber2= Math.floor(Math.random() * 6) + 1;

// var randomImageSource2= "images/dice" + randomNumber2+".png"; // Fixed variable name

// document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); // Fixed syntax for setAttribute


// if (randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML="player1 wins!";
// }else if(randomNumber2>randomNumber1) {
//     document.querySelector("h1").innerHTML="player2 wins!"

// }else{
//     document.querySelector("h1").innerHTML="draw"
// }
// function reloadPage() {
//     window.location.reload();
// }
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 wins!";
    } else {
        document.querySelector("h1").textContent = "It's a draw!";
    }
}

function reloadPage() {
    window.location.reload();
}

// Initial roll on page load
rollDice();
