import React, { useEffect, useState, useRef } from "react";

// Components
import InputBox from "./components/InputBox";
import GameButton from "./components/GameButton";
// Utils
import { addZeroToTime } from "./utils/lib";
// Styles
import {
   GlobalStyle,
   Wrapper,
   Container,
   QuestionInputArea,
   GameContainer,
   GameOverContainer,
   DoubleButtonArea,
   TimerBox,
   TopArea,
   AnswerText,
} from "./App.styles";
import ReadyModal from "./components/ReadyModal";

const APP_TITLE = "mom e ro mal hea yo"; // 앱 타이틀
const READY_COUNT = 10; // 시작버튼 클릭 시 대기 시간(초)

const App = () => {
   const DEFAULT_QUESTION_OBJ = { q: "", is_answered: false };
   const DEFAULT_STOPWATCH_OBJ = { min: "00", sec: "00", milisec: "00" };
   const [questions, setQuestions] = useState([DEFAULT_QUESTION_OBJ]);
   // const [questions, setQuestions] = useState([
   //    { q: "1번문제", is_answered: false },
   //    { q: "2번문제", is_answered: false },
   //    { q: "3번문제", is_answered: false },
   //    { q: "4번문제", is_answered: false },
   //    { q: "5번문제", is_answered: false },
   // ]);
   const [nowQuestionId, setNowQuestionId] = useState(0);
   const [score, setScore] = useState(0);

   const [stopwatch, setStopwatch] = useState({ min: "00", sec: "00", milisec: "00" });
   const [stopCount, setStopCount] = useState(0);
   const watchRef = {
      start: useRef<number>(0),
      end: useRef<number>(0),
      stop: useRef<boolean>(true),
   };

   const [gameReady, setGameReady] = useState(true);
   const [gameOver, setGameOver] = useState(false);
   const [timeCountToStart, setTimeCountToStart] = useState(0);
   const refToStart = useRef<number>(0);

   useEffect(() => {
      if (!gameOver && !gameReady) {
         // 타이머 시작
         startTimer();
      }
   }, [gameReady]);

   /* Ready to Game */

   useEffect(() => {
      setTimeout(() => {
         if (refToStart.current < 1 || timeCountToStart < 1) return;
         if (timeCountToStart === 1) setGameReady(false);
         refToStart.current = timeCountToStart - 1;
         setTimeCountToStart(timeCountToStart - 1);
      }, 1000);
   }, [timeCountToStart]);

   // 질문 세팅
   const changeQuestion = (number: number, value: string) => {
      let arr = [...questions];
      arr[number] = { ...arr[number], q: value };
      setQuestions(arr);
   };

   // 질문 삭제
   const deleteQuestion = (number: number) => {
      if (questions.length < 2) return;
      setQuestions(questions.filter((q, i) => i !== number));
   };

   // 시작버튼 클릭 시 READY_COUNT 만큼 대기하는 모달창 띄우기
   const readyToStart = () => {
      if (questions.filter((question) => !question.q).length > 0) return alert("빈 문제 없이 모두 작성해주세요");
      refToStart.current = READY_COUNT;
      setTimeCountToStart(READY_COUNT);
   };

   /* Game ing~ */

   // 타이머 시작 or 재시작
   function startTimer() {
      setStopCount(stopCount + 1);
      watchRef.start.current = Date.now() + (watchRef.start.current ? watchRef.start.current - watchRef.end.current : 0);
      watchRef.stop.current = false;
      setInterval(() => {
         if (watchRef.stop.current) return;
         let now = new Date(Date.now() - watchRef.start.current);
         setStopwatch({
            ...stopwatch,
            min: addZeroToTime(now.getMinutes()),
            sec: addZeroToTime(now.getSeconds()),
            milisec: addZeroToTime(Math.floor(now.getMilliseconds() / 10)),
         });
      }, 1);
   }

   // 타이머 일시정지
   function stopTimer() {
      setStopCount(stopCount + 1);
      watchRef.end.current = Date.now();
      watchRef.stop.current = true;
   }

   // answer
   const getAnswer = (is_correct: boolean) => {
      if (watchRef.stop.current) return alert("일시정지상태입니다");
      if (is_correct) {
         setScore(score + 1);
         setQuestions(questions.map((question, i) => (i === nowQuestionId ? { ...question, is_answered: true } : question)));
      }

      if (nowQuestionId >= questions.length - 1) return theEnd();
      setNowQuestionId(nowQuestionId + 1);
   };

   function theEnd() {
      setGameOver(true);
      stopTimer();
   }

   /* After Gameover */

   // 재시작
   const reStart = () => {
      setQuestions([DEFAULT_QUESTION_OBJ]);
      setNowQuestionId(0);
      setScore(0);
      setStopwatch(DEFAULT_STOPWATCH_OBJ);
      setStopCount(0);
      watchRef.start.current = 0;
      watchRef.end.current = 0;
      watchRef.stop.current = true;
      setGameReady(true);
      setGameOver(false);
   };

   return (
      <>
         <GlobalStyle />
         <Wrapper>
            <Container>
               <h1>{APP_TITLE}</h1>
               {gameReady ? (
                  <>
                     <p>총 {questions.length} 문제</p>
                     <QuestionInputArea>
                        {questions.map((question, index) => (
                           <InputBox key={index} number={index} question={question.q} setQuestion={changeQuestion} deleteQuestion={deleteQuestion} />
                        ))}
                        <GameButton
                           text="+"
                           clickEvent={() => setQuestions(questions.concat(DEFAULT_QUESTION_OBJ))}
                           width="100%"
                           height="60px"
                           color="#e2e2e2"
                           is_font_black={true}
                           font_size="1.5em"
                        />
                     </QuestionInputArea>
                     <GameButton
                        text="GAME START"
                        clickEvent={readyToStart}
                        width="100%"
                        height="60px"
                        color="var(--orange)"
                        is_font_black={false}
                        font_size="1.5em"
                     />
                     {!!timeCountToStart && (
                        <ReadyModal
                           remaining_time={timeCountToStart}
                           cancel={() => {
                              setTimeCountToStart(0);
                              refToStart.current = 0;
                           }}
                        />
                     )}
                  </>
               ) : !gameOver ? (
                  <GameContainer>
                     <TopArea>
                        <TimerBox>
                           <p>
                              {stopwatch.min}:{stopwatch.sec}:{stopwatch.milisec}
                           </p>
                           <button onClick={!(stopCount % 2) ? startTimer : stopTimer}>{!(stopCount % 2) ? ">" : "||"}</button>
                        </TimerBox>
                        <p>
                           score: <strong>{score}</strong>
                        </p>
                     </TopArea>
                     <p>
                        {nowQuestionId + 1} / {questions.length}
                     </p>
                     <AnswerText>{questions[nowQuestionId].q}</AnswerText>
                     <DoubleButtonArea>
                        <GameButton
                           text="Correct"
                           clickEvent={() => getAnswer(true)}
                           width="49%"
                           height="60px"
                           color="var(--green)"
                           is_font_black={false}
                           font_size="1.5em"
                        />
                        <GameButton
                           text="Pass"
                           clickEvent={() => getAnswer(false)}
                           width="49%"
                           height="60px"
                           color="var(--hotpink)"
                           is_font_black={false}
                           font_size="1.5em"
                        />
                     </DoubleButtonArea>
                     <GameButton
                        text="GAME OVER"
                        clickEvent={theEnd}
                        width="100%"
                        height="60px"
                        color="var(--orange)"
                        is_font_black={false}
                        font_size="1.5em"
                     />
                  </GameContainer>
               ) : (
                  <GameOverContainer>
                     <p>
                        {stopwatch.min}:{stopwatch.sec}:{stopwatch.milisec}
                     </p>
                     <p>score</p>
                     <p>
                        <strong>{score}</strong> / {questions.length}
                     </p>
                     {/* <GameButton
                           text="문제보기"
                           clickEvent={() => alert("구현중입니다.")}
                           width="49%"
                           height="60px"
                           color="var(--skyblue)"
                           is_font_black={false}
                           font_size="1.5em"
                        /> */}
                     <GameButton
                        text="RESTART"
                        clickEvent={reStart}
                        width="100%"
                        height="60px"
                        color="var(--orange)"
                        is_font_black={false}
                        font_size="1.5em"
                     />
                  </GameOverContainer>
               )}
            </Container>
         </Wrapper>
      </>
   );
};

export default App;
