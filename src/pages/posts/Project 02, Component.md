---
title: Project 02, Component
date: '2020년 03월 19일'
categories:
  - React
tags:
  - React
---

![](https://images.velog.io/images/eunmi/post/aa3f3213-a7bc-4784-8387-b3c17996af81/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-23%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.22.05.png)

Mypage에서는 질문 내역부터 비밀번호 변경까지 list가 있고,
해당 컨텐츠들은 각각 자식 컴포넌트로 분리했다.

```js
this.state = {
  stage: 1,
};

const obj = {
  1: <QnaList />,
  2: <ReserveList />,
  3: <PointBox />,
  4: <PrivacyEdit user={this.props.userData && this.props.userData} myPage={this.props.myPage} />,
  5: <ChangePassword />,
};
```

stage의 기본 값은 1로 설정을 했다.
key 값은 stage 값을 나타내고, value 값은 각각 자식 컴포넌트로 정의했다.

</br>

```js
changeStage = (num) => {
  this.setState({
    stage: num,
  });
};

render() {
    return (
      <RightAreaContainer>
        <MypageTab>
          <MypageList>
            <li
              onClick={() => this.changeStage(1)}
            >
              질문 내역
            </li>
            <li
              onClick={() => this.changeStage(2)}
            >
              예약 조회
            </li>
            <li
              onClick={() => this.changeStage(3)}
            >
              포인트 내역
            </li>
            <li
              onClick={() => this.changeStage(4)}
            >
              개인 정보 수정
            </li>
            <li
              onClick={() => this.changeStage(5)}
            >
              비밀번호 변경
            </li>
          </MypageList>
        </MypageTab>
        <MyPageBody>{obj[this.state.stage]}</MyPageBody>
      </RightAreaContainer>
    );
  }
}

```

리스트는 필요성을 느끼지 못해 mockdata로 가져오지 않고 바로 적어줬는데, 그래서 그런지 코드가 좀 지저분해 보이는 것 같다..😥
list에 click 이벤트를 줘서 1번 일 때, 2번 일 때 stage 값이 바뀔 수 있도록 호출해줬다.

```js
<MyPageBody>{obj[this.state.stage]}</MyPageBody>
```

MyPageBody안에 stage값에 맞는 컴포넌트들이 보여질 수 있도록 적어줬다.

</br>
