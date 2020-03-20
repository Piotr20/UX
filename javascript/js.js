let links = ["Subpages/spintowin.html", "Subpages/scratchtowin.html",
     "Subpages/chooseyourmood.html"
];

let link = links[Math.floor(Math.random() * links.length)];
let reference = document.getElementById('randlink');

randlink.href = link;