function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * 3)
    if (computer_choice == 0){
        return "rock"
    }else if (computer_choice == 1){
        return "paper"
    }else{
        return "scissors"
    }
}
function texts(i,computer,user,computerScore,humanScore,text){
    const container = document.querySelector("#container");

    document.getElementById("container").innerHTML="";

    const roundnumber = document.createElement("h3");
    roundnumber.classList.add("round-number");
    roundnumber.textContent = "ROUND " + i;
    container.appendChild(roundnumber);

    const computercontent = document.createElement("div");
    computercontent.classList.add("computerchoice");
    computercontent.textContent = "Computer: " + computer;
    container.appendChild(computercontent);

    const usercontent = document.createElement("div");
    usercontent.classList.add("userchoice");
    usercontent.textContent = "User: " + user;
    container.appendChild(usercontent);

    const winnertext = document.createElement("h4");
    winnertext.classList.add("winner");
    winnertext.textContent = text;
    container.appendChild(winnertext);

    const computerscore = document.createElement("div");
    computerscore.classList.add("computerscore");
    computerscore.textContent = "Computer: " + computerScore;
    container.appendChild(computerscore);

    const humanscore = document.createElement("div");
    humanscore.classList.add("humanscore");
    humanscore.textContent = "User: " + humanScore;
    container.appendChild(humanscore);

    const linebreak = document.createElement("br");
    container.appendChild(linebreak);

}


function rpsChoice(){
    let i = 0;
    let humanScore = 0;
    let computerScore = 0;
    const userChoice = document.querySelector('.userOutput');
    document.addEventListener("click",getHumanChoice);

    function getHumanChoice(e){

        if (e.target.classList.contains("button")){
            const user = e.target.id;
            const computer = getComputerChoice();
            const roundNumber = i ++;

            [computerWin,userWin,text] = playRound(computer,user);
            if (computerWin == 1){
                computerScore += 1;
            }else if (userWin == 1){
                humanScore += 1;
            }
            texts(i,computer,user,computerScore,humanScore,text);
        }
        if(computerScore == 5){
            alert("COMPUTER WIN");
            document.getElementById("container").innerHTML="";
        }else if(humanScore == 5){
            alert("YOU WIN")
            document.getElementById("container").innerHTML="";
        }
        
    }

    
}

function playRound(computersChoice, humanChoice){
    let humanWin = 0;
    let computerWin = 0;
    let text = ""
    if(computersChoice == "rock"){
        if (humanChoice == "paper"){
            text = "Human Win";
            humanWin = 1;
        }else if (humanChoice == "scissors"){
            text = "Computer Win";
            computerWin = 1;
        }else{
            text = "Draw"
        }
    }else if (computersChoice == "paper"){
        if (humanChoice == "paper"){
            text = "Draw"
        }else if(humanChoice == "rock"){
            text = "Computer Win";
            computerWin = 1;
        }else{
            text = "Human Win";
            humanWin = 1;
        }
    }else{ // computer is scissors
        if (humanChoice == "paper"){
            text = "Computer Win";
            computerWin = 1;
        }else if(humanChoice == "rock"){
            text = "Human Win";
            humanWin = 1;
        }else{
            text = "Draw";
        }
    }
    return [computerWin,humanWin,text]
}


rpsChoice()


