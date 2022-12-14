{
    const playGame = function(playerInput){

        clearMessages();

        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            } else if (argMoveId == 2){
                return 'papier';
            } else if (argMoveId == 3){
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }

        const displayResult = function(argComputerMove, argPlayerMove){
            console.log('Komputer wybiera ' + argComputerMove + ', gracz wybiera ' + argPlayerMove);
            printMessage('Ja wybieram ' + argComputerMove + ', Ty wybierasz ' + argPlayerMove + '.');

            if(argComputerMove == argPlayerMove){
                printMessage('Remis!');
            } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
                printMessage('Ty wygrywasz!');
            } else {
                printMessage('Ja wygrywam!');
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const computerMove = getMoveName(randomNumber);

        console.log('Wylosowana liczba to: ' + randomNumber);
        printMessage('Mój ruch to: ' + computerMove);

        /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

        const playerMove = getMoveName(playerInput);

        console.log('Gracz wpisał: ' + playerInput);
        printMessage('Twój ruch to: ' + playerMove);

        displayResult(computerMove, playerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}
/* let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
} else {
    printMessage('nieznany ruch')
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == 2){
    playerMove = 'papier';
} else if (playerInput == 3){
    playerMove = 'nożyce';
} else {
    printMessage('nieznany ruch');
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!');
} else if (computerMove == playerMove){
    printMessage('Remis!');
} else {
    printMessage('nieznany ruch');
} */

        /*const displayResult = function(argComputerMove, argPlayerMove){
            console.log('Komputer wybiera ' + argComputerMove + ', gracz wybiera ' + argPlayerMove);
            printMessage('Ja wybieram ' + argComputerMove + ', Ty wybierasz ' + argPlayerMove + '.');

            if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Ja wygrywam!');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Ja wygrywam!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Ja wygrywam!');
            } else if (argComputerMove == argPlayerMove){
                printMessage('Remis!');
            } else {
                printMessage('Gra nierozsrzygnięta');
            }
        }*/