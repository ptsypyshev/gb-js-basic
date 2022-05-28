/**
 * Объект с сообщениями.
 * @property {string} greetings Приветствие.
 * @property {string} successMsg Правильный ответ.
 * @property {string} failMsg Неверный ответ.
 * @property {string} startNewGameMsg Запрос повторной игры.
 * @property {string} farewell Прощальное сообщение.
 */
const msg = {
    greetings: "Вас приветствует игра «Кто хочет стать миллионером?»\nНачинаем?",
    consoleInfoMsg: "Чтобы начать игру наберите game.run() и нажмите Enter или нажмите 'Да' в окне приветствия.",
    successMsg: "Это правильный ответ!",
    failMsg: "Это неверный ответ!",
    startNewGameMsg: "Начнем сначала?",
    farewell: `Спасибо за игру! До встречи!`,

    /**
     * Поздравительное сообщение
     * @returns {string} Персонифицированное сообщение.
     */
    congrats(user) {
        return `Поздравляем, ${user.name}! Вы ответили на ${user.rightAnswers} вопросов и заработали ${user.score} рублей!\n`
    }
}
