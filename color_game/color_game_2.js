var squares = document.querySelectorAll(".square");
var r = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var color = "rgb(" + r + ", " + g + ", " + b + ")";
var special_one = Math.floor(Math.random()*squares.length);
alert(special_one);
for (var i = 0; i<squares.length; i++)
		squares[i].style.backgroundColor = color;
init_function();


// function reset_function(){
// 	alert("reset");
// 	for (var i = 0; i<squares.length; i++)
// 		if (i!=special_one)
// 			squares[i].removeEventListener("click", wrong_one);
// 		else
// 			squares[i].removeEventListener("click", right_one);
// 	alert("done reset");
// }

var check_value = true;

function check(){	
	if (check_value)
	{
		alert("yes");
		check_value = false;
	}
	else alert("nope");
}


function init_function(){
	for (var i = 0; i<squares.length; i++)
		{
				squares[i].addEventListener("click", check);
		}
	alert("stop");
}
