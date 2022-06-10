/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {string} name Имя пользователя.
 * @property {int} rightAnswers Количество правильных ответов.
 * @property {int} score Набранное количество очков.
 */
const player = {
    name: "Player",
    rightAnswers: 0,
    score: 0,

    SetName(name) {
        this.name = name;
    }
};