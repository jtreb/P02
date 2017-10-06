// a variable that refers to the id of the entire popup div
var popUp = document.getElementById("popUpId");

// a variable that takes the initial trigger sitemap image
var takeImage = document.getElementById("imgSiteMapTrigger");

// on click of the trigger image, set the style to pop-up
takeImage.onclick = function() {
  popUp.style.display = "block";
}

// a variable that refers to the class name of the X button
var closeButton = document.getElementsByClassName("closePopUp")[0];

// on click of the x button, display nothing (remove the pop-up)
closeButton.onclick = function() {
  popUp.style.display="none";
}
