function wrong (no)
{
	if (no == 1)
		document.getElementById("incorrect1").style.background = "red";
	else if (no == 2)
		document.getElementById("incorrect2").style.background = "red";
	else if (no == 3)	
		document.getElementById("incorrect3").style.background = "red";
};


function right ()
{
	document.getElementById("correct").style.background = "green";
	console.log("asdfg");
	sessionStorage.setItem('correct', '1');
	console.log(sessionStorage.getItem('correct'));
}


