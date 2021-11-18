const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `images/${choosenImg}`;

document.body.style.backgroundImage =
  "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('" +
  bgImg.src +
  "')";
