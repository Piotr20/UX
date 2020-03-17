// the image names
var beverage = [
     "1.jpeg",
     "1.jpeg"
];

for (i = 0; i < beverage.length; i++) {

     // note the shorthand code below
     // Here we make the path to the images in the folder
     exhibition.innerHTML += '<img src="images/'

          +
          myGallery[i] + '" alt="Dogs">';
}
// see that the image tag are split up, very important!
// let the loop create the HTML for your gallery