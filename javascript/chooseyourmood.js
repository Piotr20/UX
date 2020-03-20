let emojis = ["fas fa-tired", "fas fa-surprise", "fas fa-meh",
     "fas fa-angry", "fas fa-flushed", "fas fa-dizzy", "fas fa-grin",
     "fas fa-grin-alt", "fas fa-grin-beam-sweat", "fas fa-grin-hearts",
     "fas fa-grin-squint", "fas fa-grin-stars", "fas fa-grin-tears",
     "fas fa-grin-tongue", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink",
     "fas fa-grin-wink", "fas fa-kiss-wink-heart", "fas fa-laugh", "fas fa-laugh-beam",
     "fas fa-meh-blank", "fas fa-laugh-squint", "fas fa-meh-rolling-eyes", "fas fa-sad-cry",
     "fas fa-sad-tear", "fas fa-smile-wink", "fas fa-smile-beam"
];

let emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji5 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji6 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji7 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji8 = emojis[Math.floor(Math.random() * emojis.length)];
let emoji9 = emojis[Math.floor(Math.random() * emojis.length)];

let container1 = document.getElementById('griditem1');
let container2 = document.getElementById('griditem2');
let container3 = document.getElementById('griditem3');
let container4 = document.getElementById('griditem4');
let container5 = document.getElementById('griditem5');
let container6 = document.getElementById('griditem6');
let container7 = document.getElementById('griditem7');
let container8 = document.getElementById('griditem8');
let container9 = document.getElementById('griditem9');


container1.innerHTML = '<i class=' + '"' + emoji1 + '"' + '> </i>';
container2.innerHTML = '<i class=' + '"' + emoji2 + '"' + '> </i>';
container3.innerHTML = '<i class=' + '"' + emoji3 + '"' + '> </i>';
container4.innerHTML = '<i class=' + '"' + emoji4 + '"' + '> </i>';
container5.innerHTML = '<i class=' + '"' + emoji5 + '"' + '> </i>';
container6.innerHTML = '<i class=' + '"' + emoji6 + '"' + '> </i>';
container7.innerHTML = '<i class=' + '"' + emoji7 + '"' + '> </i>';
container8.innerHTML = '<i class=' + '"' + emoji8 + '"' + '> </i>';
container9.innerHTML = '<i class=' + '"' + emoji9 + '"' + '> </i>';

let beers = ["fas fa-wine-bottle", "fas fa-skull-crossbones"];

let beer1 = beers[Math.floor(Math.random() * beers.length)];
let beer2 = beers[Math.floor(Math.random() * beers.length)];
let beer3 = beers[Math.floor(Math.random() * beers.length)];
let beer4 = beers[Math.floor(Math.random() * beers.length)];
let beer5 = beers[Math.floor(Math.random() * beers.length)];
let beer6 = beers[Math.floor(Math.random() * beers.length)];
let beer7 = beers[Math.floor(Math.random() * beers.length)];
let beer8 = beers[Math.floor(Math.random() * beers.length)];
let beer9 = beers[Math.floor(Math.random() * beers.length)];

let container11 = document.getElementById('griditem11');
let container22 = document.getElementById('griditem22');
let container33 = document.getElementById('griditem33');
let container44 = document.getElementById('griditem44');
let container55 = document.getElementById('griditem55');
let container66 = document.getElementById('griditem66');
let container77 = document.getElementById('griditem77');
let container88 = document.getElementById('griditem88');
let container99 = document.getElementById('griditem99');


container11.innerHTML = '<i class=' + '"' + beer1 + '"' + '> </i>';
container22.innerHTML = '<i class=' + '"' + beer2 + '"' + '> </i>';
container33.innerHTML = '<i class=' + '"' + beer3 + '"' + '> </i>';
container44.innerHTML = '<i class=' + '"' + beer4 + '"' + '> </i>';
container55.innerHTML = '<i class=' + '"' + beer5 + '"' + '> </i>';
container66.innerHTML = '<i class=' + '"' + beer6 + '"' + '> </i>';
container77.innerHTML = '<i class=' + '"' + beer7 + '"' + '> </i>';
container88.innerHTML = '<i class=' + '"' + beer8 + '"' + '> </i>';
container99.innerHTML = '<i class=' + '"' + beer9 + '"' + '> </i>';

let showbeers = function () {
     document.getElementById("game-grid").style.visibility = "hidden";
     document.getElementById("game-grid-underneath").style.visibility = "visible";
}

document.getElementById('game-grid').addEventListener('click', showbeers)

/*let elementIsClicked1 = false; // declare the variable that tracks the state


let element1 = document.getElementById('griditem1'); // grab a reference to your element
element1.addEventListener('click', clickHandler1); // associate the function above with the click event

function clickHandler1() { // declare a function that updates the state
     elementIsClicked1 = true;
}

if (container11.textContent.includes('<i class="fas fa-wine-bottle"</i>')) {
     document.getElementById('what').textContent = 'Good';
}*/