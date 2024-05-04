let winMsg='Victory';
let loseMsg='Crushing Defeat';
let tieMsg='Tie';
let moveList=['Rock','Paper','Scissors'];

let PS,CS;

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');
let playerScore = document.getElementById('player');
let computerScore = document.getElementById('computer');

function calcResult(move1, move2) {
    var result = move1 - move2;
    if (result === 1 || result + 3 === 1) {
      CS-=1;
      computerScore.innerText=CS
      return winMsg;
    } else if (result === 2 || result + 3 === 2) {
      PS-=1;
      playerScore.innerText=PS
      return loseMsg;
    } else {
      return tieMsg;
    }
  }


function randomMove(){
    return Math.floor(Math.random()*3);
}

function startGame() {
    statusDisplay.textContent = "Choose!";
    buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";
    buttons[index].addEventListener("click",endGame);
    });
    moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

function endGame(event) {
    var playerMove = moveList.indexOf(event.target.textContent);
    var computerMove = randomMove();
    statusDisplay.textContent = calcResult(playerMove, computerMove);
    moveDisplays.forEach(
      (moveDisplay) => (moveDisplay.style.display = "inline-block")
    );
    moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
    moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;
    buttons.forEach((button, index) => {
      if (index == 1) {
        button.textContent = "Play Again";
        button.removeEventListener("click", endGame);
        if(PS===0 || CS===0)
        { //restart the game
          if(PS===0)
          statusDisplay.textContent=`You Lost 5 rounds`;
          else
          statusDisplay.textContent=`Computer Lost 5 rounds You Won`;
          button.textContent='Restart Game';
          moveDisplays[0].textContent = `Last round: You played ${moveList[playerMove]}\tComputer played ${moveList[computerMove]}`;
          moveDisplays[1].textContent='';
          button.addEventListener("click",startGameWithUpdatedValues);
         
        }
        else{
        //play next round
        button.removeEventListener("click",startGameWithUpdatedValues);
        button.addEventListener("click", startGame);
        }
        }
        else {
        button.style.display = "none";
      }
    }
  );
}

function startGameWithUpdatedValues(){
  PS=5;
  CS=5;
  playerScore.textContent=5;
  computerScore.textContent=5;
  startGame();
}
startGameWithUpdatedValues();