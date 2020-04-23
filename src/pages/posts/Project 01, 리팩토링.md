---
title: Project 01, 리팩토링
date: '2020년 03월 12일'
categories:
  - React
tags:
  - Project
  - React
---

1. commit message

회사에 채용할 때 커밋메세지를 볼 수 있고 과거에 수정한 부분을 커밋메세지로 검색하기 때문
커밋메세지에서 설명 추가하기, 제목은 간결하고 명확하게

2. 폴더구조

pages에는 라우트에서 바로 접근할 수 있는 파일들만
component는 최소 2번 이상 쓰이는 것들을 나누기
layout이 있다면 component밑으로 그리고 layout에서만 쓰이는 header와 footer는 layout밑으로

3. 파일 이름

LDProduct 파일의 세부 컴포넌트 이름은 LD빼고 이름 넣기

4. 연산자

불필요한 삼항연산자 쓰지않기 -> 앤드연산자로
￼￼

5. render

render가 너무 길면 안됨 왜냐하면 바뀔때마다 계속 호출되기때문에 불필요한 부분도 render될 수 있음
가능하면 컴포넌트 또는 함수로 빼서 렌더 위로 옮기기 !

6. 클래스 밖에 변수 선언

절대 변하지 않는 변수의 경우에는 class 밖에 써서 불필요한 render를 줄여야함

7. 타입 체크하기

onClose를 받는 onClick에 값(함수일 떄) 이 있을 때 onClick이 실행한다는 의미! 하지만 저렇게 쓰면 onClose에 스트링이 들어와도 값이 있다고 생각해서 onClick이 실행되고 그럼 onClick is not a function이라는 오류가 뜸
그래서 타입을 체크해줘야함  
￼

8. 자식이 부모한테 값을 전달할 때 ex)필터에서 view-more

자식 컴포넌트 안에서 this.props.onClick의 인자로 특정 숫자를 부여 => this.props.onClick(1)
중괄호는 없어도 됨
자식이 부모한테 함수를 전달할 때, 함수자체를 전달?
￼
