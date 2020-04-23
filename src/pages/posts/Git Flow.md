---
title: Git Flow
date: '2020년 03월 25일'
categories:
  - git
tags:
  - git
---

적절하고 효율적인 전략의 Git flow. <br/>
Git flow에는 5가지 종류의 브랜치로 나누어진다. <br/>
원래는 master, feature 브랜치를 사용 했는데, 추가된 3개의 브랜치는 유지 보수를 위해 필요한 브랜치들 (feature, release, hotfix) 이다.

![](https://k.kakaocdn.net/dn/9zIJi/btqxhK5q0Pi/IdKFE5wqKCq53qTYulzZxK/img.png)

- develop <br/>
  어떤 기능이 완성이 되어서 배포가 됐는데, 다른 개발자는 기다릴 필요가 없이 기능을 만들 필요가 있는데 그건 다 develop으로 간다. <br/>
  develop은 개발의 기준이 되는 branch. <br/>
  master는 현재 배포되어 있는 코드가 들어간다. <br/>
  왜 굳이 따로 따는 걸까? <br/>
  개발용 브랜치(develop)랑 실제 배포용 브랜치(master)를 나눴는데 그 이유는 <br/>
  master에 배포를 한다,
  그리고 누가 개발하다가 commit을 해버렸다고 가정하면,
  그 내용은 아직 검증이 안 됐기 때문에 기다려야 할까? 그건 안 된다. <br/>
  그런 걸 막기위해서 develop 브랜치를 따로 따는 것. <br/>
  다른 팀들을 개발을 멈추지 않게 하기 위해 develop에 머지 될 수 있도록 한다.

- release <br/>
  master는 실제 배포된 코드가 들어가는 거고, release는 내부적으로 배포할 준비가 되었다고 생각되는 소스가 저장되는 브랜치 <br/>
  develop에서 배포용 브랜치가 완성이되면, release 브랜치를 만들고 거기서 테스트를 한다. <br/>
  테스트용 서버를 열어놓고 테스트를 막 해보면, 에러가 있을 수 있는데.
  그럼 release 브랜치에서 에러 수정을 한다. <br/>
  개발하는데 방해가 되지 않도록 release에서 수정하고, 테스트가 다 끝나면
  거기서 master로 옮긴다. <br/> 이게 바로 최종 배포용이 되는 것. <br/>
  해당 내용은 develop에도 머지해줘야 한다.

- hotfix <br/>
  긴급하게 수정될 일이 있을 때 진행된다. <br/>
  master가 기준이 되는 브랜치이며, master에서 hotfix 브랜치를 만들어야 한다. 그 이유는 이미 배포된 코드에서 나온 코드니까 master에서 뽑아서 해야한다. <br/>
  거기서 에러 테스트를 하고, master와 develope 브랜치에 push 해서 코드를 최신화해준다. <br/>
