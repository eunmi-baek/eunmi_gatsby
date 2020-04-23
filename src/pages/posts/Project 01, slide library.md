---
title: Project 01, slide library
date: '2020년 03월 03일'
categories:
  - React
tags:
  - Project
  - React
---

![](https://images.velog.io/images/eunmi/post/65e34ac5-1eeb-4408-89a7-c8a40dbebc8d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.22.44.png)
![](https://images.velog.io/images/eunmi/post/59007ac4-603e-4476-b1b7-1f419329ca0f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.23.39.png)
![](https://images.velog.io/images/eunmi/post/7c9c2624-6bf2-43fb-8a86-a11d248c9d47/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.23.12.png)

위의 3가지 사진은, 모두 슬라이더로 구현해야 되는 것을 볼 수 있다.
화살표 이미지가 같은 위의 두 사진은 슬릭을 사용했고,<br />
(사이트 정보 : https://react-slick.neostack.com/docs/get-started )<br />
맨 밑의 슬라이더는 깃헙에서 찾은,, slideshow 라이브러리를 사용했다.<br />
(사이트 정보 : https://react-slideshow.herokuapp.com/ )

라이브러리는 정말 적용하기 쉽고, 사진이 아주 부드럽게 움직이는 장점이 있지만,<br />
css가 이미 정해져 있기 때문에, 수정을 할 때 굉장히 불편했다. <br />내가 모르는 div가 몇 개가 있었는지..! 정말 수많은 div와 classname을 뒤적여 수정을 했다.

slick 홈페이지를 보면

```js
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
```

<br />
class 선언 후에 const setting 값이 설정된 것을 볼 수 있다.
절대 변하지 않는 변수의 경우에는 class 밖에 써서 불필요한 render를 줄여야 하기 때문에 나는 class 위로 옮겨주었다.
그리고 화살표는 https://react-slick.neostack.com/docs/example/custom-arrows 를 참고했다.
살짝 달랐던 점은 내가 쓰는 화살표는 계속 재활용이 되어서, 컴포넌트 파일에 따로 만들었다.

<br />

```js
import React, { Component } from 'react';
import './ArrowNext.scss';

class ArrowNext extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="arrow_next" onClick={onClick}>
        <img src="data:image" alt="arrow next" />
      </div>
    );
  }
}

export default ArrowNext;
```

<br />

![](https://images.velog.io/images/eunmi/post/aa154d5e-2dd7-48c8-8b2f-21fd9aa9ecd5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.57.05.png)![](https://images.velog.io/images/eunmi/post/0e4773f8-512e-4d4e-bc08-3679f463109d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.57.30.png)

<br />
그리고, 이미지의 크기가 각각 다른데 화살표를 중간에 위치 시키게 하려면

<br />

```scss
position: absolute;
top: 50%;
-webkit-transform: translateY(-50%);
transform: translateY(-50%);
```

<br />

이렇게 작성해주면 된다.

슬릭은 div 사이에 마진을 저절로 주기 때문에, 오른쪽 화살표 직전에 있는 div는 마진이 없어야 하는데 마진이 생겨 어떻게 수정해야 할지 이 코드 저 코드 다 쳐본 것 같다.<br />
div에 또 부모 div를 만들어 마진을 주니 간격이 균등하게 생겼고, 보기에 훨씬 안정감이 있었다.
