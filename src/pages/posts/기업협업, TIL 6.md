---
title: 기업협업, TIL 6
date: '2020년 03월 30일'
categories:
  - Vue
tags:
  - Vue
---

저번 포스팅에선 해야 할 일 2번까지 완료했다.
이제 남은 건..!

3. 분류추가를 누르면, 내용을 입력할 수 있는 모달창이 떠야한다.
4. 모달창에 내용을 입력하고 확인을 누르면, 비활성화란에 해당 내용의 카드가 생긴다.
5. 저장버튼을 누르면 이동, 추가, 삭제된 기록이 한꺼번에 저장된다.

분류추가를 누르면 생기는 모달창은 자식 컴포넌트로 분리해서 만들었다. <br />
부모에 같이 만들기엔 코드가 너무 길어져 가독성이 떨어진다.

- 자식 컴포넌트

```js
<template>
  <div class="newTitle">
    <div class="cover-bg" v-if="modalPlug">
      <div class="bg-white">
        <div class="text-wrapper">
          <h3>분류추가</h3>
          <textarea type="text" placeholder=
          "추가하고 싶은 분류를 입력해주세요." v-model="newTitle" />
          <div class="button-wrapper">
            <button class="left-btn" @click="closeModal">닫기</button>
            <button class="right-btn" @click="goToAdd">확인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newTitle",
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      modalPlug: this.visible,
      newTitle: ""
    };
  },
  watch: {
    visible(val) {
      this.modalPlug = val;
    }
  },
  methods: {
    closeModal() {
      this.modalPlug = false;
      this.$emit("change", false);
    },
    async goToAdd(e) {
      this.closeModal();
      this.$emit("inputValue", this.newTitle);
      this.newTitle = "";
      e.preventDefault();
    }
  }
};
</script>


```

![](https://t1.daumcdn.net/cfile/tistory/9942C83359F1C13411?download)
<br />

부모에서 자식으로 값을 전달하기 위해선 props를 사용한다. <br />
textarea에 글을 입력하고 확인버튼을 누르면 gotoAdd 함수가 실행된다. <br />
자식에 있는 값을 부모에 전달하기 위해선 event를 발생시켜야 하는데,
이 때 emit event를 사용한다.

```js
this.$emit('inputValue', this.newTitle);
this.$emit(emit event 이름, 파라미터);
```

textarea에서 값을 인지해주는 newTitle이라는 변수를 model로 바인딩 시켰다. <br />
확인 버튼을 누르면 newTitle에 담긴 내용이 inputValue로 호출된다. <br />
inputValue는 부모에 정의해줬다. <br />

- 부모 컴포넌트

```js
<div>
  <button @click="visible = true" class="add btn-style">
    분류 추가
  </button>
  <saveModal
    v-bind:visible="visible"
    @change="changeModal"
    @inputValue="goToAdd"
  />
</div>

<script>
import saveModal from "./saveModal";

export default {
  components: {
    saveModal
  },
  methods: {
    changeModal(val) {
        this.visible = val;
    }
  }
}
</script>

```

모달을 띄우고 닫게 하는 것도, 부모에서 visible을 props로 전달하여 속성을 컨트롤할 수 있게 설정해줬다.
