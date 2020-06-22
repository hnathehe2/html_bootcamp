var p1_button= document.querySelector("#p1")
var p2_button= document.querySelector("#p2")
var reset = document.querySelector("#reset")
var lim = document.querySelector("#limit")
var lim_display = document.querySelector("#limit_val")
var p1_score = 0;
var p2_score = 0;
var h1 = document.querySelector("#p1_s");
var h2 = document.querySelector("#p2_s");
var game_end = false;
var limit = 5;


p1_button.addEventListener("click", function(){
	if (!game_end){
		p1_score++;
		h1.textContent = p1_score;
		if (p1_score === limit){
			h1.classList.add("winner");
			game_end=true;
		}
	}
});

p2_button.addEventListener("click", function(){
	if (!game_end){
		p2_score++;
		h2.textContent = p2_score;
		if (p2_score === limit){
				h2.classList.add("winner");
				game_end=true;
			}
	}
});

reset.addEventListener("click", function () {
	p1_score = 0;
	p2_score = 0;
	game_end = false;
	h1.textContent = p1_score;
	h2.textContent = p2_score;
	h2.classList.remove("winner");
	h1.classList.remove("winner");
});

lim.addEventListener("change",function(){
	limit = Number(lim.value);
	if (p1_score >= limit){
		game_end = true;
		h1.classList.add("winner");
	}
	else h1.classList.remove("winner");
	if (p2_score >= limit){
		game_end = true;
		h2.classList.add("winner");
	}
	else h2.classList.remove("winner");
	if (p1_score < limit && p2_score<limit)
	{
		game_end=false;
	}
	lim_display.textContent = limit;
});