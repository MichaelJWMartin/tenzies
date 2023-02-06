import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  color: white;
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 1em;
  max-width: 80px;
  text-align: center;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
`

const text = 'Roll Counter'

export const StyledCounter = ({counter}) => {
  return (
    <Counter>
      <div>{text}</div>
      {counter}
    </Counter>
  )
}