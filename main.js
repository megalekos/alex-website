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

//show mobile menu
const menu = document.querySelector("nav");
const menuHandle = document.querySelector(".menu-slider");
window.addEventListener("resize", function () {
  if (window.innerWidth < 548) {
    menu.classList.add("to_side");
  }
  if (window.innerWidth > 548) {
    menu.classList.remove("to_side");
  }
});

menuHandle.addEventListener("click", () => {
  menu.classList.toggle("to_side");
});

//render marker on menu
//WONT WORK. need to match currentMenuItem with currentSection
let currentSection;
let currentMenuItem;
let selectedMenuItem;

const menuItems = document.querySelectorAll("nav > a");
const sections = document.querySelectorAll(".project");
const menuList = [];
const sectionList = [];

function handleMenu() {
  for (let i = 0; i < sections.length; i++) {
    currentSection = sections[i];
    // sectionList.push(currentSection.dataset.id);
    // console.log(currentSection.dataset.id);
    for (let i = 0; i < menuItems.length; i++) {
      currentMenuItem = menuItems[i];
      // console.log("menu item data" + menuItems[i].dataset.id);
      // menuList.push(menuItems[i].dataset.id);
      if (
        isInViewport(currentSection) &&
        currentMenuItem.dataset.id === currentSection.dataset.id
      ) {
        selectedMenuItem = currentMenuItem;
        selectedMenuItem.style.textDecoration = "underline";
        // console.log(currentSection.id + " in view");
        // console.log(selectedMenuItem);
        // console.log("type" + typeof selectedMenuItem);
      } else if (
        !isInViewport(currentSection) &&
        currentMenuItem.dataset.id === currentSection.dataset.id
      ) {
        // currentMenuItem.style.textDecoration = "";
        selectedMenuItem = currentMenuItem;
        selectedMenuItem.style.textDecoration = "";

        // console.log(selectedMenuItem + "test");
      }
    }
  }
}

function handleMenu2(el) {
  selectedMenuItem = el;
  selectedMenuItem.style.textDecoration = "underline";
}
menuItems.forEach((el) => el.addEventListener("click", handleMenu2(el)));
document.addEventListener("scroll", handleMenu);
