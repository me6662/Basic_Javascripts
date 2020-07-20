const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    //!== 이게 not equal
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
/*왜 이렇게 코딩하는가 ?
Javascripts 는 css 에서의 style 프로퍼티는 안건들이는게 좋다.
오직 logic 적인 부분만을 처리하도록 만드는게
깔끔한 코딩방법!
*/

function init() {
  title.addEventListener("click", handleClick);
}

init();
