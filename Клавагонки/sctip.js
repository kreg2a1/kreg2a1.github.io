// Список клавиш, которые будут использоваться в игре
//глобальнае переменные


const listKeys = ['A', 'S', 'D', 'F', 'G'];
let currentKey = ''; // Переменная для текущей падающей клавиши
let score = 0; // Переменная для хранения очков игрока
let timer = 5; // Время, отведенное на каждую клавишу
let intervalId; // Идентификатор интервала для управления таймером




// Получаем элементы из HTML
const fallingKeyElement = document.getElementById('fallingKey');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');




// Функция для запуска игры
function startGame() {
    // Проверяем, остались ли клавиши в списке
    if (listKeys.length === 0) {
        alert('Игра окончена! Ваши очки: ' + score);
        return; // Завершаем игру, если клавиши закончились
    }
    // Выбираем случайную клавишу из списка
    currentKey = listKeys[Math.floor(Math.random() * listKeys.length)];
    fallingKeyElement.textContent = currentKey; // Отображаем клавишу
    console.log("Клавиша:" +currentKey)
    


    // Сбрасываем позицию падающей клавиши
    fallingKeyElement.style.top = '0px';
    fallingKeyElement.style.left = Math.random() * (300 - 50) + 'px'; // Случайная горизонтальная позиция




    timer = 5; // Сбрасываем таймер на 5 секунд
    timerElement.textContent = timer; // Обновляем отображение таймера




    // Запускаем интервал для отсчета времени
    intervalId = setInterval(() => {
        timer--; // Уменьшаем таймер на 1 каждую секунду
        timerElement.textContent = timer; // Обновляем отображение таймера




        // Проверяем, истекло ли время
        if (timer <= 0) {
            alert('Время вышло! Игра окончена.'); // Сообщаем игроку об окончании времени
            clearInterval(intervalId); // Останавливаем интервал
            return; // Завершаем выполнение функции
        console.log(currentKey);
        }




        // Перемещаем клавишу вниз на 5 пикселей
        fallingKeyElement.style.top = parseInt(fallingKeyElement.style.top) + 5 + 'px';
       
        // Проверяем, не вышла ли клавиша за пределы контейнера
        if (parseInt(fallingKeyElement.style.top) > 500) {
            alert('Клавиша пропала! Игра окончена.'); // Сообщаем игроку об окончании игры
            clearInterval(intervalId); // Останавливаем интервал
            return; // Завершаем выполнение функции
        }
    }, 1000); // Интервал срабатывает каждую секунду
}


function OnKeyDown(event)
{
   
        // Проверяем, совпадает ли нажатая клавиша с текущей падающей клавишей
        if (event.key.toUpperCase() === currentKey) {
            score += timer; // Добавляем оставшееся время к очкам
            scoreElement.textContent = score; // Обновляем отображение очков
   
   
            // Убираем нажатую клавишу из списка, чтобы она больше не появлялась
            listKeys.splice(listKeys.indexOf(currentKey), 1);
           
            clearInterval(intervalId); // Останавливаем текущий интервал
            startGame(); // Запускаем новую игру с новой клавишей
        }
   
}


// Обработчик события нажатия клавиши на клавиатуре
document.addEventListener('keydown', OnKeyDown);




// Запускаем игру при загрузке скрипта
startGame();