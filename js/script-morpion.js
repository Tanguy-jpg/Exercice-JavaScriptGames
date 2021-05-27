                    //  IDEES AVANT DE COMMENCER 
// Quand on clique sur un boutton: ça fait une croix dans le boutton.
// Si il y a déjà une croix ou un rond dans le boutton, ça ne marche pas.
// Si ça marche, on change l'image de la croix par l'image d'un rond(pour le prochain tour).

// pourquoi ne pas créer une classe background-image ROND et CROIX pour les bouttons ?

// SI LA CLASSE ROND OU CROIX EST ACTIVE ALORS RIEN FAIRE. SI LA Précedente classe attribuée était rond, alors ajouter croix

// Cliquer sur un boutton change la photo ou la classe qui sera attribué la prochaine fois. Si une classe est déjà attibué, ne rien faire

//Un event listener:


// function swap()
// {
// var ancien=document.getElementById("button1").className;
// if (ancien=='croix') {nouveau='rond';} else {nouveau='croix';}
// document.getElementById("button1").className=nouveau;
// }


function button1(){
    var button1 = document.getElementById("button1");

    if (button1.className.match("croix") || button1.className.match("rond")){
        alert('case dejà prise')
    } else {
        button1.classList.add("croix");
    }
}

function button2(){
    var button1 = document.getElementById("button2");
    button1.classList.add("croix");
}
function button3(){
    var button1 = document.getElementById("button3");
    button1.classList.add("croix");
}
function button4(){
    var button1 = document.getElementById("button4");
    button1.classList.add("croix");
}
function button5(){
    var button1 = document.getElementById("button5");
    button1.classList.add("croix");
}
function button6(){
    var button1 = document.getElementById("button6");
    button1.classList.add("croix");
}
function button7(){
    var button1 = document.getElementById("button7");
    button1.classList.add("croix");
}
function button8(){
    var button1 = document.getElementById("button8");
    button1.classList.add("croix");
}
function button9(){
    var button1 = document.getElementById("button9");
    button1.classList.add("croix");
}




