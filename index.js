// Show sidebar

const linksSidebar = document.getElementById("links-sidebar");
console.log(linksSidebar);
const barClose = document.getElementById("sidebar-close");
console.log(barClose);
const barOpen = document.getElementById("sidebar-open");
console.log(barOpen);

if (barOpen) {
  barOpen.addEventListener("click", () => {
    linksSidebar.classList.add("show-menu");
  });
}
if (barClose) {
  barClose.addEventListener("click", () => {
    linksSidebar.classList.remove("show-menu");
  });
}
