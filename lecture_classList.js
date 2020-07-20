const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    //!== 이게 not equal
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}
/*클래스 리스트를 사용하면
더욱더 효율적인 코딩이 가능하다.
*/

function init() {
  title.addEventListener("click", handleClick);
}

init();
