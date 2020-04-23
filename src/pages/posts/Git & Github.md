---
title: Git & Github
date: '2020년 02월 16일'
categories:
  - Git
tags:
  - Git
---

> Git은 소스코드(soruce code)의 변경사항 내역을 관리하는 시스템이다.

참고로 소스코드란 코드 파일들을 말한다. server.js 같은 파일이 소스코드이다.

코드의 변경 사항 내역들을 기록하고 관리해야 하는 이유는,
최신 코드에 문제가 있어서 이전 코드로 되돌려야 할 때가 종종 있다.
혹은 이전 상태로 되돌리지 않더라도 변경 사항들을 확인해야 할 필요도 있기 때문.

Git의 핵심적인 기능은 한 코드베이스에서 협업을 한다는 것.
코드 버전 관리는 협업할 때 더더욱 필요하다. git은 여러 명이 동시에 한 시스템을 개발할 때, 누가 어떠한 코드를 언제 수정 했는지 내역을 확인하고, 각 수정 사항들을 체계적으로 관리할 수 있다.

Git, 즉 VSC(Version Control System) 의 기능은

- 코드 변경 사항 내역 기록 및 관리
- 필요시 이전 상태로 rollback
- 팀 단위 개발시 체계적이고 효과적인 협업

> Github란 중앙서버의 역할을 하는 서비스이다.

Github는 이 외에도 Code review, 문서 생성 및 관리 등 개발 프로젝트 운영에 필요한 여러 기능을 제공한다.

### Git Basics

Git으로 파일 버전 관리를 할 때, 파일은 3개의 상태 중 하나의 상태에 있게 된다.

- Committed
  수정 사항들이 git에 저장이 된 상태를 "committed" 이라고 한다.
- Modified
  Modified file은 이름 그대로 수정된 file 이다. 하지만 아직 "commited" 되지 않은 상태이다.
- Staged
  수정을 하다가 중간 save를 해준 상태. 즉 modified 와 committed의 중간 상태라고 할 수 있다.
  이렇게 중간 상태가 존재 하는 이유는 commit하기엔 준비가 아직 안 됐고, 수정한 곳을 또 수정했는데 잘못 된 경우가 있을 수도 있다. 실수 방지를 위한 것.

![](https://images.velog.io/images/eunmi/post/2979ac62-7dd6-40bb-9118-f072035af862/image.png)

### Basic Git Commands

```
git init
```

개발하고자 하는 소스코드들이 있는 디렉토리를 git repository로 만들기 위해서 사용하는 명령어이다. git init을 해서 git repo로 만들어야 git으로 버전 관리가 시작된다.

```
git add
```

수정 사항들, 즉 modified 파일들을 staged 상태로 옮길 때 사용하는 명령어이다. 또한, git repo에 새로 추가된 파일들을 staged 상태로 옮길 때도 사용된다.

```
git commit -m ""
```

staged된 파일들을 commit 할 때 사용한다. "" 안에 commit 메세지를 써준다.

```
git push origin master
```

git으로 push를 하겠다. origin에.. origin은 github안에 있는 repo를 말한다.
master는 우리가 작업한 branch… commit한 흐름들을 보여주고 그걸 push하면
repo에서 최종적으로 볼 수 있다.

```
git diff
```

어떤 수정사항들이 적용 됐는지 보고 싶을 때 사용하는 명령어.
staged 된 수정 사항은 볼 수 없고, modified 된 파일들만 볼 수 있다.

```
git status
```

현재 상태를 보여주는 명령어이다. modigied, staged 된 파일들을 확인하는 등 전체적인 상황을 보여준다.

```
git rm
```

원하는 파일을 git repo에서 삭제한다.

```
git mv
```

원하는 파일을 git repo에서 이동 시킬 때 사용한다. 주로 rename 할 때 사용된다.

![](https://images.velog.io/images/eunmi/post/5b05b730-a610-432d-9618-01a9896bd257/image.png)

Git의 핵심 branch
Git은 히스토리가 트리형태로 되어있다. 거꾸로 된 나무
중앙 기준이 되는 히스토리는 master branch
무언가 작업을 할 때, 수정할 일이 있을 때 branch를 새로 딴다.
왜?
각자 branch를 안 따고 전부 master에 수정하게 되면 서로 영향을 받는다.
서로 영향을 받지 않고 작업을 할 수 있게 branch를 따서 필요한 작업을 한다.
그게 feature branch라고 한다.
이름 지을 때 앞에 feature을 붙인다. feature의 이름은 기능 중심으로!
작업이 끝나면 master branch에 넣어준다 그게 바로 merge
merge는 합친다는 뜻. 이 역시 로컬에서 일어난다.

예를 들어, 지금 내 위치는 local의 master

1.  branch를 생성한다

```
git branch feature/login
```

2.  이동

```
git checkout feature/login
```

3.  내 로컬에서 작업을 하고 작업을 완료 했으면 추가를 한다.

```
git add .
```

4.  커밋을 한다

```
git commit -m ""
```

5.  마지막으로 푸쉬!

```
git push origin feature/login
```

이렇게 하면, feature/login이 remote에 있는 master로 가서, pull request를 한다.
master권한 있는 사람이 pr을 보고 merge를 해준다.

후에는 local에 있는 master도 업데이트 해줘야 한다.
현재 내 위치는 아까 만들었던 branch위치에 있으니까, local에 있는 master로 이동을 해야한다.

```
git checkout master
```

이동 후에 업데이트를 해야하니까

```
git pull origin master
```

push한 게 merge되면 재사용을 안 하는 편이다.
삭제하는 경우도 있는데 삭제를 하고 싶다면

```
git branch -d feature/login
```

<br />

### conflict

pr할 때, remote master에 내가 수정하려는 branch의 코드가 겹칠 경우엔 충돌이 일어난다.
또, 한 branch에서 오래 일하면 충돌이 될 확률이 높다.
확인은 github에서 pull requests의 내 branch를 확인해주면 알 수 있다.

그러면 remote master에 있는 내용을 업데이트 해줘야 한다.
내 위치는 여전히 local branch에 있기 때문에 git pull origin master를 해준다.
pull을 해주면 vscode에서 충돌된 내역을 볼 수 있는데.
readme.md에서 충돌이 났다고 하면 그 파일의 오른쪽 끝에 c라고 떠있다.
여기서 둘 다 내용을 바꿀지 하나만 바꿀지 선택해주고
add commit push를 해준다.
중간 중간에 git status를 써서 상태를 확인해주는 것도 잊지말자!
