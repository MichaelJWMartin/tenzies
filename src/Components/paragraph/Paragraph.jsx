import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  color: white;
  font-weight: 400;
  margin-top: 0;
  text-align: center;
  padding: 10px;
  max-width: 375px;
  -webkit-text-stroke-width: 0.05px;
  -webkit-text-stroke-color: black;
`

export const StyledParagraph = ({text}) => {
  return (
    <Paragraph>
      {text}
    </Paragraph>
  )
}