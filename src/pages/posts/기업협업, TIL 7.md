---
title: 기업협업, TIL 7
date: '2020년 04월 04일'
categories:
  - Vue
tags:
  - Vue
---

## 라이프사이클

Vue.js의 라이프 사이클은 크게 Creation, Mounting, Updating, Destruction 으로 나눌 수 있다.
Vue 인스턴스는 생성(create) 되고, DOM에 부착(mount) 되고, 업데이트(update) 되며, 없어지는(destroy) 과정을 거치게 된다.

![](https://miro.medium.com/max/1400/1*tnSXRrpLBYmfHnIagITlcg.png)

```js
var app = new Vue({
  el: '#app',
  beforeCreate() {
    console.log('인스턴스 초기화 후, 데이터 관찰/이벤트/감시자 설정 전 호출됩니다.');
  },
  created() {
    //$el 속성을 사용할 수 없습니다.
    console.log('인스턴스가 작성된 후 동기적으로 호출됩니다.');
  },
  beforeMount() {
    console.log('마운트되기 바로 직전 전 호출됩니다.');
  },
  mounted() {
    //$el 속성을 사용할 수 있습니다.
    console.log('마운트 된 직후 호출됩니다.');
  },
  beforeUpdate() {
    console.log('데이터가 변경되기 전 호출됩니다.');
  },
  updated() {
    console.log('데이터가 변경된 후 호출됩니다.');
  },
  data: {
    message: '안녕하세요 Vue!',
    className: 'vue-class',
  },
  methods: {
    change() {
      this.message = '안녕히 가세요 Vue!';
    },
  },
});
```

### Creation : 컴포넌트 초기화 단계

- BeforeCreate : 가장 먼저 실행, 인스턴스의 data, event 객체 접근 할 수 없다.
- Created : data, event 객체가 준비 완료된 상태, 처리 가능하다.

### Mounting : DOM 작성 단계

- BeforeMount : 템플릿 및 코드들이 렌더링 되기 직전에 호출된다. 거의 사용하지 않는다.
- Mounted : 컴포넌트, 템플릿, DOM이 모두 준비된 상태, 이 상태에서 fetch 통신 처리가 가능하다.

### Updating : 상태 변화로 인한 렌더링 단계

- BeforeUpdate : 컴포넌트 상태 변화가 일어나면 다시 DOM이 렌더링 되는데 그 직전에 호출된다.
- Updated : 상태 변화 후 렌더링이 완료 후 실행, 여기서 상태 값이 변경되면 무한루프에....

### Destruction : 소멸 단계

- BeforeDestory : 인스텐스 제거 직전에 호출.
- Destory : 인스텐스 제거 완료 후 호출, 연관된 리스너, 지시어 등이 해제 된다.

출처

- https://niceman.tistory.com/83
- https://blog.martinwork.co.kr/vuejs/2018/02/05/vue-lifecycle-hooks.html
