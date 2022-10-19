let buttonsValue = new Array;
let result = 0;
result = localStorage.getItem("clickcount") ? localStorage.getItem("clickcount") : 0;
// window.localStorage.setItem("result", result);
// window.localStorage.getItem("result");
// localStorage.setItem("result", result);
// const result = localStorage.getItem("result");
let indexCorrect = document.querySelector(".correctIdx").textContent;
const buttons = document.querySelectorAll("button");

const initGame = function(indexCorrect) {
	for(let i = 0; i < 4; i++) {
		if (i == indexCorrect)
			buttonsValue.push(true);
		else 
			buttonsValue.push(false);	
	}
}

const disableButtons = function() {
	for(let i = 0; i < 4; i++) {
		// buttons[i].disabled = true;
		buttons[i].classList.add("avoid-clicks");
	}
}

const enableButtons = function() {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			if (buttonsValue[i] == true){
				console.log(buttonsValue);
				buttons[i].classList.add("correct");
				result++;
				localStorage.setItem("clickcount", result);
				// console.log(result);
				console.log(result);
			}
			else
				buttons[i].classList.add("wrong");
			disableButtons();
		});
	}
}

function reset (){
	localStorage.clear();
	console.log(result);
}

initGame(indexCorrect);
enableButtons();
