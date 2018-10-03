let answerwritter, lowbutton, highbutton, graphicalparam = 1, persos = [];
const lunettes = [false, true, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false];
const barbe = [true, true, false, false, true, true, true, true, true, false, true, false, true, true, true, false, true, false, true, true, true];
const haircolor = ["noir", "brun", "brun", "noir", "brun", "noir", "brun", "noir", "chauve", "brun", "brun", "brun", "noir", "noir", "brun", "brun", "noir", "noir", "noir", "noir", "noir"];
const eyescolor = ["marron", "gris", "gris", "marron", "gris", "marron", "marron", "gris", "marron", "gris", "marron", "marron", "marron", "marron", "gris", "marron", "gris", "marron", "marron", "gris", "gris"];
const youtubertype = ["humour", "humour", "humour", "humour", "gaming", "humour", "gaming", "gaming", "gaming", "minecraft", "minecraft", "humour", "gaming", "humour", "humour", "humour", "minecraft", "humour", "humour", "humour", "minecraft"];
let compteurclic = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let gamefinished = 0, compteurnonclic = 0, numimagenotclicked, randomperso = 0, randomnumperso, submitbutton, textbox;
const win = new Audio("sounds/win.mp3"), lose = new Audio("sounds/lose.mp3"), clicksound = new Audio("sounds/click.mp3");

function onLoad(){
particlesJS.load('particles-js', 'libraries/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
submitbutton = document.getElementById("submit");
textbox = document.getElementById("ask");
lowbutton = document.getElementById("low");
highbutton = document.getElementById("high");
textbox.value = "";
persos = [$("#amixem"), $("#cyprien"), $("#norman"), $("#nozman"), $("#squeezie"), $("#fabienolicard"), $("#adrigeek"), $("#davidlafarge"), $("#fantasio974"), $("#frigiel"), $("#furiousjumper"), $("#hugoposay"), $("#kirby54"), $("#legrandjd"), $("#remigaillard"), $("#seblafrite"), $("#siphano"), $("#sofiane"), $("#tiboinshape"), $("#vodk"), $("#aypierre")];
randomnumperso = Math.floor(Math.random() * 21);
randomperso = persos[randomnumperso];
answerwritter = document.createElement("p");
document.getElementById("div1").appendChild(answerwritter);
submitbutton.addEventListener("click", onClickSubmitButton);
lowbutton.addEventListener("click", onClickLowButton);
highbutton.addEventListener("click",onClickHighButton);
$(document).on("keypress", function (event) {
    if(event.key === "Enter"){
        onClickSubmitButton();
    }
});
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
        FlipAndSound(1);
    }else if(id === "cyprien" && compteurclic[1] === 0 && gamefinished === 0){
        FlipAndSound(2);
    }else if(id === "norman" && compteurclic[2] ===  0 && gamefinished === 0){
        FlipAndSound(3);
    }else if(id === "nozman" && compteurclic[3] === 0 && gamefinished === 0){
        FlipAndSound(4);
    }else if(id === "squeezie" && compteurclic[4] === 0 && gamefinished === 0){
        FlipAndSound(5);
    }else if(id === "fabienolicard" && compteurclic[5] === 0 && gamefinished === 0){
        FlipAndSound(6);
    }else if(id === "adrigeek" && compteurclic[6] === 0 && gamefinished === 0){
        FlipAndSound(7);
    }else if(id === "davidlafarge" && compteurclic[7] === 0 && gamefinished === 0){
        FlipAndSound(8);
    }else if(id === "fantasio974" && compteurclic[8] === 0 && gamefinished === 0){
        FlipAndSound(9);
    }else if(id === "frigiel" && compteurclic[9] === 0 && gamefinished === 0){
        FlipAndSound(10);
    }else if(id === "furiousjumper" && compteurclic[10] === 0 && gamefinished === 0){
        FlipAndSound(11);
    }else if(id === "hugoposay" && compteurclic[11] === 0 && gamefinished === 0){
        FlipAndSound(12);
    }else if(id === "kirby54" && compteurclic[12] === 0 && gamefinished === 0){
        FlipAndSound(13);
    }else if(id === "legrandjd" && compteurclic[13] === 0 && gamefinished === 0){
        FlipAndSound(14);
    }else if(id === "remigaillard" && compteurclic[14] === 0 && gamefinished === 0){
        FlipAndSound(15);
    }else if(id === "seblafrite" && compteurclic[15] === 0 && gamefinished === 0){
        FlipAndSound(16);
    }else if(id === "siphano" && compteurclic[16] === 0 && gamefinished === 0){
        FlipAndSound(17);
    }else if(id === "sofiane" && compteurclic[17] === 0 && gamefinished === 0){
        FlipAndSound(18);
    }else if(id === "tiboinshape" && compteurclic[18] === 0 && gamefinished === 0){
        FlipAndSound(19);
    }else if(id === "vodk" && compteurclic[19] === 0 && gamefinished === 0){
        FlipAndSound(20);
    }else if(id === "aypierre" && compteurclic[20] === 0 && gamefinished === 0){
        FlipAndSound(21);
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
        answerwritter.innerHTML = randomperso.get(0) === persos[numimagenotclicked].get(0) ? "Vous avez gagné !" : "Vous avez perdu ! la réponse était : " + randomperso.get(0).id;
        if(randomperso.get(0) === persos[numimagenotclicked].get(0)){
            win.play();
        }else{
            lose.play();
        }
        answerwritter.innerHTML+= "<br>Génération d'une nouvelle partie votre page va se rafraichir dans 5 secondes.";
        compteurnonclic = 0;
        setTimeout(function () {location.reload();}, 5000);
    }else{
        compteurnonclic = 0;
    }
}

function FlipAndSound(flipnum){
    clicksound.pause();
    clicksound.currentTime = 0.0;
    clicksound.play();
    document.querySelector("#flipper" + flipnum).classList.toggle("flip");
    if(graphicalparam === 1) {
        $("#youtubeback" + flipnum).get(0).play();
    }
    compteurclic[flipnum - 1]++;
}

function onClickLowButton(){
    if(graphicalparam !== 0){
        for(let i = 1; i < (persos.length + 1); i++) {
            $("#youtubeback" + i).get(0).pause();
            $("#youtubeback" + i).attr("poster", "images/youtubeback.png");
            $("#youtubeback" + i).get(0).load();
            graphicalparam = 0;
        }
    }
}

function onClickHighButton(){
    if(graphicalparam !== 1){
        for(let i = 0; i < persos.length; i++) {
            if(compteurclic[i] === 1){
                $("#youtubeback" + (i + 1)).get(0).play();
            }
        }
        graphicalparam = 1;
    }
}