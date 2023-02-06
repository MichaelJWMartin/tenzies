import React from 'react'
import styled from 'styled-components';
import '../../App.css';

const Die = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: ${({ isHeld }) => isHeld ? '#59E391' : '#fff'};
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`
const DieValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.4em;
`

export const StyledDie = ({value, isHeld, onClick}) => {
  return (
    <Die isHeld={isHeld} onClick={(onClick)}> 
      <DieValue>{value}</DieValue>
    </Die>
  )
}
