const nav = document.querySelector(".navigation");
function fixednav() {
  if (window.scrollY > 250) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}
window.addEventListener("scroll", fixednav);
