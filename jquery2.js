function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("button.btn-toggle-clamp");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lire + » ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lire - « ";
    moreText.style.display = "inline";
  }
}

