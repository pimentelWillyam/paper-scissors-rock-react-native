export const someoneWon = (playerOneChoice: string, playerTwoChoice: string) =>{
    if (playerOneChoice == '' || playerTwoChoice == ''){
      return false
    }
    else{
      return true
    }
  }