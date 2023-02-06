import './App.css';
import { useState, useEffect } from 'react';
import { 
  Container, 
  StyledButton, 
  StyledCounter,
  StyledDie, 
  StyledHeader, 
  StyledParagraph
} from './Components';
import Confetti from "react-confetti"

const App = () => {

  const [chickenDinner, setChickenDinner] = useState(false)
  const [counter, setCounter] = useState(0)

  const generateNewDie = (id) => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: id
    }
  }

  const allNewDice = () => {
    const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie(i))
        }
        return newDice
    }

  const [dice, setDice] = useState(allNewDice())
  
  useEffect(() => {
    const firstValue = dice[0].value
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === firstValue)

    if(allHeld && allSameValue) {
      setChickenDinner(true)
    }
  }, [dice])

  const mappedDice = dice.map((die) => 
    <StyledDie 
      key={die.id}
      value={die.value} 
      onClick={() => HoldDie(die.id)} 
      isHeld={die.isHeld} 
      className='roll' //fix
    />
  )

  const RollDice = () => {
    if(chickenDinner) {
      setChickenDinner(false)
      setDice(allNewDice())
      setCounter(0)
    }
    else {
      setCounter(oldCount => oldCount + 1)
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld
        ? die
        : generateNewDie(die.id)
      }))
    }
  }

  const HoldDie = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id 
      ? {...die, isHeld: !die.isHeld} 
      : die
    }))
  }

  const buttonText = chickenDinner ? 'New Game' : 'Roll the Dice'
  const paragraph = chickenDinner ? 'Congratulations, you won a game of Tenzies by having 10 dice of '+ dice[0].value +'\'s': 'Roll until all dice are the same. Click each die to hold it at its current value between rolls.'

  return (
    <>
      <StyledCounter counter={counter}/>
      <main>
        {chickenDinner && <Confetti/>}
        <StyledHeader text='Tenzies'/>
        <StyledParagraph text={paragraph}/>
        <Container>{mappedDice}</Container>
        <StyledButton onClick={RollDice} text={buttonText}/>
      </main>
    </>
  );
}

export default App;
