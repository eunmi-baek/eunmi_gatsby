---
title: Project 01, mock data
date: '2020년 03월 08일'
categories:
  - React
tags:
  - Project
  - React
---

![](https://images.velog.io/images/eunmi/post/0840e984-761d-488d-9de9-41dc4d682b2f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.10.57.png)

이미지에 있는 내용을 mock data로 만들고, fetch 하여 실행시켜 보려고 한다.
mock data는 가짜 데이터로, api가 준비가 안 된 경우 데이터가 계획대로 잘 나오는지 확인하기 위해 사용된다.

mock data를 사용하는 두 가지 방법

- js 파일에 데이터를 담아 import해서 사용한다.
- json 파일에 데이터를 담아 fetch 함수를 사용해 데이터를 받아온다.

### 1. data.js

- 해당 컴포넌트 바로 옆에 만든다.

```js
const CitiesData = [
  {
    id: 1,
    img: 'https://www',
    name: '바르셀로나',
  },
  {
    id: 2,
    img: 'https://www',
    name: '파리',
  },
  {
    id: 3,
    img: 'https://www',
    name: '서울',
  },
];

export default Data;
```

- App.js

```js
import React from 'react';
import { CitiesData } from './data';
```

사용하려는 컴포넌트에서 중괄호 안에 데이터 이름을 입력하여 import 한다.

### 2. data.json

- public -> data 안에 위치한다.

```js
{
  "product": [
    {
      "thumnail": "https://www",
      "product_type": "티켓/교통패스",
      "city_name": "강원도",
      "product_name": "[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권",
      "grade": 4.71818181818182,
      "origin_price": 4000,
      "price": 26000,
      "id": 1
    },
    {
      "thumnail": "https://www",
      "product_type": "티켓/교통패스",
      "city_name": "강원도",
      "product_name": "[펭수 그립톡 한정판] 비발디파크 스키 리프트권 + 장비렌탈 PKG 이용권",
      "grade": 3,
      "origin_price": 92000,
      "price": 38500,
      "id": 2
    },
    {
      "thumnail": "https://www",
      "product_type": "가이드 투어",
      "city_name": "로마",
      "product_name": "[마리트 ONLY] 심우리+강덕원 가이드의 이탈리아 집중팩 7박9일",
      "grade": 4.1,
      "origin_price": 4190000,
      "price": 3590000,
      "id": 3
    },
  ]
}
```

해당 mock data를 main.js에서 fetch로 데이터를 받아온다.

```js
componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        console.log("firstly: ", res.product);
        this.setState({
          product: res.product
        });
      });
  };

  render() {
    return (
     <Layout>
        <div className="product_container">
          <h2>최근 본 상품</h2>
          <div className="product">
          {this.state.product.map((product, i) => {
          return <Product data={product} key={i}></Product>;
            })}
          </div>
        </div>
     </Layout>

```

받아온 데이터로 map을 돌렸는데, 밑의 이미지가 product 컴포넌트이다.

![](https://images.velog.io/images/eunmi/post/22c33e89-ec3b-4ff1-8bbf-82b92e1e672c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.54.04.png)

- product.js

```js
<div className="product_img">
   <img src={this.props.data.thumnail} alt="productimg" />
</div>
<div className="category">
   <span>{this.props.data.product_type}</span>
   <span> ・ </span>
   <span>{this.props.data.city_name}</span>
</div>
<h3 className="product_title">{this.props.data.product_name}</h3>
```

data.json에 있는 변수명과 똑같이 설정해줘야 데이터가 들어온다. main.js에서 써있는 data는 자식 컴포넌트인 product.js에 있는 data를 불러오기 위해 사용되었다.
