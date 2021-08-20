import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange: #F29F05;
        --blue: #0D07DE;
        --green: #04D976;
        --yellow: #F5F000;
        --hotpink: #F20574;
        --purple: #BD36BF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
    
    input,
    button {
        font-family: inherit;
        outline: none;
    }

    button {
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   min-height: 100vh;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   width: 90%;
   max-width: 700px;
   h1 {
      margin: 40px 0 20px;
      font-size: 1.5em;
      color: #333;
      + p {
         margin-bottom: 20px;
      }
   }
   > button {
      position: absolute;
      bottom: 20px;
   }
`;

export const QuestionInputArea = styled.div`
   margin-bottom: 150px;
   width: 100%;
`;

export const GameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

export const TopArea = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 10px 0;
   strong {
      font-weight: 700;
   }
`;

export const TimerBox = styled.div`
   display: flex;
   align-items: center;
   font-size: 1em;
   button {
      margin-left: 10px;
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 50%;
   }
`;

export const AnswerText = styled.p`
   margin: 20px 0;
   padding: 30px 0;
   font-size: 5em;
   font-weight: 700;
   word-break: break-all;
   background: #f2f2f2;
`;

export const DoubleButtonArea = styled.div`
   display: flex;
   margin-bottom: 100px;
   justify-content: space-between;
   + button {
      position: absolute;
      bottom: 20px;
   }
`;

export const GameOverContainer = styled.div`
   width: 100%;
   text-align: center;
   p {
      margin: 30px 0;
   }
   strong {
      color: var(--green);
      font-size: 3em;
   }
   > button {
      position: absolute;
      bottom: 20px;
   }
`;
