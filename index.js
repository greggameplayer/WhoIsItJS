var answerwritter;
var persos = [];
var lunettes = [false, true, false, true, false];
var barbe = [true, true, false, false, true];
var haircolor = ["noir", "brun", "brun", "noir", "brun"];
var eyescolor = ["marron", "gris", "gris", "marron", "gris"];
var compteurclic = [0,0,0,0,0];
var randomperso;
var randomnumperso;
var submitbutton;
var textbox;
function onLoad(){
submitbutton = document.getElementById("submit");
textbox = document.getElementById("ask");
persos = [document.getElementById("amixem"), document.getElementById("cyprien"), document.getElementById("norman"), document.getElementById("nozman"), document.getElementById("squeezie")];
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
	if(textbox.value.toUpperCase() === "A T-IL DES LUNETTES ?" || textbox.value.toUpperCase() === "A T IL DES LUNETTES" || textbox.value.toUpperCase().includes("LUNETTE") === true){
        answerwritter.innerHTML = lunettes[randomnumperso] === true ? "oui" : "non";
	}

	else if(textbox.value.toUpperCase() === "A T-IL UNE BARBE ?" || textbox.value.toUpperCase() === "A T IL UNE BARBE" || textbox.value.toUpperCase().includes("BARBE") === true){
        answerwritter.innerHTML = barbe[randomnumperso] === true ? "oui" : "non";
	}

	else if(textbox.value.toUpperCase() === "A T-IL DES CHEVEUX NOIR ?" || textbox.value.toUpperCase() === "A T IL DES CHEVEUX NOIR" || textbox.value.toUpperCase().includes("CHEVEUX NOIR") === true){
        answerwritter.innerHTML = haircolor[randomnumperso] === "noir" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase() === "A T-IL DES CHEVEUX BRUN ?" || textbox.value.toUpperCase() === "A T IL DES CHEVEUX BRUN" || textbox.value.toUpperCase().includes("CHEVEUX BRUN") === true){
        answerwritter.innerHTML = haircolor[randomnumperso] === "brun" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase() === "A T-IL DES YEUX MARRON ?" || textbox.value.toUpperCase() === "A T IL DES YEUX MARRON" || textbox.value.toUpperCase().includes("YEUX MARRON") === true){
        answerwritter.innerHTML = eyescolor[randomnumperso] === "marron" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase() === "A T-IL DES YEUX GRIS ?" || textbox.value.toUpperCase() === "A T IL DES YEUX GRIS" || textbox.value.toUpperCase().includes("YEUX GRIS") === true){
        answerwritter.innerHTML = eyescolor[randomnumperso] === "gris" ? "oui" : "non";
    }

	else{
		answerwritter.innerHTML = 'Question invalide ! taper "aide" dans le champ de texte pour afficher les critères valide.';
	}

}

function onClickAmixem(){
	if(compteurclic[0] === 0){
	var amixemcross = document.createElement("img");
	amixemcross.src = "images/croix.png";
	document.body.appendChild(amixemcross);
	compteurclic[0]++;
	}
}

function onClickCyprien(){
	if(compteurclic[1] === 0){
	var cypriencross = document.createElement("img");
	cypriencross.src = "images/croix.png";
	document.body.appendChild(cypriencross);
	compteurclic[1]++;
	}
}

function onClickNorman(){
	if(compteurclic[2] === 0){
	var normancross = document.createElement("img");
	normancross.src = "images/croix.png";
	document.body.appendChild(normancross);
	compteurclic[2]++;
	}
}

function onClickNozman(){
	if(compteurclic[3] === 0){
	var nozmancross = document.createElement("img");
	nozmancross.src = "images/croix.png";
	document.body.appendChild(nozmancross);
	compteurclic[3]++;
	}
}

function onClickSqueezie(){
	if(compteurclic[4] === 0){
	var squeeziecross = document.createElement("img");
	squeeziecross.src = "images/croix.png";
	document.body.appendChild(squeeziecross);
	compteurclic[4]++;
	}
}