// function melange(){
//     var button = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//     var carte = ['luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy', 'luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy']
//     // var notrdm = Math.floor(carte.length)
//     var rdm = Math.floor(Math.random() * button.length)

//     // console.log(carte[notrdm])
//     console.log(button[rdm])
// }
// function tesst(){
// for (var i=0; i > 16; i++){
//     var button = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//     var rdm = Math.floor(Math.random() * button.length);
//     console.log(button[rdm]);
// }
// }

function melangeCarte(){
    var A1 = document.getElementById("1");
    var A2 = document.getElementById("2");
    var A3 = document.getElementById("3");
    var A4 = document.getElementById("4");
    var B1 = document.getElementById("5");
    var B2 = document.getElementById("6");
    var B3 = document.getElementById("7");
    var B4 = document.getElementById("8");
    var C1 = document.getElementById("9");
    var C2 = document.getElementById("10");
    var C3 = document.getElementById("11");
    var C4 = document.getElementById("12");
    var D1 = document.getElementById("13");
    var D2 = document.getElementById("14");
    var D3 = document.getElementById("15");
    var D4 = document.getElementById("16");

var nums = [A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4];
    ranNums = [];
    i = nums.length;
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
for (var i=0; i<16; i++){
    var carte = ['luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy', 'luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy']
    console.log(carte[i] + " " + ranNums[i]);
    ranNums[i].classList.add(carte[i]); 
}
}