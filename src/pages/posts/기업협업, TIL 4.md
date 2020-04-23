---
title: 기업협업, TIL 4
date: '2020년 03월 29일'
categories:
  - Vue
tags:
  - Vue
---

한 주 중 가장 많은 시간을 할애했던 axios!
axios는 Promise 기반의 자바스크립트 비동기 처리방식을 사용한다.

- 설치 방법

```
$ npm install --save axios
```

- axios는 여러가지 별칭 method를 제공하고 있다. - 불러오기 : axios.get(url[, config]) - 입력하기 : axios.post(url[, data[, config]]) - 수정하기 : axios.patch(url[, data[, config]]) - 삭제하기 : axios.delete(url[, config])

지금은 post만 사용하고 있는데,
먼저 초기세팅 때 만들었던 api 폴더 안의 index.js에 정의해준다.

- api -> index.js

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://111.11:8080',
});

export const listPage = {
  list() {
    return instance.post('나머지 주소', {});
  },
};
```

내가 적용해야 하는 파일에도 정의해준다.

- views -> listCnt.vue

```javascript
import { listPage } from "../api/index";

async fetchData() {
      window.scrollTo(0, 0);
      // listpage는 api -> index.js에서 받아온 변수고, list는 해당 변수 안에 있던 함수.
      const res = await listPage.list();
      // 초기값으로 설정한 items에 res.data.object를 담아준다.
      this.items = await res.data.result;
    }
```

- async & await 는 Promise와 Callback에서 주는 단점들을 해결하고 자바스크립트의 비동기적 사고 방식에서 벗어나 동기적으로 코드를 작성할 수 있게 도와준다.
- async 함수는 함수의 앞에 async를 붙여주고 함수의 내부 로직 중 비동기 처리 로직 앞에 await를 붙여주면 된다. 좀 더 정확하게 말하면 Promise 객체를 반환하는 API 호출 함수 앞에 await를 붙인다.

api를 formdata 형식으로 보내줄 경우에는 적용해야 하는 파일에
formdata의 key와 value값을 추가해줘야한다.

- api -> index.js

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://111.11:8080',
});

export const listPage = {
  list(formData) {
    return instance.post('나머지 주소', formData);
  },
};
```

- views -> listCnt.vue

```javascript
  async fetchData() {
      let formData = new FormData();
      formData.append(key, value);
      const res = await listPage.list(formData);
      this.items = res.data.result;
    }
```
