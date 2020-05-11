const actions = document.querySelectorAll("[data-key]");
function handleClick(e) {
  let action = e.target;
  if (!action.getAttribute("data-key")) {
    action = action.closest("[data-key]");
  }
  let context = action.dataset.key;
  window.location.href = `/dashboard/form.html?action=${context}`;
}
actions.forEach((action) => {
  action.addEventListener("click", handleClick);
});

const menuItems = document.querySelectorAll(".menu-item");
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
