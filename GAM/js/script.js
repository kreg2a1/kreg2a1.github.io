let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('userInput').value);
    const resultMessage = document.getElementById('resultMessage');
    const attemptsMessage = document.getElementById('attemptsMessage');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Пожалуйста, введите число от 1 до 100.';
        resultMessage.style.color = 'red';
    } else {
        attempts++;
        if (userGuess < randomNumber) {
            resultMessage.textContent = 'Слишком мало!';
            resultMessage.style.color = 'orange';
        } else if (userGuess > randomNumber) {
            resultMessage.textContent = 'Слишком много!';
            resultMessage.style.color = 'orange';
        } else {
            resultMessage.textContent = `Поздравляем! Вы угадали число за ${attempts} попыток.`;
            resultMessage.style.color = 'green';
        }
    }

    attemptsMessage.textContent = `Количество попыток: ${attempts}`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('userInput').value = '';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('attemptsMessage').textContent = 'Количество попыток: 0';
});
