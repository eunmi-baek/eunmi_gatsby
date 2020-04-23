---
title: Project 01, 검색 기능
date: '2020년 03월 14일'
categories:
  - React
tags:
  - Project
  - React
---

![](https://images.velog.io/images/eunmi/post/b30ebb91-bf83-4b96-81b5-f19b1d7e3199/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.15.08.png)

검색창에 글자를 입력하면 관련 검색어가 쫙 나오게 구현해보기!
위의 이미지를 보면 장소와 상품에 관련된 검색어가 각각 나오는 것을 알 수 있다.

```js
constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

render() {
    return (
      <input
      type="search"
      placeholder="여행지나 상품을 검색해보세요!"
      value={this.state.keyword}
      onChange={this.handleChange}
    )
}
/>
```

글을 입력할 때마다 입력한 값을 다 받아와야 하니까 위의 내용대로 input값을 설정해주었다.

관련 검색어 창은 filter와 map을 통해 구현했는데,
filter 함수는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```js
searchPlace = () => {
  let resultPlace = this.state.search_place.filter((keywords) =>
    keywords.includes(this.state.keyword),
  );
  console.log(resultPlace);
  let resultPlaceMap = resultPlace.map((keyword, i) => {
    return (
      <>
        <li key={i} className="place_font" onClick={() => this.keywordClick(keyword)}>
          <img src="data:image" alt="location" />
          {keyword}
        </li>
      </>
    );
  });
  return resultPlaceMap;
};
```

관련 검색어 창에서 장소 검색어에 해당되는 부분이다.
search_place는 mock data에서 장소부분에 해당 되는 검색어들을 fetch해서 데이터에 담아 가져온 것이고, input에 입력을 할 때(this.state.keyword) 포함되는 검색어들을(keywords.includes) 모아 새로운 배열로 반환한다.
그리고 그 새로운 배열을 map을 이용해 li로 나열하였다.

유동라우터를 이용한다면, mock data가

```js
{
  "search_data": [
    {
      "place": [
        {
          "name": "바르셀로나, 스페인",
          "eng_name": "barcelona",
          "id": 25
        }
      ],
      "product": [
        {
          "name": "바르셀로나",
          "eng_name": "barcelona",
          "option": "야경",
          "id": 356
        }
      ]
    }
  ]
}

```

이런 식으로 전보단 조금 복잡해질거라 생각했다.
그래서 this.state.search_place[0].place 이런 식으로 map이나 filter를 어떻게 써야하는지 고민을 하기도 했다. 이럴 땐 console을 많이 찍어봐야 답이 나오는 것 같다!
