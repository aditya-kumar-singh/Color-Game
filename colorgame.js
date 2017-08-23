/*var colors=["rgb(255, 0, 0)",
             "rgb(255, 255, 0)",
             
              "rgb(0, 255, 0)", 
              "rgb(0, 255, 255)",

              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)"
] */

var numSquares=6;
//var colors=generateRandomColors(numSquares);

var colors=[];
var pickedCol;

var squares=document.querySelectorAll(".square");

//var pickedCol=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1")
var modeButtons=document.querySelectorAll(".mode");
var resetButton=document.querySelector("button");


init();


function init(){

	setupModeButtons();
   setupSquares();
	//modebuttons
	reset();
}







function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="Easy" ? numSquares=3 : numSquares=6; ////////using ternary operator



		/*if(this.textContent==="Easy"){
			numSquares=3;

		}
		else{
			numSquares=6;
		}*/

		reset();


	});

 }
}
function setupSquares(){
	for(var i=0;i<squares.length;i++){
	//////////add initial colors
	squares[i].style.backgroundColor=colors[i];
	////////////////
	squares[i].addEventListener("click",function(){
		//alert("you clicked the boxes")
		var clickedColor=this.style.backgroundColor;

		console.log(clickedColor,pickedCol);////////////////for checking

		if(clickedColor===pickedCol){
			
			h1.style.backgroundColor=clickedColor;

			messageDisplay.textContent="Success"
			changeColors(clickedColor);
			resetButton.textContent="play again?"
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"

		}

	})

}
}
   

    






/*var easybtn=document.querySelector("#easybtn");

var hardbtn=document.querySelector("#hardbtn")*/


/////////////////////////////refracting////////////




function reset(){
	colors=generateRandomColors(numSquares);
	///pick a new color from array
	pickedCol=pickColor();

	messageDisplay.textContent=" ";
	resetButton.textContent="New Colors"///cant use this here 

	colorDisplay.textContent=pickedCol
	// changing colors of squares
	for(var i=0;i<squares.length;i++){
	//////////add initial colors
	if(colors[i]){
		squares[i].style.display="block";
	squares[i].style.backgroundColor=colors[i];
}
	else{
		squares[i].style.display="none";
	}
}

h1.style.backgroundColor="steelblue";



}

/*easybtn.addEventListener("click",function(){
//	alert("easybtn clicked!")
easybtn.classList.add("selected")
hardbtn.classList.remove("selected")
numSquares=3;
colors=generateRandomColors(numSquares)
pickedCol=pickColor()
colorDisplay.textContent=pickedCol
for(var i=0;i<squares.length;i++){
	if(colors[i]){
	squares[i].style.backgroundColor=colors[i];}
	else{
		squares[i].style.display="none"
	}
}

})

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected")
	easybtn.classList.remove("selected")
	numSquares=6
	colors=generateRandomColors(numSquares)
pickedCol=pickColor()
colorDisplay.textContent=pickedCol
for(var i=0;i<squares.length;i++){
	
	squares[i].style.backgroundColor=colors[i];
	
		squares[i].style.display="block"
	
}



})*/



resetButton.addEventListener("click",function(){
	//generate random colors
	/*colors=generateRandomColors(numSquares);
	///pick a new color from array
	pickedCol=pickColor();

	messageDisplay.textContent=" ";
	this.textContent="New Colors"

	colorDisplay.textContent=pickedCol
	// changing colors of squares
	for(var i=0;i<squares.length;i++){
	//////////add initial colors
	squares[i].style.backgroundColor=colors[i];
}

h1.style.backgroundColor="steelblue"*/

reset();


})


//var messageDisplay = document.querySelector("#message");

//console.log(colorDisplay)
//console.log(squares);

//colorDisplay.textContent=pickedCol;

/*for(var i=0;i<squares.length;i++){
	//////////add initial colors
	squares[i].style.backgroundColor=colors[i];
	////////////////
	squares[i].addEventListener("click",function(){
		//alert("you clicked the boxes")
		var clickedColor=this.style.backgroundColor;

		console.log(clickedColor,pickedCol);////////////////for checking

		if(clickedColor===pickedCol){
			
			h1.style.backgroundColor=clickedColor;

			messageDisplay.textContent="Success"
			changeColors(clickedColor);
			resetButton.textContent="play again?"
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"

		}



	})
}*/

function changeColors(color){
	for(var i=0;i<squares.length;i++){

		squares[i].style.backgroundColor=color;
	}

}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random]
}


function generateRandomColors(num){

///mke array
var arr=[];
/// add random colrs to array////looping  through the color
for(var i=0;i<num;i++){

	arr.push(randomColor());
	//get & push random color into array

}


return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random()*256)

	//for green
	var g=Math.floor(Math.random()*256)

	//for blue
	var b=Math.floor(Math.random()*256)
	/*"rgb(r, g, b)"*/

	return "rgb(" + r + ", " + g + ", " + b + ")";
}