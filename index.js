const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
/*toggle 을 사용해보자! (super super simple!)*/

function init() {
  title.addEventListener("click", handleClick);
}

init();
