---
title: Project 01, scrum
date: '2020년 03월 08일'
categories:
  - React
tags:
  - Project
  - React
---

한 박자 느린 것 같은 나지만,
까먹기 전에 기록해놔야지!

1차 프로젝트로 선택한 사이트는 마이리얼트립으로, 프론트엔드 3명 백엔드 2명, 총 5명이 참여하였다.
선택이라기보단 랜덤뽑기?로 지정된 사이트지만 재미있었던 프로젝트였다.

프로젝트는 scrum 방식으로 진행하였다.

#### scrum이란?

복잡한 제품을 개발하고, 유지하기 위한 기법으로 개발과정에서 발생하는 모든 문제를 부정하지 않고 문제를 최소화하는 것으로 목표로 한다. 그리고 장기적인 계획이 아닌 단기적인 계획을 단계적으로 짜는 것을 목표로 하며 발생할 수 있는 오류를 최소화한다. 개발 주기마다 적용할 기능이나 개선에 대한 목록을 제공해야 한다. 이 주기를 sprint라고 한다.

#### sprint 진행 방법은

- sprint가 시작하는 첫 날 planning 미팅을 갖고 할 일을 결정한다.
- sprint를 진행하면서 각자 주어진 일을 완료한다.
- 매일 standup 미팅을 통해 팀원끼리 서로 진행사항을 공유한다.
  - standup 미팅의 목적은, 앉지 않아도 될 정도로 짧은 시간에 서로 진행 사항을 공유하고 다시 일하자는 취지
- standup 미팅에서는 다음 3가지를 한 사람 씩 돌아가면서 이야기 한다.
  - 어제 했던 일
  - 오늘 할 일
  - 다른 사람에 의해 막혀있는 것이나 다른 사람이 해줘야 하는 것(blocker)

일주일 동안 나는 메인페이지를 하게 되었다.
마이리얼트립의 메인페이지를 보자면,

![](https://images.velog.io/images/eunmi/post/2868f477-1475-47c2-ac6c-5cf3d8a96422/%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A5%E1%86%AF%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%20%20%20%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%8B%E1%85%A7%E1%84%92%E1%85%A2%E1%86%BC%E1%84%8B%E1%85%B4%20%E1%84%86%E1%85%A9%E1%84%83%E1%85%B3%E1%86%AB%20%E1%84%80%E1%85%A5%E1%86%BA.png)

헤더랑 푸터는 다른 팀원이 하고, 나는 그 안에 있는 내용들을 구현하게 되었다.
일단 하드코딩으로 먼저 구현하고 -> mock data -> api를 받아와서 구현하는 순서대로 진행하였다.
슬라이더 부분은 라이브러리를 이용하였는데,
며칠동안 날 힘들게 했던 라이브러리는 다음 포스팅에 적기로...!