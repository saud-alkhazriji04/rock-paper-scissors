function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(random());
    results = decideWinner(humanChoice, botChoice)
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message)
};

function random() {
    return Math.floor(Math.random() * 3);
};

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'] [number];
};

function decideWinner(yourChoice, botChoice) {
    let rpsDataBase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    
    let yourScore = rpsDataBase[yourChoice] [botChoice];
    let botScore = rpsDataBase[botChoice] [yourChoice];

    return [yourScore, botScore]
};

function finalMessage([yourScore, botScore]) {
    if(yourScore === 0, botScore === 1) {
        return{'message': 'You Lost!', 'color': 'red'};
    }

    else if(yourScore === 0.5, botScore === 0.5) {
        return{'message': 'Its a Tie!', 'color': 'yellow'};
    }

    else{
        return{'message': 'You Won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'height=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'height=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}