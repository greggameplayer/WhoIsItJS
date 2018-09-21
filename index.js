var answerwritter;
let persos = [];
var lunettes = [false, true, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false];
var barbe = [true, true, false, false, true, true, true, true, true, false, true, false, true, true, true, false, true, false, true, true, true];
var haircolor = ["noir", "brun", "brun", "noir", "brun", "noir", "brun", "noir", "chauve", "brun", "brun", "brun", "noir", "noir", "brun", "brun", "noir", "noir", "noir", "noir", "noir"];
var eyescolor = ["marron", "gris", "gris", "marron", "gris", "marron", "marron", "gris", "marron", "gris", "marron", "marron", "marron", "marron", "gris", "marron", "gris", "marron", "marron", "gris", "gris"];
var youtubertype = ["humour", "humour", "humour", "humour", "gaming", "humour", "gaming", "gaming", "gaming", "minecraft", "minecraft", "humour", "gaming", "humour", "humour", "humour", "minecraft", "humour", "humour", "humour", "minecraft"];
var compteurclic = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gamefinished = 0;
var compteurnonclic = 0;
var numimagenotclicked;
var randomperso = 0;
var randomnumperso;
var submitbutton;
var textbox;
function onLoad(){
particlesJS.load('particles-js', 'libraries/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
submitbutton = document.getElementById("submit");
textbox = document.getElementById("ask");
textbox.value = "";
persos = [$("#amixem"), $("#cyprien"), $("#norman"), $("#nozman"), $("#squeezie"), $("#fabienolicard"), $("#adrigeek"), $("#davidlafarge"), $("#fantasio974"), $("#frigiel"), $("#furiousjumper"), $("#hugoposay"), $("#kirby54"), $("#legrandjd"), $("#remigaillard"), $("#seblafrite"), $("#siphano"), $("#sofiane"), $("#tiboinshape"), $("#vodk"), $("#aypierre")];
randomnumperso = Math.floor(Math.random() * 21);
randomperso = persos[randomnumperso];
answerwritter = document.createElement("p");
document.getElementById("div1").appendChild(answerwritter);
submitbutton.addEventListener("click", onClickSubmitButton);
persos[0].on("click", function(event){onClickImages(event.target.id);});
persos[1].on("click", function(event){onClickImages(event.target.id);});
persos[2].on("click", function(event){onClickImages(event.target.id);});
persos[3].on("click", function(event){onClickImages(event.target.id);});
persos[4].on("click", function(event){onClickImages(event.target.id);});
persos[5].on("click", function(event){onClickImages(event.target.id);});
persos[6].on("click", function(event){onClickImages(event.target.id);});
persos[7].on("click", function(event){onClickImages(event.target.id);});
persos[8].on("click", function(event){onClickImages(event.target.id);});
persos[9].on("click", function(event){onClickImages(event.target.id);});
persos[10].on("click", function(event){onClickImages(event.target.id);});
persos[11].on("click", function(event){onClickImages(event.target.id);});
persos[12].on("click", function(event){onClickImages(event.target.id);});
persos[13].on("click", function(event){onClickImages(event.target.id);});
persos[14].on("click", function(event){onClickImages(event.target.id);});
persos[15].on("click", function(event){onClickImages(event.target.id);});
persos[16].on("click", function(event){onClickImages(event.target.id);});
persos[17].on("click", function(event){onClickImages(event.target.id);});
persos[18].on("click", function(event){onClickImages(event.target.id);});
persos[19].on("click", function(event){onClickImages(event.target.id);});
persos[20].on("click", function(event){onClickImages(event.target.id);});
//answerwritter.innerHTML = randomperso.get(0).id; // for debug purpose
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
	
	else if(textbox.value.toUpperCase().includes("CHAUVE") === true){
		answerwritter.innerHTML = haircolor[randomnumperso] === "chauve" ? "oui" : "non";
	}

    else if(textbox.value.toUpperCase().includes("YEUX MARRON") === true){
        answerwritter.innerHTML = eyescolor[randomnumperso] === "marron" ? "oui" : "non";
    }

    else if(textbox.value.toUpperCase().includes("YEUX GRIS") === true){
        answerwritter.innerHTML = eyescolor[randomnumperso] === "gris" ? "oui" : "non";
    }
	
	else if(textbox.value.toUpperCase().includes("HUMOUR") === true){
		answerwritter.innerHTML = youtubertype[randomnumperso] === "humour" ? "oui" : "non";
	}
	
	else if(textbox.value.toUpperCase().includes("GAMING") === true){
		answerwritter.innerHTML = youtubertype[randomnumperso] === "gaming" ? "oui" : "non";
	}
	
	else if(textbox.value.toUpperCase().includes("MINECRAFT") === true){
		answerwritter.innerHTML = youtubertype[randomnumperso] === "minecraft" ? "oui" : "non";
	}

    else if(textbox.value.toUpperCase().includes("AIDE") === true){
        answerwritter.innerHTML = "Voici la liste des critéres valide sur lesquel vous pouvez poser des questions :" +
            "<li><ul>Lunette</ul></li> <li><ul>Barbe</ul></li> <li><ul>Cheveux Noir</ul></li> <li><ul>Cheveux Brun</ul></li> <li><ul>Chauve</ul></li> <li><ul>Yeux Marron</ul></li> <li><ul>Yeux Gris</ul></li> <li><ul>Youtubeur Humour</ul></li> <li><ul>Youtubeur Gaming</ul></li> <li><ul>Youtubeur Minecraft</ul></li>";
    }

	else{
		answerwritter.innerHTML = 'Question invalide ! taper "aide" dans le champ de texte pour afficher les critères valide.';
	}

}

function onClickImages(id){
    if(id === "amixem" && compteurclic[0] === 0 && gamefinished === 0){
        document.querySelector(".flipper1").classList.toggle("flip");
		$("#youtubeback1").get(0).play();
        compteurclic[0]++;
    }else if(id === "cyprien" && compteurclic[1] === 0 && gamefinished === 0){
        document.querySelector(".flipper2").classList.toggle("flip");
		$("#youtubeback2").get(0).play();
        compteurclic[1]++;
    }else if(id === "norman" && compteurclic[2] ===  0 && gamefinished === 0){
        document.querySelector(".flipper3").classList.toggle("flip");
		$("#youtubeback3").get(0).play();
        compteurclic[2]++;
    }else if(id === "nozman" && compteurclic[3] === 0 && gamefinished === 0){
        document.querySelector(".flipper4").classList.toggle("flip");
		$("#youtubeback4").get(0).play();
        compteurclic[3]++;
    }else if(id === "squeezie" && compteurclic[4] === 0 && gamefinished === 0){
        document.querySelector(".flipper5").classList.toggle("flip");
		$("#youtubeback5").get(0).play();
        compteurclic[4]++;
    }else if(id === "fabienolicard" && compteurclic[5] === 0 && gamefinished === 0){
        document.querySelector(".flipper6").classList.toggle("flip");
		$("#youtubeback6").get(0).play();
        compteurclic[5]++;
    }else if(id === "adrigeek" && compteurclic[6] === 0 && gamefinished === 0){
        document.querySelector(".flipper7").classList.toggle("flip");
		$("#youtubeback7").get(0).play();
        compteurclic[6]++;
    }else if(id === "davidlafarge" && compteurclic[7] === 0 && gamefinished === 0){
        document.querySelector(".flipper8").classList.toggle("flip");
		$("#youtubeback8").get(0).play();
        compteurclic[7]++;
    }else if(id === "fantasio974" && compteurclic[8] === 0 && gamefinished === 0){
        document.querySelector(".flipper9").classList.toggle("flip");
		$("#youtubeback9").get(0).play();
        compteurclic[8]++;
    }else if(id === "frigiel" && compteurclic[9] === 0 && gamefinished === 0){
        document.querySelector(".flipper10").classList.toggle("flip");
		$("#youtubeback10").get(0).play();
        compteurclic[9]++;
    }else if(id === "furiousjumper" && compteurclic[10] === 0 && gamefinished === 0){
        document.querySelector(".flipper11").classList.toggle("flip");
		$("#youtubeback11").get(0).play();
        compteurclic[10]++;
    }else if(id === "hugoposay" && compteurclic[11] === 0 && gamefinished === 0){
        document.querySelector(".flipper12").classList.toggle("flip");
		$("#youtubeback12").get(0).play();
        compteurclic[11]++;
    }else if(id === "kirby54" && compteurclic[12] === 0 && gamefinished === 0){
        document.querySelector(".flipper13").classList.toggle("flip");
		$("#youtubeback13").get(0).play();
        compteurclic[12]++;
    }else if(id === "legrandjd" && compteurclic[13] === 0 && gamefinished === 0){
        document.querySelector(".flipper14").classList.toggle("flip");
		$("#youtubeback14").get(0).play();
        compteurclic[13]++;
    }else if(id === "remigaillard" && compteurclic[14] === 0 && gamefinished === 0){
        document.querySelector(".flipper15").classList.toggle("flip");
		$("#youtubeback15").get(0).play();
        compteurclic[14]++;
    }else if(id === "seblafrite" && compteurclic[15] === 0 && gamefinished === 0){
        document.querySelector(".flipper16").classList.toggle("flip");
		$("#youtubeback16").get(0).play();
        compteurclic[15]++;
    }else if(id === "siphano" && compteurclic[16] === 0 && gamefinished === 0){
        document.querySelector(".flipper17").classList.toggle("flip");
		$("#youtubeback17").get(0).play();
        compteurclic[16]++;
    }else if(id === "sofiane" && compteurclic[17] === 0 && gamefinished === 0){
        document.querySelector(".flipper18").classList.toggle("flip");
		$("#youtubeback18").get(0).play();
        compteurclic[17]++;
    }else if(id === "tiboinshape" && compteurclic[18] === 0 && gamefinished === 0){
        document.querySelector(".flipper19").classList.toggle("flip");
		$("#youtubeback19").get(0).play();
        compteurclic[18]++;
    }else if(id === "vodk" && compteurclic[19] === 0 && gamefinished === 0){
        document.querySelector(".flipper20").classList.toggle("flip");
		$("#youtubeback20").get(0).play();
        compteurclic[19]++;
    }else if(id === "aypierre" && compteurclic[20] === 0 && gamefinished === 0){
        document.querySelector(".flipper21").classList.toggle("flip");
		$("#youtubeback21").get(0).play();
        compteurclic[20]++;
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
        answerwritter.innerHTML = randomperso.get(0) === persos[numimagenotclicked].get(0) ? "Vous avez gagné !" : "Vous avez perdu !";
        answerwritter.innerHTML+= "<br>Génération d'une nouvelle partie votre page va se rafraichir dans 5 secondes.";
        compteurnonclic = 0;
        setTimeout(function () {location.reload();}, 5000);
    }else{
        compteurnonclic = 0;
    }
}