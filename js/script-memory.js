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
        ranPlace[i].classList.add(carte[i], "hide"); 
}
}
////////////////////////////////////////////////////////////////////////////
var nombreEssais = 0;

var luke = 0;
var abdiel = 0;
var souhir = 0;
var sam = 0;
var kevin = 0;
var jonathan = 0;
var emma = 0;
var dimy = 0;

function clik(number){
    var carteselec = document.getElementById("c"+number);

    if (carteselec.className.match('hide')){
        carteselec.classList.remove('hide');
        nombreEssais++;
        display("Nombre de coups: " + nombreEssais /2)
    }
    if (carteselec.className.match('luke')){
        luke++;
        console.log("luke: " +luke);
    }
    if (carteselec.className.match('abdiel')){
        abdiel++;
        console.log("abdiel: "+ abdiel);
    }
    if (carteselec.className.match('souhir')){
        souhir++;
        console.log("souhir: "+souhir);
    }
    if (carteselec.className.match('sam')){
        sam++;
        console.log("sam: "+sam);
    }
    if (carteselec.className.match('kevin')){
        kevin++;
        console.log('kevin: '+kevin);
    }
    if (carteselec.className.match('jonathan')){
        jonathan++;
        console.log("jonathan: "+jonathan);
    }
    if (carteselec.className.match('emma')){
        emma++;
        console.log("emma: "+emma);
    }
    if (carteselec.className.match('dimy')){
        dimy++;
        console.log("dimy: "+dimy);
    }

    var delay = 2000; 

    setTimeout(function() { 
            condition()
        }, delay);
}

function condition(){
    var howmany = 0;

    for (var p=0; p<ranPlace.length; p++){
        if (ranPlace[p].className.match('hide')){
            howmany++;}}

        if (luke >=2){
            console.log('luke trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            luke=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            }

        else if (abdiel >=2){
                console.log('abdiel trouvé');
                for (var i=0; i<ranPlace.length; i++)
                if (ranPlace[i].className.match('hide')){
                }else {
                        ranPlace.splice(i, 1);
                }
                abdiel=0;
                if(ranPlace.length <= 1){
                    alert('Partie terminée en '+nombreEssais/2+" essais");
                    document.location.reload();
                }
                } 
        
        else if (souhir >=2){
            console.log('souhir trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            souhir=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            } 

        else if (sam >=2){
            console.log('sam trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            sam=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            } 

        else if (kevin >=2){
            console.log('kevin trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            kevin=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            } 

        else if (emma >=2){
            console.log('emma trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            emma=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            } 
        else if (jonathan >=2){
            console.log('jonathan trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            jonathan=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            } 
            
        else if (dimy >=2){
            console.log('dimy trouvé');
            for (var i=0; i<ranPlace.length; i++)
            if (ranPlace[i].className.match('hide')){
            }else {
                    ranPlace.splice(i, 1);
            }
            dimy=0;
            if(ranPlace.length <= 1){
                alert('Partie terminée en '+nombreEssais/2+" essais");
                document.location.reload();
            }
            } 


            else if (howmany <= parseInt(ranPlace.length)-2){
            for (var i=0; i<ranPlace.length; i++){
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

var displayDiv = document.getElementById("display")
function display(text){
    displayDiv.innerHTML= text;
}