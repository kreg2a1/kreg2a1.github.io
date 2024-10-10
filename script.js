function playGuess2() {
    var answer = parseInt(Math.random() * 100);
    var playerNum = 1; //номер игрока, который сейчас ходит

    while (true) {
        var userAnswer = prompt('Ходит игрок ' + playerNum + '. Введите число от 0 до 100. Для выхода нажмите q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Ваш ответ слишком большой');
        } else if (userAnswer < answer) {
            alert('Ваш ответ слишком маленький');
        } else if (userAnswer == answer) {
            alert('Вы угадали! Выиграл игрок: ' + playerNum);
            break;
        } else {
            alert('Необходимо ввести число!');
        }

        //делаем смену игрока
        if (playerNum == 1) {
            playerNum = 2;
        } else {
            playerNum = 1;
        }
    }
}

function playGuess() {
    var answer = parseInt(Math.random() * 100);

    while (true) {
        var userAnswer = prompt("Введите число от 0 до 100, для выхода нажмите q.");
        if (userAnswer == "q") {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert("Ваш ответ слишком большой.");
        } else if (userAnswer < answer) {
            alert("Ваш ответ слишком маленький.");
        } else if (userAnswer == answer) {
            alert("Вы угадали!");
            break;
        } else {
            alert("Необходимо ввести число!");
        }
    }
}
