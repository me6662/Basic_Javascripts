/******************if else******************/
/*
 === 를 권장한다.

== : abstract equality operator
=== : strict equality operator

== 는 자동적으로 type conversion 이루어지는 반면에
=== 는 이루어지지 않는다.

'' == '0'  : false
'0' == ''  : true (비교대상 _후자 의 type conversion 발생)
0 == '0' : true

'0' === ''  : false (비교대상 _후자 의 type conversion 안 발생)
0 === '0' : false
*/

if ("10" === 10) {
  console.log("you right");
} else {
  console.log("you wrong");
}

const age = prompt("How old are you?");

if (age > 18 && age < 21) {
  console.log("you can drink but you should not.");
} else if (age > 21) {
  console.log("go ahead.");
} else {
  console.log("you can't drink.");
}
