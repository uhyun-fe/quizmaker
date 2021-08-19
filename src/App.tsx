import React, { useEffect, useState, useRef } from "react";

// Components
import InputBox from "./components/InputBox";
import GameButton from "./components/GameButton";
// Styles
import { GlobalStyle, Wrapper, Container, QuestionInputArea } from "./App.styles";
import ReadyModal from "./components/ReadyModal";

const APP_TITLE = "mom e ro mal hea yo"; // 앱 타이틀
const READY_COUNT = 3; // 시작버튼 클릭 시 대기 시간(초)

const App = () => {
   const DEFAULT_QUESTION_OBJ = { q: "", is_answered: false };
   const [questions, setQuestions] = useState([DEFAULT_QUESTION_OBJ]);
   const [nowQuestionId, setNowQuestionId] = useState(0);
   const [score, setScore] = useState(0);
   const [gameReady, setGameReady] = useState(true);
   const [gameOver, setGameOver] = useState(false);
   const [timeCountToStart, setTimeCountToStart] = useState(0);
   const refToStart = useRef<number>(0);

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
      refToStart.current = READY_COUNT;
      setTimeCountToStart(READY_COUNT);
   };

   // 재시작
   const reStart = () => {
      setQuestions([DEFAULT_QUESTION_OBJ]);
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
                        color="#FA5F00"
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
                  <div>
                     <button onClick={() => setGameOver(true)}>gameover</button>
                  </div>
               ) : (
                  <div>
                     <button onClick={reStart}>restart</button>
                  </div>
               )}
            </Container>
         </Wrapper>
      </>
   );
};

export default App;
