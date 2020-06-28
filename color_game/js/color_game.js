var squares = document.querySelectorAll(".square");
var color; var d_color;
var diff = 50.0;
var special_one = Math.floor(Math.random()*squares.length);
console.log(special_one);
var score = 0;
var score_display = document.querySelector("#score_display");
var time_display = document.querySelector("#time_display"); var time;
var game_end = false;
var new_game = document.querySelector("#new_game")
new_game.addEventListener("click", newgame);
var inter;

document.cookie = "highscore = 0";

function random_color(){
	var r; var d_r = 1;
	var b; var d_b = 1;
	var g; var d_g = 1; 
	r = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	color = "rgb(" + r + ", " + g + ", " + b + ")";
	if (Math.random()>0.5) d_r = -1;
	if (Math.random()>0.5) d_g = -1;
	if (Math.random()>0.5) d_b = -1;
	d_r = d_r * diff;
	d_g = d_g * diff;
	d_b = d_b * diff;
	d_color = "rgb(" + Math.max(Math.min(r+d_r,255),0) + ", " + Math.max(Math.min(g+d_g,255),0) + ", " + Math.max(Math.min(b+d_b,255),0) + ")";
	diff = diff * 0.9;
}

function reset_function(){
	for (var i = 0; i<squares.length; i++)
		if (i!=special_one)
			squares[i].removeEventListener("click", wrong_one);
		else
			squares[i].removeEventListener("click", right_one);
	console.log("done reset");
}

function newgame(){
	score = 0;
	score_display.textContent = score;
	time_display.textContent = time/100;
	clearInterval(inter);
	reset_function();
	diff = 50.0;
	time = 500;
	game_end = false;
	init_function();
	inter = setInterval(time_remain, 10);
}

function wrong_one(){
	console.log("nope");
	game_end = true;
	alert("game over");
	reset_function();
}

function right_one(){
	time+=200
	score++;
	score_display.textContent = score;
	console.log("yes");
	reset_function();
	special_one =  Math.floor(Math.random()*squares.length);
	console.log("new " + special_one);
	init_function();
}

function init_function(){
	random_color();
	for (var i = 0; i<squares.length; i++){
		if (i!=special_one) {
			squares[i].addEventListener("click", wrong_one);
			squares[i].style.backgroundColor = color;
		}
		else {
			squares[i].addEventListener("click", right_one);
			squares[i].style.backgroundColor = d_color;
		}
	}
}

function time_remain()
{
	if (time>0 && !game_end){
		time--;
		time_display.textContent = time/100.0;
	}
	else if (time==0){
		game_end = true;
		time_display.textContent = 0.00;
		reset_function();
		clearInterval(inter);
	}
}
