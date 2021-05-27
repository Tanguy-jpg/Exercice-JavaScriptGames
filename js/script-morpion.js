                    //  IDEES AVANT DE COMMENCER 
// Quand on clique sur un boutton: ça fait une croix dans le boutton.
// Si il y a déjà une croix ou un rond dans le boutton, ça ne marche pas.
// Si ça marche, on change l'image de la croix par l'image d'un rond(pour le prochain tour).

// pourquoi ne pas créer une classe background-image ROND et CROIX pour les bouttons ?

// SI LA CLASSE ROND OU CROIX EST ACTIVE ALORS RIEN FAIRE. SI LA Précedente classe attribuée était rond, alors ajouter croix

// Cliquer sur un boutton change la photo ou la classe qui sera attribué la prochaine fois. Si une classe est déjà attibué, ne rien faire

//Un event listener: la classe..?


var croix = true;

function button1(){
    var button1 = document.getElementById("button1");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button2(){
    var button1 = document.getElementById("button2");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button3(){
    var button1 = document.getElementById("button3");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button4(){
    var button1 = document.getElementById("button4");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button5(){
    var button1 = document.getElementById("button5");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button6(){
    var button1 = document.getElementById("button6");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button7(){
    var button1 = document.getElementById("button7");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button8(){
    var button1 = document.getElementById("button8");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}
function button9(){
    var button1 = document.getElementById("button9");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else if(croix == true) {
        button1.classList.add("croix");
        croix = false;
        victoire();
    }else if (croix == false){
        button1.classList.add("rond");
        croix=true;
        victoire();
    }
}

const buttonA1 = document.getElementById("button1");
const buttonA2 = document.getElementById("button2");
const buttonA3 = document.getElementById("button3");
const buttonB1 = document.getElementById("button4");
const buttonB2 = document.getElementById("button5");
const buttonB3 = document.getElementById("button6");
const buttonC1 = document.getElementById("button7");
const buttonC2 = document.getElementById("button8");
const buttonC3 = document.getElementById("button9");

function victoire(){
    if ( 
        // RONDS HORIZONTAL
         (buttonA1.className.match("rond") && buttonA2.className.match("rond") && buttonA3.className.match("rond")) ||
         (buttonB1.className.match("rond") && buttonB2.className.match("rond") && buttonB3.className.match("rond")) ||
         (buttonC1.className.match("rond") && buttonC2.className.match("rond") && buttonC3.className.match("rond")) ||
        // RONDS VERTICAL
         (buttonA1.className.match("rond") && buttonB1.className.match("rond") && buttonC1.className.match("rond")) ||
         (buttonA2.className.match("rond") && buttonB2.className.match("rond") && buttonC2.className.match("rond")) ||
         (buttonA3.className.match("rond") && buttonB3.className.match("rond") && buttonC3.className.match("rond")) ||
        // RONDS DIAGONAL
         (buttonA1.className.match("rond") && buttonB2.className.match("rond") && buttonC3.className.match("rond")) ||
         (buttonA3.className.match("rond") && buttonB2.className.match("rond") && buttonC1.className.match("rond"))   ){

            alert("Les ronds Gagnent !");
            document.location.reload();
        
    } else if(
        // CROIX HORIZONTAL
         (buttonA1.className.match("croix") && buttonA2.className.match("croix") && buttonA3.className.match("croix")) ||
         (buttonB1.className.match("croix") && buttonB2.className.match("croix") && buttonB3.className.match("croix")) ||
         (buttonC1.className.match("croix") && buttonC2.className.match("croix") && buttonC3.className.match("croix")) ||
        // CROIX VERTICAL
         (buttonA1.className.match("croix") && buttonB1.className.match("croix") && buttonC1.className.match("croix")) ||
         (buttonA2.className.match("croix") && buttonB2.className.match("croix") && buttonC2.className.match("croix")) ||
         (buttonA3.className.match("croix") && buttonB3.className.match("croix") && buttonC3.className.match("croix")) ||
        // CROIX DIAGONAL
         (buttonA1.className.match("croix") && buttonB2.className.match("croix") && buttonC3.className.match("croix")) ||
         (buttonA3.className.match("croix") && buttonB2.className.match("croix") && buttonC1.className.match("croix"))   ){
            alert("Les croix Gagnent !");
            document.location.reload();
        }
}

