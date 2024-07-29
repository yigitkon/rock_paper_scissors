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
    let choice = prompt("Rock or Paper or Scissors?")
    return choice.toLowerCase()
}

function playRound(computersChoice, humanChoice,computerScore,humanScore){
    if(computersChoice == "rock"){
        if (humanChoice == "paper"){
            console.log("Human Win")
            humanScore += 1
        }else if (humanChoice == "scissors"){
            console.log("Computer Win")
            computerScore +=1
        }else{
            console.log("Draw!")
        }
    }else if (computersChoice == "paper"){
        if (humanChoice == "paper"){
            console.low("Draw")
        }else if(humanChoice == "rock"){
            computerScore += 1
            console.log("Computer Win")
        }else{
            humanScore += 1
            console.log("Human Win")
        }
    }else{ // computer is scissors
        if (humanChoice == "paper"){
            computerScore +=1
            console.low("Computer Win")
        }else if(humanChoice == "rock"){
            humanScore += 1
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
        let [computerscore, humanscore] = playRound(computers_choice,human_choice,computer_score,human_score)
        computer_score += computerscore
        human_score += humanscore
        console.log("Computer: " + computerscore)
        console.log("Human: " + humanscore)
    }
}

playGame()

//var computers_choice = getComputerChoice()
//var human_choice = getHumanChoice()

//let computer_score = 0
//let human_score = 0
//console.log(computers_choice)
//console.log(human_choice)
//const [computerscore, humanscore] = playRound(computers_choice,human_choice,computer_score,human_score)
//console.log("Computer: " + computerscore)
//console.log("Human: " + humanscore)
