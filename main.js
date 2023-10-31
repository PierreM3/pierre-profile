//Get elements from the DOM
const button = document.querySelector(".profile-image button");
const details = document.querySelector(".profile-details");
const image = document.querySelector(".profile-image");
const socialMedia = document.querySelector(".social-media");

//Add click event to main button
button.addEventListener("click", () => {
  //Toggle dynamic CSS classes to all elements
  button.classList.toggle("button-clicked");
  details.classList.toggle("details-open");
  image.classList.toggle("image-open");
  socialMedia.classList.toggle("social-media-show");
});