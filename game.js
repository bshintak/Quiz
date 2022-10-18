let buttonsValue = new Array;
// let result = 0;
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
				buttons[i].classList.add("correct");
				localStorage.clickcount += 1;
				localStorage.removeItem(localStorage.clickcount);
				console.log(localStorage.clickcount);
				// document.querySelector("score").textContent = sessionStorage.clickcount;
				// result++;
			}
			else
				buttons[i].classList.add("wrong");
			disableButtons();
		});
	}
}

initGame(indexCorrect);
enableButtons();
