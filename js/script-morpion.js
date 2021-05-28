///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function A1(classe) {return document.getElementById("button1").className.match(classe);}  //  Je crée des fonctions                                                          //
function A2(classe) {return document.getElementById("button2").className.match(classe);}  //  pour chacune de mes cases/bouttons                                             //
function A3(classe) {return document.getElementById("button3").className.match(classe);}  //  de manière à pouvoir me repérer                                                //
function B1(classe) {return document.getElementById("button4").className.match(classe);}  //  et les utiliser plus simplement.                                               //
function B2(classe) {return document.getElementById("button5").className.match(classe);}  //                                                                                 //
function B3(classe) {return document.getElementById("button6").className.match(classe);}  //  En gros, ce que je vais écrire à l'intérieur                                   //
function C1(classe) {return document.getElementById("button7").className.match(classe);}  //  des (), après avoir écrit A1 ou bien C3, va automatiquement                    //
function C2(classe) {return document.getElementById("button8").className.match(classe);}  //  me renvoyer à si oui ou non mon élément possède la classe que j'ai renseignée. //
function C3(classe) {return document.getElementById("button9").className.match(classe);}  //         par exemple: " A1("croix"); " -> cas 1: Oui il possède croix            //
////////////////////////////////////////////////////////////////////////////////////////////                                     -> cas 2: Non il ne possède pas croix       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
function victoire(){                                        //       Ici, je crée mes conditions de victoire (une fonction victoire)
    if (                                                    //    
        // RONDS HORIZONTAL                                 //    
         (A1("rond") && A2("rond") && A3("rond")) ||        //              Je lui dis: 
         (B1("rond") && B2("rond") && B3("rond")) ||        //                          SI:   "la case A1 et A2 et A3 possèdent la classe 'rond' "
         (C1("rond") && C2("rond") && C3("rond")) ||        //                                                       OU
        // RONDS VERTICAL                                   //                                "la case B1 et B2 et B3 possèdent la classe 'rond' "
         (A1("rond") && B1("rond") && C1("rond")) ||        //                                                       OU
         (A2("rond") && B2("rond") && C2("rond")) ||        //                                "la case C1 et C2 et C3 possèdent la classe 'rond' "
         (A3("rond") && B3("rond") && C3("rond")) ||        //                                                   [et cetera]
        // RONDS DIAGONAL                                   //                          ALORS: 
         (A1("rond") && B2("rond") && C3("rond")) ||        //                                 "Lance une alert dans laquelle il y a écrit:
         (A3("rond") && B2("rond") && C1("rond"))   ){      //                                  'les ronds Gagnent !' puis refresh la page."
                                                            //                                 
            alert("Les ronds Gagnent !");                   //          
            document.location.reload();                     //              
                                                            //
    } else if(                                              //
        // CROIX HORIZONTAL                                 //  
         (A1("croix") && A2("croix") && A3("croix")) ||     //
         (B1("croix") && B2("croix") && B3("croix")) ||     //
         (C1("croix") && C2("croix") && C3("croix")) ||     //
        // CROIX VERTICAL                                   //                ~ Je fais la même chose, mais avec la classe croix
         (A1("croix") && B1("croix") && C1("croix")) ||     //
         (A2("croix") && B2("croix") && C2("croix")) ||     //
         (A3("croix") && B3("croix") && C3("croix")) ||     //
        // CROIX DIAGONAL                                   //  
         (A1("croix") && B2("croix") && C3("croix")) ||     //
         (A3("croix") && B2("croix") && C1("croix"))   ){   //
            alert("Les croix Gagnent !");                   //
            document.location.reload();                     //
    } else if(                                              //           Ici, c'est dans le cas d'une égalitée
        (A1("croix") || A1("rond")) &&                      //              
        (A2("croix") || A2("rond")) &&                      //                  Je lui dis:
        (A3("croix") || A3("rond")) &&                      //                              SI:   "la case A1 possède la classe rond ou la classe croix" 
        (B1("croix") || B1("rond")) &&                      //                                                          ET
        (B3("croix") || B3("rond")) &&                      //                                    "la case A2 possède la classe rond ou la classe croix" 
        (B2("croix") || B2("rond")) &&                      //                                                          ET
        (C1("croix") || C1("rond")) &&                      //                                    "la case A3 possède la classe rond ou la classe croix" 
        (C2("croix") || C2("rond")) &&                      //                                                      [et cetera]
        (C3("croix") || C3("rond"))    ){                   //                              ALORS:
            alert("Match nul");                             //                                      "ouvre une alerte dans laquelle il y a écrit :
            document.location.reload();                     //                                       'Match nul' puis refresh la page."
        }                                                   //
}                                                           // 
//////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////                  FONCTION DU CLIC SUR LES BOUTTONS                                     //     
var tour = true;                                                                // Je donne une valeur initiale à ma variable tour                                        //
                                                                                //                                                                                        //  
function button(button){                                                        // Je crée une fonction qui:                                                              //
    var boutton = document.getElementById("button"+button);                     // (je donne une valeur à ma variable qui est l'id du boutton sur lequel on clique)       //
                                                                                //                                                                                        //
    if (boutton.className.match("croix") || boutton.className.match("rond")){   // 1)Crée une ALerte                                                                      //
        alert('case dejà prise')                                                //   si le boutton en question a déjà une des classes "croix" ou "rond"                   //
    } else if(tour == true) {                                                   // 2)Ajoute la classe "croix" au boutton si                                               //
        boutton.classList.add("croix");                                         //    la variable 'tour' est en "true"                                                    //
        tour = false;                                                           //    puis transforme la variable 'tour' en false                                         //
        victoire();                                                             //    et pour finir vérifie que les conditions de victoire ne sont pas remplies.          //
    }else if (tour == false){                                                   // 3)Ajoute la classe "croix" au boutton si                                               //
        boutton.classList.add("rond");                                          //    la variable 'tour' est en "true"                                                    //
        tour=true;                                                              //    puis transforme la variable 'tour' en false                                         //
        victoire();                                                             //    et pour finir vérifie que les conditions de victoire ne sont pas remplies.          //
    }                                                                           //                                                                                        //
}                                                                               //                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
