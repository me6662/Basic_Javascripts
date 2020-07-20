/******************Event and Handler******************/

function handleResize(event) {
  console.log("I have been resized");
  //console.log(event); // 매개변수가 그 이벤트 객체 그 자체가 전달됨 자동으로!!
}

//윈도우 (창) 에 이벤트 등록하기
window.addEventListener("resize", handleResize);

// title 변수 에 이벤트 등록하기
const title = document.querySelector("#title");

// 컬러 변수
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();

// javascipt DOM Mdn 치면 어떤이벤트 있는지 나온다!
