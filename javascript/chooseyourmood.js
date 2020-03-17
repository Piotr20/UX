let emojis = ["fas fa-tired", "fas fa-surprise", "fas fa-meh",
     "fas fa-angry", "fas fa-flushed", "fas fa-dizzy", "fas fa-grin",
     "fas fa-grin-alt", "fas fa-grin-beam-sweat", "fas fa-grin-hearts",
     "fas fa-grin-squint", "fas fa-grin-stars", "fas fa-grin-tears",
     "fas fa-grin-tongue", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink",
     "fas fa-grin-wink", "fas fa-kiss-wink-heart", "fas fa-laugh", "fas fa-laugh-beam",
     "fas fa-meh-blank", "fas fa-laugh-squint", "fas fa-meh-rolling-eyes", "fas fa-sad-cry",
     "fas fa-sad-tear", "fas fa-smile-wink", "fas fa-smile-beam"
]

let emoji = emojis[Math.floor(Math.random() * emojis.length)]

console.log(emoji);

griditem1.innerHTML = '<i class=' + '"' + emoji + '"' + '" emoji"'
'> </i>';