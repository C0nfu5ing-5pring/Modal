let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".closeBtn");
let openBtn = document.querySelector(".openBtn");

openBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
});

closeBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
});
