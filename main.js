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

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener("click",()=>{
    choice.style.backgroundColor = "red";
    setTimeout(()=>{
      choice.style.backgroundColor = "";
    },100);
    const humanSelection = choice.id;
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if(result === "你赢了！"){
      humanScore++;
    }
    else if(result === "电脑赢了！"){
      computerScore++;
    }
    document.getElementById("result").textContent = result;
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    if(humanScore === 5){
      alert("You win the game!");
      humanScore = 0;
      computerScore = 0;
    }
    else if(computerScore === 5){
      alert("Computer wins the game!");
      humanScore = 0;
      computerScore = 0;
    }
  });
});

const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");

humanScoreElement.textContent = humanScore;
computerScoreElement.textContent = computerScore;






