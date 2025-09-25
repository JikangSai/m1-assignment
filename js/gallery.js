var imageSrcs = [
  "images/Image1.jpg","images/Image2.jpg","images/Image3.jpg",
  "images/Image4.jpg","images/Image5.jpg","images/Image6.jpg",
  "images/Image7.jpg","images/Image8.jpg","images/Image9.jpg","images/Image10.jpg"
];

var captionTexts = [
  "Image 1","Image 2","Image 3","Image 4","Image 5",
  "Image 6","Image 7","Image 8","Image 9","Image 10"
];

var descTexts = [
  "Description for Image 1","Description for Image 2","Description for Image 3",
  "Description for Image 4","Description for Image 5","Description for Image 6",
  "Description for Image 7","Description for Image 8","Description for Image 9","Description for Image 10"
];

var openListTag = '<li id="photo';
var midListTag = '">';
var closeListTag = '</li>';

var openCaptionTag = '<div class="caption">';
var closeCaptionTag = '</div>';

var openDescTag = '<div class="description">';
var closeDescTag = '</div>';

var closeText = "Click This To Close";

var html = "";
for (var i = 0; i < imageSrcs.length; i++) {
  var imgTag = '<img src="' + imageSrcs[i] + '" alt="' + captionTexts[i] + '">';
  var captionTag = openCaptionTag + captionTexts[i] + closeCaptionTag;
  var descTag = openDescTag + descTexts[i] + closeDescTag;
  html += openListTag + (i + 1) + midListTag + imgTag + captionTag + descTag + closeListTag;
}
document.getElementById("gallery").innerHTML = html;

var infobox = document.getElementById("infobox");
var infoTitle = document.getElementById("infoTitle");
var infoText = document.getElementById("infoText");
var infoClose = document.getElementById("infoClose");
infoClose.textContent = closeText;

var triggers = document.querySelectorAll("#gallery .caption, #gallery .description");
for (var j = 0; j < triggers.length; j++) {
  triggers[j].addEventListener("click", function () {
    var li = this.closest("li");
    var idx = parseInt(li.id.replace("photo",""), 10) - 1;
    infoTitle.innerHTML = captionTexts[idx]; 
    infoText.innerHTML = descTexts[idx];     
    infobox.style.visibility = "visible";    
  });
}

infoClose.addEventListener("click", function (e) {
  e.preventDefault();
  infobox.style.visibility = "hidden";
});
