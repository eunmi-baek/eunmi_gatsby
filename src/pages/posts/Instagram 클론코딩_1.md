---
title: Instagram 클론 코딩_1
date: '2020년 02월 07일'
categories:
  - Javascript
tags:
  - Javascript
---

인스타그램 로그인, 메인 페이지 클론 코딩을 했다.

<!--more-->

## 순서

1. HTML 작성
2. CSS 스타일
3. Javascript 코딩

---

<br />

- 로그인 기능 <br />

![login.png](https://images.velog.io/post-images/eunmi/2a5039d0-4955-11ea-b564-7f576e64beb6/login.png)

<br />

- 로그인에서 아이디, 비밀번호가 1자 이상 입력될 경우,<br />
  로그인 버튼의 opacity가 1로 되게 구현했다.

![스크린샷 2020-02-07 오전 11.59.13.png](https://images.velog.io/post-images/eunmi/d3f4b920-4955-11ea-b564-7f576e64beb6/-2020-02-07-11.59.13.png)

<br />

이 기능을 구현하기 위해선 addEventListener, 지정한 이벤트가 대상에 전달될 때마다 호출할 함수가 필요하다.

그리고 적용되어야 할 함수의 parameter에 event를 넣어야 하는데, 여기서 event 어떤 사건을 의미한다. 예를 들어 해당 버튼을 클릭을 했을 '때', 스크롤을 했을 '때'를 의미한다.

내가 헤맸던 부분은 DOM으로 클래스를 가져오는 부분에서 였는데, 클래스 요소를 가져오는 방법은 querySelector나, getElementsByClassName가 있다.
나는 getElementsByClassName를 사용했는데, 끝에 index값인 [0]을 붙이지 않아서 계속 오류가 났다.
getElements를 보면 알 수 있듯이 엘리먼트들, 복수이다. getElementsByClassName만 기재해주면 그 많은 클래스 중 무엇인지 인지를 못하기 때문에 그 중 첫번째, 0번에 해당하는 [0]을 기재해주어야 한다.

그리고 저 아이디의 문자, 즉 값을 알아야 하기 때문에 value도 붙여주어 저 value의 길이가 1이 이상 일 때 opacity가 1로 변하게 만들면 된다!

나는 Javascript에서 style.opacity = 1 이렇게 값을 바꾸어 주었는데, 이 방법보단 css에서 class를 미리 정의해서 class를 다르게 부여하는 방법이 더 좋다고 한다. 왜냐하면 DOM에 접근해서 style을 매번 바꾸는 것보다는 미리 정의한 css를 사용하는 것이 더 비용이 적게 들기 때문이다.
