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