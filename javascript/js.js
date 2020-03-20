let links = ["subpages/spintowin.html", "subpages/scratchtowin.html",
     "subpages/chooseyourmood.html"
];

let link = links[Math.floor(Math.random() * links.length)];
let reference = document.getElementById('randlink');

randlink.href = link;