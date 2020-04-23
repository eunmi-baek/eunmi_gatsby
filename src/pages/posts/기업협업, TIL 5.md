---
title: 기업협업, TIL 5
date: '2020년 03월 29일'
categories:
  - Vue
tags:
  - Vue
---

공지사항 페이지 API를 기다리며... <br/>
약관 분류 페이지 레이아웃을 얼른 끝내려고 한다!

![](https://images.velog.io/images/eunmi/post/9ad53b6e-6886-4b2d-810a-34db1a110d0a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.38.00.png)

내가 해야 할 일은

1. 활성화와 비활성화 카드가 서로 이동될 수 있게 drag and drop 기능을 구현해야 한다.
2. 비활성화에서 엑스 아이콘을 누르면 새로고침 아이콘으로 바뀌게 구현한다.
3. 분류추가를 누르면, 내용을 입력할 수 있는 모달창이 떠야한다.
4. 모달창에 내용을 입력하고 확인을 누르면, 비활성화란에 해당 내용의 카드가 생긴다.
5. 저장버튼을 누르면 이동, 추가, 삭제된 기록이 한꺼번에 저장된다.

사진에서 봐도 레이아웃은 할 게 없고 거의 기능 구현에 중점을 둔 페이지다! <br/>
재밌을 것 같아서 제가 해볼게요! 하고 가져온 것도 있는데 아주 씩씩하게 말한만큼 잘 끝내도록 노력해야겠다.

맨 처음엔 라이브러리를 쓰지 않고, 유튜브나 구글에 검색하여 며칠에 걸쳐 해봤는데 잘 적용이 되지 않아서 결국 라이브러리를 쓰게 됐다...ㅠ <br/>
적용한 라이브러리는 https://github.com/SortableJS/Vue.Draggable 여기서..!

```js
npm i -S vuedraggable

<script>
import draggable from "vuedraggable";
</script>
```

다운로드 받고, script 안에 import 해준다.

```js
<div class="board-container">
  <div class="col-3">
    <h3>활성화된 분류</h3>
    <draggable class="list-group" :list="list1" >
      <div
        class="list-group-item"
        v-for="element in list1"
        :key="element.categoryName"
      >
        {{ element.categoryName }} ({{ element.termsCnt }})
      </div>
    </draggable>
  </div>
  <div class="col-3">
    <h3>비활성화 분류</h3>
    <draggable class="list-group" :list="list2" >
      <div
        class="list-group-item delete"
        v-for="(element, i) in list2"
        :key="element.categoryName"
        :class="{ refresh: element.deleteBoo == true }"
        @click="handle_delete(element, i)"
      >
        {{ element.categoryName }} ({{ element.termsCnt }})
      </div>
    </draggable>
  </div>
</div>

<script>
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  data() {
    return {
      list1: [],
      list2: []
    };
  }
</script>
```

적용은 정말 쉽게 됐지만, draggable 안에 있는 list 같은 경우
함부로 지우면 오류가 난다. <br/> 그래서 라이브러리에 최대한 맞춰(?) 구현을 했다.
data에 있는 list1, list2를 빈 배열로 지정하고 그 안에 내용들을 fetch 하여 push 로 가져 왔다. 그 내용은 다음 포스팅에 더 자세히 쓰겠다.<br/>
draggable 안에 있는 div는 비활성화, 활성화 안에 있는 카드 하나하나를 가져오기 위해
v-for문을 사용 했다.<br/>
비활성화 분류 같은 경우엔 카드 오른쪽에 아이콘이 있는데, 누를 때 아이콘이 바뀌도록 토글형식으로 구현했다.<br/>

클래스를 동적으로 토글하기 위해 v-bind:class 에 객체를 전달할 수 있다.

```js
:class="{ refresh: element.deleteBoo == true }"
```

refresh 클래스의 존재 여부가 deleteBoo 의 속성에 의해 결정된다.
