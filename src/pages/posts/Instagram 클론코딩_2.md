---
title: Instagram 클론 코딩_2
date: '2020년 02월 08일'
categories:
  - Javascript
tags:
  - Javascript
---

인스타그램 클론 코딩\_1에선 로그인 페이지에 대해서 글을 썼다.
메인페이지도 마찬가지로 html, css, javascript로 순서는 같다.

메인페이지는 인스타그램 실제 페이지에서 크기를 가져왔다. <br /><br />

![스크린샷 2020-02-07 오후 1.59.35.png](https://images.velog.io/post-images/eunmi/b3f8f2b0-4966-11ea-afdf-150ac0b4d37e/-2020-02-07-1.59.35.png)

<br />
메인 페이지 만들면서 flex를 처음 써봤는데 정말 유용했다. flex를 생각하고 html 구조를 짜는 것도 중요할 것 같다! 
<br /><br />

```html
<div id="a">
  <div class="b"></div>
  <div class="b"></div>
  <div class="b"></div>
</div>
```

```css
#a {
  display: flex;
  justify-content: space-between;
}
```

<br />

이런 식으로 부모에 flex를 적용시켜 주면, class b에 해당하는 div가 instagram 헤더에 보이는 것처럼 div를 양쪽 끝으로 붙이고 나머지 아이템을 일정한 간격으로 정렬한다.

flex를 더 알고 싶으면 https://flexboxfroggy.com/#ko 👈🏻 <br />
flex를 재밌게 공부할 수 있다!

댓글 달기에 글을 입력하고, 게시를 클릭하면 댓글이 생성되게 하는 함수도 역시 addEventListener가 필요하다.

투명도가 올라가는 함수, 엔터키 누르면 발생하는 함수, 게시 버튼을 클릭하면 발생하는 함수 등 함수가 여러개 있으니 어느 공간에 호출해야 할 지, 요소는 무엇으로 잡을 지가 헷갈렸다.

엔터키를 누를 때 이벤트를 발생하게 하고 싶은데, 나는 엔터키는 게시버튼을 말하는 거겠지~ 싶어서 게시 버튼에 이벤트를 줬었다. 근데 keydown 하는 부분은 댓글 다는 input 엘리먼트니까 keydown하는 그 위치를 요소로 지정해야 했다.
주가 되는 이벤트를 요소로 해야된다!

댓글이 달릴 때는 DOM에 접근하여

1. div를 만들고 (createElement)
2. 미리 만들어둔 class를 추가한다. (className)
3. 내용이 있다면 내용도 추가해준다. (innerHTML)
4. 추가하고 싶은 엘리먼트 뒤에 추가해준다. (appendChild)

댓글은 달리는데 댓글 내용이 지워지지 않고 그대로 남아 있을 때는 비어있는 value도 지정해줘야 한다.
