// importing styles
import { styles } from './styles';

// importing core
import {Text, View } from 'react-native';

//importing hooks
import {useState,useEffect} from 'react';

// importing layout library
import { Row,Col } from 'react-native-col';

// importing helpers
import { addPlayerChoice } from './helpers/addPlayerChoice';
import { someoneWon } from './helpers/someoneWon';
import { declareWinner } from './helpers/declareWinner';

export default function App() {
  // states
  const [currentPlayer,setCurrentPlayer] = useState('Player 1');
  const [playerOneChoice,setPlayerOneChoice] = useState('')
  const [playerTwoChoice,setPlayerTwoChoice] = useState('')

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
          <Text style={styles.choice} onPress= {() =>{addPlayerChoice(currentPlayer,'✊',setPlayerOneChoice,setPlayerTwoChoice,setCurrentPlayer)}}>✊</Text>
        </Col.L>
        <Col.C>
        <Text style={styles.choice} onPress= {() =>{addPlayerChoice(currentPlayer,'✋',setPlayerOneChoice,setPlayerTwoChoice,setCurrentPlayer)}}>✋</Text> 
        </Col.C>
        <Col.R>
        <Text style={styles.choice} onPress= {() =>{addPlayerChoice(currentPlayer,'✌️',setPlayerOneChoice,setPlayerTwoChoice,setCurrentPlayer)}}>✌️</Text>  
        </Col.R>
      </Row.C>
    </View>
  );
}
