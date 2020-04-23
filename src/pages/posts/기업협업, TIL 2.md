---
title: 기업협업, TIL 2
date: '2020년 03월 25일'
categories:
  - Vue
tags:
  - Vue
---

지금 도너츠에서는 유디션이라는 사이트를 vue로 바꾸는 작업을 하고 있다.
그 중 우리가 해야될 작업은 사용자와 backoffice에서의 공지사항/이용약관이다.

기획자분이 프론트엔드 4명이 온다고 엄청나게 많은 기획을 하셨다고 들었는데...
해야될 페이지가 점점 많아질 것 같은 느낌..? 신난다🥺

나는 사용자단 공지사항과 backoffice 약관 분류 관리를 하게 됐다.
두 명씩 사용자단/backoffice로 일을 배분했지만 시간이 좀 남아서 backoffice의 약관 분류도 추가로 가져왔다.
같은 팀끼리는 서로 어떻게 코딩 했는지 대화를 나누어 상대방의 페이지도 다 파악할 수 있도록 노력했다.

본격적인 코딩을 시작하기 전에, 초기세팅을 해야하는데
vue를 사용하여 대규모 애플리케이션을 구축할 때 NPM를 이용한 설치를 권장하고 있다.

1. vue install

```
$ npm install vue
```

<br />

2. vue router install

```
$ npm install vue-router
```

<br />

- 모듈 시스템에서 사용하면 Vue.use()를 통해 명시적으로 라우터를 추가해야한다.

```vue
import Vue from 'vue' import VueRouter from 'vue-router' Vue.use(VueRouter)
```

<br />

3. vue axios install

```
$ npm install --save axios
```

<br />

폴더구조는

- src - api - assets - components - router - views

이런 식으로 구성했다.

css는 sass를 사용하기로 했다.

```
$ npm install sass-loader node-sass --save-dev
```

```sass
<style lang="sass">
  /* sass로 작성하세요 */
</style>
```

다운은 제대로 됐지만 문제가 있다.
global sass를 적용하고 싶은데, vue.config.js 폴더가 보이지 않는다.
다운 받으라고 한 건 다 설치한 것 같은데..아직 뭐가 오류인지 모르겠어서 찾고있다.
그래서 일단 App.vue의 style에서 적용시켰다.

```sass
<style lang="scss">
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-family: SpoqaHanSans;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
}
</style>
```
