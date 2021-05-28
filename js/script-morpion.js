
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
    } else if(
        (buttonA1.className.match("croix") || buttonA1.className.match("rond")) &&
        (buttonA2.className.match("croix") || buttonA2.className.match("rond")) &&
        (buttonA3.className.match("croix") || buttonA3.className.match("rond")) &&
        (buttonB1.className.match("croix") || buttonB1.className.match("rond")) &&
        (buttonB3.className.match("croix") || buttonB3.className.match("rond")) &&
        (buttonB2.className.match("croix") || buttonB2.className.match("rond")) &&
        (buttonC1.className.match("croix") || buttonC1.className.match("rond")) &&
        (buttonC2.className.match("croix") || buttonC2.className.match("rond")) &&
        (buttonC3.className.match("croix") || buttonC3.className.match("rond"))    ){
            alert("Match nul");
            document.location.reload();
        }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////FONCTION DU CLIC SUR LES BOUTTONS////////////////////////////////////////////////////////////////////////////////////////////


var tour = true;                                                                //Je donne une valeur initiale à ma variable tour

function button(button){                                                        //Je crée une fonction qui:
    var boutton = document.getElementById("button"+button);                     //(je donne une valeur à ma variable qui est l'id du boutton sur lequel on clique)

    if (boutton.className.match("croix") || boutton.className.match("rond")){   //1)Crée une ALerte
        alert('case dejà prise')                                                //   si le la case en question a déjà une des classes "croix" ou "rond"
    } else if(tour == true) {                                                   //2)Ajoute la classe "croix" au boutton si
        boutton.classList.add("croix");                                         //   la variable 'tour' est en "true" 
        tour = false;                                                           //   puis transforme la variable 'tour' en false
        victoire();                                                             //   et pour finir vérifie que les conditions de victoire ne sont pas remplies.
    }else if (tour == false){                                                   //3)Ajoute la classe "croix" au boutton si
        boutton.classList.add("rond");                                          //   la variable 'tour' est en "true" 
        tour=true;                                                              //   puis transforme la variable 'tour' en false
        victoire();                                                             //   et pour finir vérifie que les conditions de victoire ne sont pas remplies.
    }
}
