---
title: Git .gitignore
date: '2020년 03월 28일'
categories:
  - Git
tags:
  - Git
---

### .gitignore ..?

프로젝트에 원하지 않는 백업 파일이나 컴파일 된 파일들을 Git 에서 제외시킬수 있는 파일이다.

소스트리 사용할 때 push, pull까지 완료 했음에도 push에는 계속 몇 십개의 업데이트할 데이터가 있었다. gitignore 파일을 만들지 않아 생긴 사단이었다ㅠ...

처음엔 npm으로 gitignore 폴더 생성을 했었는데,
.gitignore라는 파일을 생성하는 게 더 간단한 것 같다.

### .gitignore 파일 만들기

- 최상위 디렉토리에 존재한다.

도너츠 기업협업에선 vue를 사용하고 있어서, 그에 맞는 내용을 구글링해서 가져왔다.

```
### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

### VisualStudioCode Patch ###
# Ignore all local history of files
.history

### Vue ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components

*.sublime*

psd
thumb
sketch
```
