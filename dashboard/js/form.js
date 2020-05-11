const avatar = document.querySelector(".avatar");
function openSetting({ target, classList }) {
  target.classList.toggle("open");
}
avatar.addEventListener("click", openSetting);
function switchMenu({ target }) {
  const currentMenu = document.querySelector(".menu-item.active");
  currentMenu.classList.remove("active");
  target.classList.add("active");
}
menuItems.forEach((item) => {
  item.addEventListener("click", switchMenu);
});
