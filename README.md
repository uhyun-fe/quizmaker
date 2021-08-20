# quizmaker

https://momeromalheayo.netlify.app

타입스크립트를 익히기 위한 퀴즈메이커 프로젝트입니다.

---

### typescript setting

```
npx create-react-app ./ --template typescript

npm i styled-components @types/styled-components

```

---

### 프로젝트 구현기능

1. 단어 or 문장 입력
   -  기본 1개 (1개 이상 등록 必)
   -  각 아이템 삭제 기능
   -  start 버튼 클릭 시 일정 시간 뒤에 게임이 시작한다는 모달 생성 (cancel 가능)
   -  최종 완료 시 게임 시작
2. 게임 시작
   -  시작과 동시에 초시계 start (타이머 기능 직접 구현)
   -  한 페이지에 입력한 순서대로 단어 or 문장이 나타남
   -  패스 버튼 클릭 시 스코어 그대로 다음 문제로 이동
   -  correct 버튼 클릭 시 스코어 상승 및 다음 문제로 이동
   -  일시정지 버튼, 게임오버버튼 항상 활성화
   -  마지막 문제 풀이 이후, 스코어/시간 조회 및 재시작버튼 활성화

---

### 게임 화면

<img width="336" alt="스크린샷 2021-08-20 오후 2 13 10" src="https://user-images.githubusercontent.com/80247574/130182844-19d4a278-d606-428f-81da-8a90be92728c.png">
<img width="336" alt="스크린샷 2021-08-20 오후 2 13 16" src="https://user-images.githubusercontent.com/80247574/130182839-c328806e-3a31-4e1b-b4db-b648ccdb34eb.png">
<img width="337" alt="스크린샷 2021-08-20 오후 2 13 27" src="https://user-images.githubusercontent.com/80247574/130182822-fd8f1edf-bcdc-4f2e-9da4-9ec44e97d93c.png">
<img width="337" alt="스크린샷 2021-08-20 오후 2 13 39" src="https://user-images.githubusercontent.com/80247574/130182825-9c7bdefa-e49f-463c-9b6e-d16a95efb86f.png">
<img width="335" alt="스크린샷 2021-08-20 오후 2 13 48" src="https://user-images.githubusercontent.com/80247574/130182830-fa5415ae-e758-4cea-b027-0cd1a38e5acd.png">
