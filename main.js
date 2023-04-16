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
    console.log("The box is visible in the viewport");
  } else {
    console.log("The box is not visible in the viewport");
  }
});
