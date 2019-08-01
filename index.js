function randomDice(){
	return Math.floor(Math.random() * 6) + 1; 
}

function makeImage(a){
	return "images/dice" + a + ".png"; 
}

function chooseWinner(a, b){
	if(a > b){
		document.querySelector("h1").innerHTML = "🚩 Player 1 Win!"; 
	}
	else if (b > a){
		document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
	}

	else{
		document.querySelector("h1").innerHTML = "Draw!";
	}
}


function play(){
var randomNumber1 = randomDice();
var randomDice1 = makeImage(randomNumber1); 
var randomNumber2 = randomDice(); 
var randomDice2 = makeImage(randomNumber2); 
chooseWinner(randomNumber1, randomNumber2); 

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

 }