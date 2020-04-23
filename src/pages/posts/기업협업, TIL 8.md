---
title: 기업협업, TIL 8
date: '2020년 04월 09일'
categories:
  - Vue
tags:
  - Vue
---

약관 관리 페이지 마지막 포스팅!
모달창을 만드는 것까지 끝내고 남은 건

5. 저장버튼을 누르면 이동, 추가, 삭제된 기록이 한꺼번에 저장된다.

![](https://images.velog.io/images/eunmi/post/9ad53b6e-6886-4b2d-810a-34db1a110d0a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.38.00.png)

백엔드에 데이터를 보내줄 때 key값이 status, value에서 추가는 0, 삭제는 1, 수정은 2로 보내줘야 했다. <br/>
근데 데이터를 받아올 땐, 해당 key 값이 존재하지 않아서 어떻게 해야할 지 고민이 많았다. <br/>
그래서 백엔드분께 status 기본 값을 지정해서 (-1 이나 3..?) 보내달라고 부탁드렸다.

```js
  async goToSave(val) {
    //list1
    for (let i = 0; i < this.list1.length; i++) {
      this.list1[i].isDelete = 0;
      this.list1[i].sortNo = i + 1;
      if (this.list1[i].status == -1) {
        this.list1[i].status = 1;
      }
    }
    await this.fetchSave(val, this.list1);
    //list2
    for (let i = 0; i < this.list2.length; i++) {
      this.list2[i].isDelete = 1;
      this.list2[i].sortNo = this.list1.length + i + 1;
      if (this.list2[i].status == -1) {
        this.list2[i].status = 1;
      }
    }
    await this.fetchSave(val, this.list2);
    window.location.reload();
    alert("저장 완료");
    this.visible_save = val;
  },
  async fetchSave(val, arr) {
    for (let i = 0; i < arr.length; i++) {
      var formData = new FormData();
      formData.set("categoryNo", arr[i].categoryNo);
      formData.set("status", arr[i].status);
      formData.set("categoryName", arr[i].categoryName);
      formData.set("isDelete", arr[i].isDelete);
      formData.set("sortNo", arr[i].sortNo);
      const res = await classifyUpdate.list(formData);
    }
  }
```

처음엔 수정, 삭제, 추가 된 것만 새로운 배열에 담아서 보내려고 해서 modify 라는 배열을 만들었는데 순서를 바꿀 때마다 변경되는 인덱스 값을 담아야 하는 게 안 될뿐더러 너무 복잡하고 코드만 길어졌다. <br/>
그래서 사수분께 여쭤보니까 전체 내용을 보내는 게 좋을 것 같다고 하셨다. <br/>

삭제, 추가된 status를 제외한 데이터는 수정(1)으로 보내기로 했다.

```js
if (this.list1[i].status == -1) {
  this.list1[i].status = 1;
}
```
