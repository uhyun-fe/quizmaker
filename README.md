# quizmaker

타입스크립트를 익히기 위한 퀴즈메이커 프로젝트입니다.

프로젝트 실행:

### `npm install`

### `npm start`

<br />

---

## typescript

### setting

```
npx create-react-app ./ --template typescript

npm i styled-components @types/styled-components

```

---

## 프로젝트 목표

### 구현기능

1. 단어 or 문장 입력
   -  기본 1개 (1개 이상 등록 必)
   -  각 아이템 삭제 기능
   -  최종 완료 시 게임 시작 (시작과 동시에 초시계 start)
2. 게임 시작
   -  한 페이지에 입력한 순서대로 단어 or 문장이 나타남
   -  패스 버튼 클릭 시 스코어 그대로 다음문제로 넘어감
   -  확인 버튼 클릭 시 다음 문제로 이동
   -  일시정지 버튼 항상 활성화
   -  마지막 문제를 끝냈을 때, 게임오버버튼 활성화 및 맞추지않은 문제로 이동하기
