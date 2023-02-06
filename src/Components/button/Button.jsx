import React from "react";
import styled from "styled-components";

const Button = styled.div`
  min-width: 100px;
  height: 60px;
  background-color: #009dff;
  border-radius: 10px;
  margin: 20px;
  color: white;
  font-weight: 800;
  padding: 20px;
  cursor: pointer;

  :hover {
    background-color: #008ae0;
    color: #e8e8e8;
  }

  :active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`

export const StyledButton = ({text, onClick}) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  )
}