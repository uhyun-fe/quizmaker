import React from "react";
import styled from "styled-components";

type Props = {
   text: string;
   clickEvent: () => void;
   width: string;
   height: string;
   color: string;
   is_font_black: boolean;
   font_size: string;
};

const GameButton: React.FC<Props> = ({ text, clickEvent, width, height, color, is_font_black, font_size }) => {
   return (
      <Button onClick={clickEvent} width={width} height={height} background={color} is_font_black={is_font_black} font_size={font_size}>
         {text}
      </Button>
   );
};

export default GameButton;

type ButtonProps = {
   width: string;
   height: string;
   background: string;
   is_font_black: boolean;
   font_size: string;
};

const Button = styled.button<ButtonProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   color: ${(props) => (props.is_font_black ? "#000000" : "#ffffff")};
   font-size: ${(props) => props.font_size};
   border: none;
   border-radius: 10px;
   background-color: ${(props) => props.background};
   opacity: 0.8;
   transition: 0.2s ease-in-out;

   &:hover {
      opacity: 0.9;
   }
   &:active {
      opacity: 1;
   }
`;
