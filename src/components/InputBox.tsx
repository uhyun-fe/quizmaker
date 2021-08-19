import React from "react";
import styled from "styled-components";

// Components
import GameButton from "./GameButton";

type Props = {
   number: number;
   question: string;
   setQuestion: (number: number, value: string) => void;
   deleteQuestion: (number: number) => void;
   //    setQuestion: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox: React.FC<Props> = ({ number, question, setQuestion, deleteQuestion }) => {
   return (
      <Container>
         <input type="text" value={question} onChange={({ target: { value } }) => setQuestion(number, value)} />
         <GameButton
            text="삭제"
            clickEvent={() => deleteQuestion(number)}
            width="15%"
            height="50px"
            color="#e2e2e2"
            is_font_black={true}
            font_size="1em"
         />
      </Container>
   );
};

export default InputBox;

const Container = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   input {
      margin-right: 10px;
      padding: 20px;
      width: 100%;
      height: 50px;
      font-size: 0.9em;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
   }
`;
