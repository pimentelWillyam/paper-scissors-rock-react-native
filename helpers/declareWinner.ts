import { isDraw } from "./isDraw"
import { playerOneHasWon } from "./playerOneHasWon"

export const declareWinner = (playerOneChoice: string, playerTwoChoice: string) =>{
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