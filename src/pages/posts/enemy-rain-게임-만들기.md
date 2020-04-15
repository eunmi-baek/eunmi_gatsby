---
title: Enemy Rain
date: '2020-02-12'
categories:
  - Javascript
tags: ['Javascript']
---

인스타그램 클론코딩 끝나고 한 게임 만들기!

![](https://images.velog.io/images/eunmi/post/be306bd6-e1ef-4cf2-b29a-8ab2e99d3c27/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-12%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.05.45.png)

하늘에서 귀신이 떨어지면 밑에 있는 용사가 물리치는(?)게임인데,
이 간단한 게임을 구현하는데 우여곡절이 참 많았다.

용사 javascript 설정 할 때엔

1. 방향키에 따라서 이동을 해야한다.
2. 용사가 백그라운드 안에서만 동작을 해야한다.

이렇게만 설정해주면 되는데. 방향키를 누를 때 실행하는 건 인스타 클론코딩할 때 배웠던 addEventListener('keydown')을 써주었다.

백그라운드 안에서만 동작을 할 때에는 용사의 offsetLeft값을 가져왔는데, style.left값도 가능하지만 요거는 string으로 되어 있어서 조건문을 쓸 때 숫자로 바꿔야 하는 번거로움이 있다.
그래서 offsetLeft로 용사의 끝과 끝 위치값을 지정해주었다.

```js
if (e.keyCode === 37 && user.offsetLeft > 0) {
  user.classList.add('user-left');
  user.style.left = user.offsetLeft - 10 + 'px';
} else if (e.keyCode === 39 && user.offsetLeft < 760) {
  user.classList.add('user-right');
  user.style.left = user.offsetLeft + 10 + 'px';
}
```

이렇게 작성을 했다.
이 전에 작성을 어떻게 했나면!

```js
if (user.offsetLeft >= 0 && user.offsetLeft <= 760) {
  if (e.keyCode === 37) {
    user.classList.add('user-left');
    user.style.left = user.offsetLeft - 10 + 'px';
  } else if (e.keyCode === 39) {
    user.classList.add('user-right');
    user.style.left = user.offsetLeft + 10 + 'px';
  }
}
```

이렇게 썼었는데, if문 안에 if문을 작성했다. 근데 움직이긴 했는데 저 offsetLeft 범위 값(0 || 760)을 딱 찍으면 움직이질 않았다ㅠㅠ if문 안으로만 console.log를 주구장창 찍어보고, 밖으로는 안 찍어서 그 범위 안에 오지 못하는 걸 모르고 있었다.
그리고 내가 이동할 때마다 offsetLeft - 10이라고 지정을 해줬으니까 값이 조금이라도 안 맞으면 if문이 작동이 안 되는 것 같았다.
1픽셀도 잘 생각하면서 지정해줘야겠다.

귀신 javascript 설정 할 때엔

1. 귀신을 만든다.
2. 귀신의 left값이 랜덤으로 바뀌게 설정해준다.
3. setInterval을 이용하여 0.01초마다 귀신이 떨어지게 설정한다.
4. 귀신이 용사 범위나 바닥에 닿을 때 죽게 한다.
5. 귀신이 떨어지고 죽는(?) 함수를 또 setInterval을 이용하여 1초마다 생성되게 한다!

```js
let ghost = document.createElement('div');
ghost.classList.add('enemy');
document.getElementById('main').appendChild(ghost);
```

귀신을 만들 때, 귀신 이미지를 미리 css에 만들어주어 classList.add를 사용해 추가해준다.

```js
let randomNumber = Math.random();
ghost.style.left = Math.floor(randomNumber * 600) + 'px';
```

귀신의 left값이 랜덤으로 바뀌게 설정한다! 백그라운드 width값이 600이라서 600을 곱해줬다.

이제 setInterval으로 귀신이 떨어지게 설정!

```js
let inter = setInterval(function () {
  if (
    ghost.offsetTop === 495 &&
    ghost.offsetLeft + 45 > user.offsetLeft &&
    ghost.offsetLeft - 45 < user.offsetLeft
  ) {
    ghost.classList.add('enemy-die');
    clearInterval(inter);
    setTimeout(() => {
      ghost.remove();
    }, 1000);
  }
  if (ghost.offsetTop === 550) {
    ghost.classList.add('enemy-die');
    clearInterval(inter);
    setTimeout(() => {
      ghost.remove();
    }, 1000);
  }
}, 10);
```

설명하자면.
조건문은 귀신의 offsetTop이 495일 때, (용사의 머리 위에 닿는 ghost의 top값)
그리고 귀신이 닿으면 죽어야 하니까 귀신의 offset 값의 범위 안에 user의 offset 값이 있어야 한다.
그래서 ghost.off - 45 < user.off < ghost.off + 45 이런..?
범위 안에 해당되면 죽는 이미지 클래스 추가하고, clearInterval 함수로 setInterval를 중지 시킨다.
그리고 setTimeout(부여된 시간 간격 이후로 호출)으로 귀신이 사라지게 한다.
두번째 if문은 조건이 귀신의 offsetTop이 550일 때, (백그라운드의 바닥에 닿을 때)
안의 내용은 위의 if문과 같다.

마지막으로 귀신이 떨어지는 함수를 setInterval 안에 돌리면 완성!
