
var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1*6);

randomNumber1++;
var dice = "dice"+randomNumber1;
var source = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",source);
var randomNumber2 = Math.random();

randomNumber2 = Math.floor(randomNumber2*6);

randomNumber2++;
var dice = "dice"+randomNumber2;
var source = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",source);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Win 🚩";
}
else if(randomNumber1 == randomNumber2){

  document.querySelector("h1").innerHTML = "Draw";
}
else{
  document.querySelector("h1").innerHTML = "Player2 Win🚩";
}
