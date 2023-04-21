//hide and show freelance button
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const box = document.querySelector("#freelance-section");
const freelance_button = document.querySelector("#freelance-button");

document.addEventListener("scroll", function () {
  //   console.log(isInViewport(box));

  if (isInViewport(box)) {
    freelance_button.classList.add("disappear");
  } else {
    freelance_button.classList.remove("disappear");
  }
});

//open and close modal
const modal = document.querySelector(".modal");
const freeBtn = document.querySelector("#freelance-button");
const checkService = document.querySelector("#check-service");
const closeModal = document.querySelector("#close-button");

freeBtn.addEventListener("click", () => {
  modal.showModal();
});

checkService.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
