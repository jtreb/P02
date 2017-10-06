var popUp = document.getElementById("popUpId");

var takeImage = document.getElementById("imgSiteMapTrigger");
var takePopUp = document.getElementById("imgSiteMapPopUp");

takeImage.onclick = function() {
  popUp.style.display = "block";
}

var closeButton = document.getElementsByClassName("closePopUp")[0];

closeButton.onclick = function() {
  popUp.style.display="none";
}
