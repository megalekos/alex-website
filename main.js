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
    freelance_button.style.visibility = "hidden";
  } else {
    freelance_button.style.visibility = "visible";
  }
});

//open and close modal
const modal = document.querySelector(".modal");
const openModal = document.querySelector("#freelance-button");
const closeModal = document.querySelector("#close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
