// setting the height of the page and the slideshow & width of images

function adjustHW() {
  const height = window.innerHeight;
  document.body.style.height = `${height}px`;

  const headerH = document.getElementById("header").offsetHeight;
  const footerH = document.getElementById("footer").offsetHeight;
  const remainingH = height - headerH - footerH;

  document.getElementById("slideshow").style.height = `${remainingH}px`;

  const windowW = window.innerWidth;
  const images = document.getElementsByClassName("image");
  for (let i = 0; i < images.length; i++) {
    images[i].style.width = `${windowW}px`;
  }
}

adjustHW();

window.addEventListener("resize", adjustHW);

// closing subscription form

document.getElementById("close").addEventListener("click", closeForm);

function closeForm() {
  document.getElementById("subscription").style.display = "none";
}

// subscription form submit

document.getElementById("subForm").addEventListener("submit", submitForm);

function submitForm(e) {
  document.getElementById("subscription").innerHTML =
    "<h4>Thank you for subscribing!</h4>";
  setTimeout(closeForm, 3000);
  e.preventDefault();
}
