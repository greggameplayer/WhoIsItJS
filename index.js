var amixem, cyprien, norman, nozman, squeezie, answerwritter;
var persos = [amixem, cyprien, norman, nozman, squeezie];
var lunettes = [false, true, false, true, false];
var barbe = [true, true, false, false, true];
var compteurclic = [0,0,0,0,0];
var randomperso;
var randomnumperso;
var submitbutton;
var textbox;
function onLoad(){
amixem = document.getElementById("amixem");
cyprien = document.getElementById("cyprien");
norman = document.getElementById("norman");
nozman = document.getElementById("nozman");
squeezie = document.getElementById("squeezie");
submitbutton = document.getElementById("submit");
textbox = document.getElementById("ask");
persos = [amixem, cyprien, norman, nozman, squeezie];
randomnumperso = Math.floor(Math.random() * 5);
randomperso = persos[randomnumperso];
answerwritter = document.createElement("p");
answerwritter.innerHTML = randomperso.id;
document.getElementById("div1").appendChild(answerwritter);
submitbutton.addEventListener("click", onClickSubmitButton);
persos[0].addEventListener("click", onClickAmixem);
persos[1].addEventListener("click", onClickCyprien);
persos[2].addEventListener("click", onClickNorman);
persos[3].addEventListener("click", onClickNozman);
persos[4].addEventListener("click", onClickSqueezie);

}
window.addEventListener("load", onLoad);

function onClickSubmitButton(){
	if(textbox.value.toUpperCase() == "A T-IL DES LUNETTES ?" || textbox.value.toUpperCase() == "A T IL DES LUNETTES"){
		if(lunettes[randomnumperso] == true){
			answerwritter.innerHTML = "oui";
		}else{
			answerwritter.innerHTML = "non";
		}
	}
	
	else if(textbox.value.toUpperCase() == "A T-IL UNE BARBE ?" || textbox.value.toUpperCase() == "A T IL UNE BARBE"){
		if(barbe[randomnumperso] == true){
			answerwritter.innerHTML = "oui";
		}else{
			answerwritter.innerHTML = "non";
		}
	}
	
	else{
		answerwritter.innerHTML = "Question invalide !";
	}
	
	
	
}

function onClickAmixem(){
	if(compteurclic[0] == 0){
	var amixemcross = document.createElement("img");
	amixemcross.src = "images/croix.png";
	document.body.appendChild(amixemcross);
	compteurclic[0]++;
	}
}

function onClickCyprien(){
	if(compteurclic[1] == 0){
	var cypriencross = document.createElement("img");
	cypriencross.src = "images/croix.png";
	document.body.appendChild(cypriencross);
	compteurclic[1]++;
	}
}

function onClickNorman(){
	if(compteurclic[2] == 0){
	var normancross = document.createElement("img");
	normancross.src = "images/croix.png";
	document.body.appendChild(normancross);
	compteurclic[2]++;
	}
}

function onClickNozman(){
	if(compteurclic[3] == 0){
	var nozmancross = document.createElement("img");
	nozmancross.src = "images/croix.png";
	document.body.appendChild(nozmancross);
	compteurclic[3]++;
	}
}

function onClickSqueezie(){
	if(compteurclic[4] == 0){
	var squeeziecross = document.createElement("img");
	squeeziecross.src = "images/croix.png";
	document.body.appendChild(squeeziecross);
	compteurclic[4]++;
	}
}