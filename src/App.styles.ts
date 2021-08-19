import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
      margin: 20px 0;
      font-size: 1.8em;
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
