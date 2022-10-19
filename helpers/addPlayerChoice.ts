export const addPlayerChoice = (currentPlayer: string, choice: string, setPlayerOneChoice: React.Dispatch<React.SetStateAction<string>>, setPlayerTwoChoice: React.Dispatch<React.SetStateAction<string>>, setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>) =>{
    if (currentPlayer == 'Player 1'){
      setPlayerOneChoice(choice)
      setCurrentPlayer('Player 2')
    }
    else{
      setPlayerTwoChoice(choice)
      setCurrentPlayer('Player 1')
    }
  }