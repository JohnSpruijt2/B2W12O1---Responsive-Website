document.getElementById("bigcontent").style.display = "none"
function bigMenu() {
    if (document.getElementById("bigcontent").style.display == "none") {
        document.getElementById("bigcontent").style.display = "block"
        document.getElementById("smallMenu").style.display = "none"
        if (document.getElementById("smallcontent").style.display == "block") {
            document.getElementById("smallcontent").style.display = "none"
        }
    }
    else {
        document.getElementById("bigcontent").style.display = "none"
        document.getElementById("smallMenu").style.display = "block"
}
}document.getElementById("smallcontent").style.display = "none"
function smallMenu() {
    if (document.getElementById("smallcontent").style.display == "none") {
        document.getElementById("smallcontent").style.display = "block"
    }
    else {
        document.getElementById("smallcontent").style.display = "none"
}
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  window.timer = setTimeout(showSlides, 5000); // Change image every 2 seconds
} 

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex + n);
  }
  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }