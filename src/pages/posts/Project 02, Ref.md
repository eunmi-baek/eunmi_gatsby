---
title: Project 02, Ref / scrollIntoView
date: '2020년 03월 15일'
categories:
  - React
tags:
  - React

banner: /images/lahanbanner.png
---

![](https://images.velog.io/images/eunmi/post/af845022-a041-4b34-b5dd-0292afbfd7b9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.17.07.png)

메인페이지에 있는 Nav를 클릭하면, 해당 컴포넌트로 이동할 수 있게 구현을 해야되는 상황!<br />
부모 컴포넌트에 있는 div가 아닌 저 home, our hotels 등등을 자식 컴포넌트로 만들어 놓은 상황이라서 scrollIntoView를 적용해도 잘 먹지 않아서 어떻게 해야할 지 고민이 됐었다.
그래서 Ref, scrollIntoView를 둘 다 적용하게 되었다.

### Ref 란?

render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공한다.

### Ref를 사용해야 할 때

- 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
- 애니메이션을 직접적으로 실행시킬 때.
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

추가적으로 다음과 같은 경우에도 쓸 수 있다.

- 자식의 State에 부모가 접근할 때.
- State로 제어하지 않는 비제어 컴포넌트를 사용할 때.

```js

<section ref={ref => (this.section0 = ref)}>
  <Mainvisual />
</section>
<section ref={ref => (this.section1 = ref)}>
  <Ourhotels />
</section>
<section ref={ref => (this.section2 = ref)}>
  <Offers />
</section>
<section ref={ref => (this.section3 = ref)}>
  <Instagram />
</section>
<section ref={ref => (this.section4 = ref)}>
  <Footer />
</section>

```

<br />
컴포넌트에 직접적으로 접근할 때 에러가 나서, 컴포넌트를 section이란 엘리먼트에 감싸서 만들었다. <br /> 그리고 section에다가 ref 함수 콜백함수로 전달하여 실행시켰다.
<br /><br />

```js
<SubnavCtn>
  {SubnavData.map((el, i) => (
    <li
      key={i}
      onClick={() => {
        this.handleClick(i);
      }}
    >
      {el.title}
    </li>
  ))}
</SubnavCtn>
```

<br />
Nav는 mockdata를 만들어서 map 함수를 이용해 구현했다.
map을 돌릴 때 생성된 index를 전달되는 인자에 넣어줬다. <br />
handleClick은 밑의 내용내로 정의했다!
<br /><br />

```js
handleClick = (id) => {
  id === 0 && this.section0.scrollIntoView({ block: 'start', behavior: 'smooth' });
  id === 1 && this.section1.scrollIntoView({ block: 'start', behavior: 'smooth' });
  id === 2 && this.section2.scrollIntoView({ block: 'start', behavior: 'smooth' });
  id === 3 && this.section3.scrollIntoView({ block: 'start', behavior: 'smooth' });
  id === 4 && this.section4.scrollIntoView({ block: 'start', behavior: 'smooth' });
};
```

<br />
매개변수를 id로 지정해주고, id가 i이면 section[i]에 scroll evnet가 발생할 수 있도록 각각 설정해줬다.
좀 더 깔끔하게 설정할 수 있을텐데ㅠ 아쉽다.. 더 열심히 공부해야겠다.
<br /><br />

### scrollIntoView 란?

scrollIntoView()가 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤 한다.

- behavior : 전환 에니메이션을 정의한다.
  "auto", "smooth"중 하나를 선택. 기본값은 "auto".
- block : 수직 정렬을 정의한다.
  "start", "center", "end", "nearest"중 하나 선택. 기본값은 "start".
- inline : 수평 정렬을 정한다.
  "start", "center", "end", "nearest"중 하나 선택. 기본값은 "nearest".

<br />
참조

- https://ko.reactjs.org/docs/refs-and-the-dom.html
- https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
