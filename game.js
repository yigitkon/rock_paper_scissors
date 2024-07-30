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

function getHumanChoice(){
    let userChoice = document.querySelector('.userOutput');
    document.addEventListener("click",userSelection);

    function userSelection(e){
        if (e.target.classList.contains("button")){
            userChoice.textContent = e.target.value;
        }
        console.log(userChoice)
        return userChoice
        
    }
    

}

function playRound(computersChoice, humanChoice){
    let humanScore = 0
    let computerScore = 0
    if(computersChoice == "rock"){
        if (humanChoice == "paper"){
            console.log("Human Win")
            humanScore = 1
        }else if (humanChoice == "scissors"){
            console.log("Computer Win")
            computerScore =1
        }else{
            console.log("Draw!")
        }
    }else if (computersChoice == "paper"){
        if (humanChoice == "paper"){
            console.log("Draw")
        }else if(humanChoice == "rock"){
            computerScore = 1
            console.log("Computer Win")
        }else{
            humanScore = 1
            console.log("Human Win")
        }
    }else{ // computer is scissors
        if (humanChoice == "paper"){
            computerScore =1
            console.log("Computer Win")
        }else if(humanChoice == "rock"){
            humanScore = 1
            console.log("Human Win")
        }else{
            console.log("Draw")
        }
    }
    return [computerScore,humanScore]
}
function playGame(){
    let computer_score = 0
    let human_score = 0
    for (let i=1; i<=5; i++){
        var computers_choice = getComputerChoice()
        var human_choice = getHumanChoice()
        let [computerscore, humanscore] = playRound(computers_choice,human_choice)
        computer_score += computerscore
        human_score += humanscore
        console.log("Computer: " + computer_score)
        console.log("Human: " + human_score)
    }
}

getHumanChoice()
//playGame()
