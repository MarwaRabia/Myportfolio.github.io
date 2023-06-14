var images = [];
var currentIndex = 0;

function openModal(image) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  images = Array.from(document.querySelectorAll(".gallery img"));
  currentIndex = images.indexOf(image);

  modal.style.display = "block";
  modalImage.src = image.src;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.getElementById("myModal");

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function changeImage(n) {
  currentIndex += n;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  var modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex].src;
}

document.addEventListener("keydown", function (event) {
  var modal = document.getElementById("myModal");

  if (modal.style.display === "block") {
    if (event.key === "ArrowRight") {
      changeImage(1);
    } else if (event.key === "ArrowLeft") {
      changeImage(-1);
    } else if (event.key === "Escape") {
      closeModal();
    }
  }
});
