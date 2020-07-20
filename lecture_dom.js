/*****************DOM Functions*****************/
// HTML (= document) 와 상호작용 해보자

const title = document.getElementById("title");

console.log(title);
title.innerHTML = "jot kka ssip saeki ya"; // 태그의 내용을 변화 시킴

/*
DOM (Document Object Module)

Javascipts 는 html 에 있는 모든걸 가져와서 Object 로 바꿔주는 기능을 가진다.
(html 태그들을 Object로 바꿔줄것임.)

그 Ojbect 로 바꿔버린 결과를 DOM 이라고 하는듯.

"Javascripts 는 HTML 을 DOM 으로 바꿔준다."
*/

console.dir(title); // 이걸 하면 브라우저 콘솔에서 접근가능한 object 내부를 볼수있음.
title.style.color = "red"; // css 도 바꿀수 있음.

console.dir(document);
document.title = "I own you now";

const title2 = document.querySelector("#title");
// css 의 selector 처럼 선택하고 싶을 때 사용, 단 가장 위에있는 (html 문서 순서상) 애를 1개 리턴

title2.innerHTML = "seevar ! sex !";
