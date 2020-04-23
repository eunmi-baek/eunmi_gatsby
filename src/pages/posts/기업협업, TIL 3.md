---
title: 기업협업, TIL 3
date: '2020년 03월 28일'
categories:
  - Vue
tags:
  - Vue
---

공지사항 페이지에선,
![](https://images.velog.io/images/eunmi/post/34df40e3-5ec6-4267-9693-09523a838f07/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.31.46.png)
4가지 selector가 있어, 누를 때마다 해당 콘텐츠가 나올 수 있게 fetch해야 한다.

또 해당 콘텐츠의 내용에선 pagination이 존재한다.
![](https://images.velog.io/images/eunmi/post/be48ed10-e1a7-4285-8be1-1b8678712e11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.32.11.png)

pagination은 라이브러리를 사용했고, 처음에 썼던 라이브러리는 커스텀 하기가 좀 어려워서
간단한 걸로 바꿨다. (https://github.com/lokyoung/vuejs-paginate#readme)

```
$ npm install vuejs-paginate --save
```

사이트에 나와있는대로 적용만 하면 끝이다.

```
<template>
  <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
</template>

<script>
export default {
  methods: {
    clickCallback (pageNum) => {
      console.log(pageNum)
    }
  }
}
</script>

<style lang="css">
.pagination {
}
.page-item {
}
</style>
```

style 적용 할 때, color, text-decoration은 다 적용이 되는데
font-weight만 안 된다. <br /> 왜 그럴까..?🤔
다음엔 pagination을 직접 만들어보는 포스팅을 올려야겠다 꼭!
