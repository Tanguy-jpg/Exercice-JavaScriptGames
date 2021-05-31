const A1 = document.getElementById("c1");
const A2 = document.getElementById("c2");
const A3 = document.getElementById("c3");
const A4 = document.getElementById("c4");
const B1 = document.getElementById("c5");
const B2 = document.getElementById("c6");
const B3 = document.getElementById("c7");
const B4 = document.getElementById("c8");
const C1 = document.getElementById("c9");
const C2 = document.getElementById("c10");
const C3 = document.getElementById("c11");
const C4 = document.getElementById("c12");
const D1 = document.getElementById("c13");
const D2 = document.getElementById("c14");
const D3 = document.getElementById("c15");
const D4 = document.getElementById("c16");

function melangeCarte(){
    var place = [A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4];
        ranPlace = [];
        i = place.length;
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranPlace.push(place[j]);
        place.splice(j,1);
    }
    for (var i=0; i<16; i++){
        var carte = ['luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy', 'luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy']
        ranPlace[i].classList.add(carte[i]); 
}
}
////////////////////////////////////////////////////////////////////////////
var luke = 0
var abdiel = 0
var souhir = 0
var sam = 0
var kevin = 0
var jonathan = 0
var emma = 0
var dimy = 0

function clik(number){
    var carteselec = document.getElementById("c"+number);

    if (carteselec.className.match('hide')){
        // pastrois();
        carteselec.classList.remove('hide');
    }
    if (carteselec.className.match('luke')){
        luke++;
        console.log(luke);
    }
    if (carteselec.className.match('abdiel')){
        abdiel++;
        console.log(abdiel);
    }

    var delay = 2000; 

    setTimeout(function() { 
            condition()
        }, delay);
}

function condition(){
    var howmany = 0;

    for (var i=0; i<16; i++){
        if (ranPlace[i].className.match('hide')){
            howmany++;}}
        if (luke >=2){
            console.log('luketrouvé');
            
        }else if (howmany <= 14){
            for (var i=0; i<16; i++){
                ranPlace[i].classList.add('hide');}

                luke = 0;
                abdiel = 0;
                souhir = 0;
                sam = 0;
                kevin = 0;
                jonathan = 0;
                emma = 0;
                dimy = 0;
            }
}

// function pastrois(){
//     var howmany = 0;

//     for (var i=0; i<16; i++){
//         if (ranPlace[i].className.match('hide')){
//             howmany++;
//         }
//     }
//     if (howmany <= 14){
//        alert('Vous ne pouvez pas regarder plus de deux cartes par tour')
//         }
// }
