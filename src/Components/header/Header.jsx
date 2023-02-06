import React from "react";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  font-family: 'Karla', sans-serif;
  font-size: 50px;
  margin: 0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

export const StyledHeader = ({text}) => {
  return (
    <Header>
      {text}
    </Header>
  )
}