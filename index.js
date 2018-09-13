var answerwritter;
var persos = [];
var lunettes = [false, true, false, true, false];
var barbe = [true, true, false, false, true];
var haircolor = ["noir", "brun", "brun", "noir", "brun"];
var eyescolor = ["marron", "gris", "gris", "marron", "gris"];
var compteurclic = [0,0,0,0,0];
var gamefinished = 0;
var compteurnonclic = 0;
var numimagenotclicked;
var randomperso;
var randomnumperso;
var submitbutton;
var textbox;
function onLoad(){
submitbutton = document.getElementById("submit");
textbox = document.getElementById("ask");
textbox.value = "";
persos = [document.getElementById("amixem"), document.getElementById("cyprien"), document.getElementById("norman"), document.getElementById("nozman"), document.getElementById("squeezie")];
randomnumperso = Math.floor(Math.random() * 5);
randomperso = persos[randomnumperso];
answerwritter = document.createElement("p");
answerwritter.innerHTML = randomperso.id; // for debug purpose
document.getElementById("div1").appendChild(answerwritter);
submitbutton.addEventListener("click", onClickSubmitButton);
persos[0].addEventListener("click", function(){onClickImages(persos[0].id);});
persos[1].addEventListener("click", function(){onClickImages(persos[1].id);});
persos[2].addEventListener("click", function(){onClickImages(persos[2].id);});
persos[3].addEventListener("click", function(){onClickImages(persos[3].id);});
persos[4].addEventListener("click", function(){onClickImages(persos[4].id);});

}
window.addEventListener("load", onLoad);

function onClickSubmitButton(){
	if(textbox.value.toUpperCase().includes("LUNETTE") === true){
        answerwritter.innerHTML = lunettes[randomnumperso] === true ? "oui" : "non";
	}

	else if(textbox.value.toUpperCase().includes("BARBE") === true){
        answerwritter.innerHTML = barbe[randomnumperso] === true ? "oui" : "non";
	}

	else if(textbox.value.toUpperCase().includes("CHEVEUX NOIR") === true){
        answerwritter.innerHTML = haircolor[randomnumperso] === "noir" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase().includes("CHEVEUX BRUN") === true){
        answerwritter.innerHTML = haircolor[randomnumperso] === "brun" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase().includes("YEUX MARRON") === true){
        answerwritter.innerHTML = eyescolor[randomnumperso] === "marron" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase().includes("YEUX GRIS") === true){
        answerwritter.innerHTML = eyescolor[randomnumperso] === "gris" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase().includes("AIDE") === true){
        answerwritter.innerHTML = "Voici la liste des critéres valide sur lesquel vous pouvez poser des questions :" +
            " <li><ul>Lunette</ul> <ul>Barbe</ul> <ul>Cheveux Noir</ul> <ul>Cheveux Brun</ul> <ul>Yeux Marron</ul> <ul>Yeux Gris</ul></li>";
    }

	else{
		answerwritter.innerHTML = 'Question invalide ! taper "aide" dans le champ de texte pour afficher les critères valide.';
	}

}

function onClickImages(id){
    const cross = document.createElement("img");
    cross.src = "images/croix.png";
    if(id === "amixem" && compteurclic[0] === 0 && gamefinished === 0){
        document.body.appendChild(cross);
        compteurclic[0]++;
    }else if(id === "cyprien" && compteurclic[1] === 0 && gamefinished === 0){
        document.body.appendChild(cross);
        compteurclic[1]++;
    }else if(id === "norman" && compteurclic[2] ===  0 && gamefinished === 0){
        document.body.appendChild(cross);
        compteurclic[2]++;
    }else if(id === "nozman" && compteurclic[3] === 0 && gamefinished === 0){
        document.body.appendChild(cross);
        compteurclic[3]++;
    }else if(id === "squeezie" && compteurclic[4] === 0 && gamefinished === 0){
        document.body.appendChild(cross);
        compteurclic[4]++;
    }
    TestIfWinOrLoose();
}

function TestIfWinOrLoose(){
    for(let i = 0; i < persos.length; i++){
        if(compteurclic[i] === 0){
            compteurnonclic++;
        }
    }

    if(compteurnonclic === 1){
        gamefinished = 1;

        for(let i = 0; i < persos.length; i++){
            if(compteurclic[i] === 0){
                numimagenotclicked = i;
                break;
            }
        }
        answerwritter.innerHTML = randomperso === persos[numimagenotclicked] ? "Vous avez gagné !" : "Vous avez perdu !";
        answerwritter.innerHTML+= "<br>Génération d'une nouvelle partie votre page va se rafraichir dans 5 secondes.";
        compteurnonclic = 0;
        setTimeout(function () {location.reload();}, 5000);
    }else{
        compteurnonclic = 0;
    }
}