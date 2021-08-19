import React from "react";
import styled from "styled-components";

// Components
import GameButton from "./GameButton";

type Props = {
   remaining_time: number;
   cancel: () => void;
};

const ReadyModal: React.FC<Props> = ({ remaining_time, cancel }) => {
   return (
      <Wrapper>
         <Modal>
            <p>{remaining_time}초 뒤에 게임이 시작됩니다.</p>
            <GameButton text="CANCEL" clickEvent={cancel} width="50%" height="50px" color="#0D07DE" is_font_black={false} font_size="1.5em" />
         </Modal>
      </Wrapper>
   );
};

export default ReadyModal;

const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   width: 100%;
   height: 100%;
`;

const Modal = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 90%;
   max-width: 300px;
   height: 200px;
   border: 5px solid #333;
   border-radius: 10px;
   background: #fff;

   p {
      margin-bottom: 30px;
      font-size: 1.2em;
   }
`;
