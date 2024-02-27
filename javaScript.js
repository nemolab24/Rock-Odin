function getComputerChoice(){

  let options = ["Rock", "Paper","Scissor"];
  let randomOption =  Math.floor(Math.random()*3);
  return options[randomOption];
}

function playRound(player, computer){
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  let options = ["rock", "paper","scissor"];
  player = options.indexOf(player);
  computer = options.indexOf(computer);
  if (computer == 0){
    if (player == 0){
      return("it is an tie, rock vs rock")
    }
    else if ( player == 1){
      return("You win, Paper wins Rock")
    }
    else 
    {
      return("You lose, Scissors loses to Rock")
    }
  }
  else if (computer == 1){
    if (player == 0){
      return("You lose, Rock loses to Paper")
    }
    else if ( player == 1){
      return("it is an tie, paper vs paper")
    }
    else 
    {
      return("You win, Scissors wins Paper")
    }
  }
  else{
    if (player == 0){
      return("You win, Rock wins Scissors")
    }
    else if ( player == 1){
      return("You lose,  Paper loses to Scissors")
    }
    else 
    {
      return("it is an tie, Scissor vs Scisor")
    }
  }

}


function playGame(){
  let scorePlayer = 0;
  let scoreComputer = 0;
  for ( let i = 0; i < 5; i++)
  { let player = prompt("Make your choice: Rock, Paper, Scissor.");
    let round =  playRound(player,getComputerChoice());
    if ((round.toLowerCase()).includes("win")){
      scorePlayer++;
      console.log(`You won this round, ${scorePlayer} - ${scoreComputer} is the current score. ` )
    }
    else if ((round.toLowerCase()).includes("tie")){
      console.log(`It is a tie, ${scorePlayer} - ${scoreComputer} is the current score. ` )
    }
    else{
      scoreComputer++;
      console.log(`You Lose this round, ${scorePlayer} - ${scoreComputer} is the current score. ` )
    }
    let check = scorePlayer - scoreComputer;
    if (check>0){
      console.log("The winner is You, congratulations!")
    }
    else {
      console.log("You have Lost this game, better luck next time.")
    }
  }
}

playGame();