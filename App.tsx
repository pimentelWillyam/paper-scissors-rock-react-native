// importando estilo
import { styles } from './styles';

// importando core
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

//importando hooks
import {useState,useEffect} from 'react';

// importando biblioteca de layout
import { Row,Col } from 'react-native-col';

export default function App() {
  // estados
  const [currentPlayer,setCurrentPlayer] = useState('Player 1');
  const [playerOneChoice,setPlayerOneChoice] = useState('')
  const [playerTwoChoice,setPlayerTwoChoice] = useState('')

  const someoneWon = (playerOneChoice: string, playerTwoChoice: string) =>{
    if (playerOneChoice == '' || playerTwoChoice == ''){
      return false
    }
    else{
      return true
    }
  }

  const addPlayerChoice = (choice: string) =>{
    if (currentPlayer == 'Player 1'){
      setPlayerOneChoice(choice)
      setCurrentPlayer('Player 2')
    }
    else{
      setPlayerTwoChoice(choice)
      setCurrentPlayer('Player 1')
      console.log(playerOneChoice,playerTwoChoice)
    }
  }

  const declareWinner = (playerOneChoice: string, playerTwoChoice: string) =>{
    if (isDraw(playerOneChoice,playerTwoChoice)){
      alert('Draw!')
    }
    else if (playerOneHasWon(playerOneChoice,playerTwoChoice)){
      alert('Player 1 won!')
    }
    else{
      alert('Player 2 won!')
    }
  }

  const isDraw = (playerOneChoice: string, playerTwoChoice: string) =>{
    if (playerOneChoice == playerTwoChoice){
      return true
    }
    else{
      return false
    }
  }

  const playerOneHasWon = (playerOneChoice: string, playerTwoChoice: string) =>{
    if (playerOneChoice == '✊' && playerTwoChoice == '✌️' || playerOneChoice == '✋' && playerTwoChoice == '✊' || playerOneChoice == '✌️' && playerTwoChoice == '✋' ){
      return true
    }
    else{
      return false
    }
  }

  useEffect(() =>{
    if (someoneWon(playerOneChoice,playerTwoChoice)){
      declareWinner(playerOneChoice,playerTwoChoice)
      setPlayerOneChoice('')
      setPlayerTwoChoice('')
      setCurrentPlayer('Player 1')
      
    }
  },[currentPlayer])

  return (
    <View>
      <Row.T style={styles.top}>
        <Text style={styles.topText}>{currentPlayer}, make your move</Text>
      </Row.T>
      <Row.C style={styles.choicesContainer} >
        <Col.L>
          <Text style={styles.choice} onPress= {() =>{addPlayerChoice('✊')}}>✊</Text>
        </Col.L>
        <Col.C>
        <Text style={styles.choice} onPress= {() =>{addPlayerChoice('✋')}}>✋</Text> 
        </Col.C>
        <Col.R>
        <Text style={styles.choice} onPress= {() =>{addPlayerChoice('✌️')}}>✌️</Text>  
        </Col.R>
      </Row.C>
    </View>
  );
}
