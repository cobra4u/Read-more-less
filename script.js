
function myFunction() {
  var dots = document.getElementById("less");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  }
}
