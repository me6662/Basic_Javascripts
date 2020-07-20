const a = 221;
let b = a - 5;
// a = 4; const 라서 못바꿉니다.
console.log(b, a);

/*
let vs var?
똑같이 동작 하나, var 보다는 let을 쓰는것을 니꼴라스가 추천함. 왜지 시발?
let 은 재할당이 불가능함. 

let a = 1;
let a = 3; << 에러

var a = 1;
var a = 3; << 에러 안남

깔끔한 코딩을 위해선 let이 나음. 

그리고 var 은 선언 이전에 참조는 가능함 (물론 에러는 남)
let 은 그게 안됨 
이걸 호이스팅 이라 하는데 나중에 시간나면 봐라.. 여튼 코딩 정석으로 하려면 let이 낫다.

const , let 이걸 쓰자 이거야!
*/

// 변수 선언할 때는 기본적으로 const 를 쓰자!
// 진짜 필요할때만 let을 쓰자 ~

//string
const what = "Yang Dong Gyu";
//console.log(what);

//boolean
const jaji = true;
const boji = false;

//Number
const gae__jaji = 111;

//Float
const gae__boji = 55.22;

/************* Camel Case **************/
// 낙타 등
// 변수명은 소문자로 시작
// 변수명 사이에 스페이스가 필요하면 대문자로 써주고
// 또 스페이스를 넣고 싶으면 다시 대문자 씀

/************* ARRAY **************/
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

//console.log(monday, tue, wed, thu, fri);
// 이것을 하나로 묶어보자

const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  true,
  false,
  123,
  14.415,
];

console.log(daysOfWeek[4]);

/************* OBJECT **************/
const ydgInfo = {
  name: "yang dong gyu",
  age: 29,
  gender: "male",
  isHandsome: true,
  favMovie: ["new world", "crime city", "old boy"],
  favFood: [
    { name: "kimchi", isFatty: false },
    { name: "ramen", isFatty: true },
  ],
};

ydgInfo.age = 27; // const 이나 바꿀수 있음.
// 단  object 자체는 바꿀수 없음.

//ydgInfo = false; 이것은 문제가 된다.

console.log(ydgInfo.name);
console.log(ydgInfo.age);
console.log(ydgInfo.favMovie[2]);
console.log(ydgInfo.favFood[0].isFatty);

/************* Function (void) **************/
//console.log(console);// log 는 function

function sayHello(name, number) {
  console.log("Hello! " + name + ". Your number is " + number + ".");
  console.log(`Hello~~ agian ${name}, you are number is really ${number}.`);
  // back tick (1옆에 있는거) 을 활용 존나편함.
}
// javascripts 에서는 '' , "" 둘다 string

sayHello("Iron Man", 1);
sayHello("Captain America", 2);

/************* Function (return) **************/

function sayHelloTwo(name, number) {
  return `Hello. ${name}, Your number is ${number}!`;
}

const Greetings = sayHelloTwo("Thor", 3);

console.log(Greetings);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

console.log(calculator.plus(3, 4));
