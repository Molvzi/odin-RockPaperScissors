function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  console.log(choices[randomChoice]);
  const computerChoice = choices[randomChoice];
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice;
  do{
    humanChoice = prompt("请输入你的选择（rock/paper/scissors）：").toLowerCase();
  }while(!["rock","paper","scissors"].includes(humanChoice));
  return humanChoice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
  if(humanChoice === computerChoice){
    return "平局！";
  }
  else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ){
    return "你赢了！";
  }
  else{
    return "电脑赢了！";
  }
}

for(let i = 0; i < 5; i++){
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  alert(result);

  if(result === "你赢了！"){
    humanScore++;
  } else if(result === "电脑赢了！"){
    computerScore++;
  }

  if(humanScore === 3){
    alert("You win the game!");
    break;
  }
  else if(computerScore === 3){
    alert("Computer wins the game!");
    break;
  }
}

