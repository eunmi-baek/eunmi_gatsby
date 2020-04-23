---
title: create-react-app 설치
date: '2020년 02월 18일'
categories:
  - React
tags:
  - React
---

npm은 node.js로 만들어진 프로그램을 쉽게 설치해주는 일종의 앱스토어,
npm을 설치할 때는 node.js라는 프로그램을 컴퓨터에 다운 받으면 된다.

공식적으로는 npx을 이용하는데
npm을 사용하는 방법 먼저 설명하자면,

```
npm install -g create-react-app
```

npm에게 create-react-app을 설치해줘라고 부탁하는 것!
create-react-app이라는 하나의 명령을 실행해서 react web app을 set up할 수 있게 해준다.

![](https://images.velog.io/images/eunmi/post/3d9775e2-e443-4c3a-92f2-77bfb98fc6b9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-18%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.44.58.png)

이런 에러가 난다면,

```
sudo npm install -g create-react-app
```

앞에 sudo를 붙여주고 다시 설치해보자.

공식문서에서는 npx create-react-app으로 설치하는데
둘의 차이는,

npm이 그 프로그램을 설치하는 프로그램이라면,
npx는 이 create-react-app이라는 프로그램을 임시로 설치해서 딱 한 번 설치해서 지우는 프로그램이다.
장점은 컴퓨터 공간을 낭비하지 않고, 실행할 때마다 다운을 새로 받기 때문에 항상 최신상태이다.

그 다음, 데스크탑에 새로운 폴더를 만든다.
폴더의 이름은 react-app으로 한다.
이 디렉토리에 세팅을 하는 방법은!
생성한 디렉토리 안으로 들어가서 명령을 실행해야 그 디렉토리가 creaste-react-app에 의해서 개발환경이 된다.
cd하고 내가 만든 디렉토리를 iterm에 옮겨주면 경로가 쓰여진다.
그 다음은

```
create-react-app .
```

.은 현재 디렉토리를 말한다.
그럼 해당 디렉토리안에 create-react-app이 설치된 걸 볼 수 있다.

npx는

documents에 들어가서 앱을 생성한다고 하면

```
cd Documents
```

이렇게 내 documents에 들어가고,

```
npx create-react-app my-app
```

my-app이라는 폴더 안에 create-react-app을 설치해준다!

생활코딩이랑 노마드코더 영상을 봤는데 npx가 더 간단하게 느껴진다.

react를 실행시키려면
그리고 vscode로 들어가서 터미널을 키고(cmd + j)

```
npm run start
```

이렇게 하면 브라우저가 저절로 뜬다.

![](https://images.velog.io/images/eunmi/post/41a72cbf-b5c5-4861-b772-d856321cdafc/image.png)

브라우저가 가장 최소한의 앱을 미리 구현해서 보여주고,
터미널에서는 2개의 주소를 알려준다.
해당 주소에 접속해서 개발 중인 앱을 확인 할 수있다.

끄고 싶을 땐 ctrl + C를 눌러주면 된다.
