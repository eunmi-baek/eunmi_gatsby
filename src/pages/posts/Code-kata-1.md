---
title: Code Kata_1
date: '2020-02-11'
tags: ['Javascript']
---

오늘의 코드카타,

문제는 reverse 함수에 정수인 숫자를 인자로 받고, 그 숫자를 뒤집어서 return 하기!
x : 숫자
return : 뒤집어진 숫자를 반환

ex)

```javascript
x : 1234
return : 4321

x : -1234
return : -4321

x : 1230
return : 321
```

여기서 먼저 해결해야 될 문제는 숫자를 문자로 변환해야 하는 것!

```javascript
var a = x.toString();
var a = [x] + '';
```

이런 방법으로 x를 문자로 바꿔줄 수 있다.
둘 중 아무거나 사용해도 상관없다.

```javascript
var result = '';
```

그러고 나선 빈 문자열을 변수로 만들어 줘야 한다. 그 빈 문자열에 뒤집어진 숫자를 반환해야 하기 때문이다.

for문으로 문자열을 돌려야 하는데,

```javascript
for (let i = a.length - 1; i >= 0; i--) {
  console.log(a[i]);
  result += a[i];
}
```

반대로 나열을 해야 하니까, i를 a.length-1을 해준다.
그 이유는 a = "1,2,3,4" 라고 가정을 하면,
a.length = 4이지만 index는 0부터 시작하기 때문에 -1을 해준다!
i가 0보다 크거나 같고, i가 1씩 -되게 한다.
안에 조건은 result는 빈 배열("") + a[i] 로 해줬다.

```javascript
return parseInt(result) * Math.sign(a);
```

for문을 벗어나서 return값은 result를 다시 숫자로 변환해주고 (parseInt(result))
Math.sign(a)를 곱해줬다. 여기서 Math.sign() 함수는 어떤 수의 부호를 반환한다. -를 같이 반환해주기 위해서 사용했다.
