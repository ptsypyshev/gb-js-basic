/**
 * Объект с вопросами.
 * @property {string} question Вопрос.
 * @property {Array.<string>} answers Массив с ответами.
 * @property {int} rightAnswer Индекс правильного ответа.
 * @property {int} addScore Сколько очков дает правильный ответ.
 */
const questions = [
    {
        question: "Что растёт в огороде?",
        answers: [
            "Лук",
            "Пистолет",
            "Пулемёт",
            "Ракета СС-20"
        ],
        rightAnswer: 0,
        addScore: 1000
    },
    {
        question: "Как называют микроавтобусы, совершающие поездки по определённым маршрутам?",
        answers: [
            "Рейсовка",
            "Путёвка",
            "Курсовка",
            "Маршрутка"
        ],
        rightAnswer: 3,
        addScore: 2000
    },
    {
        question: "О чём писал Грибоедов, отмечая, что он «нам сладок и приятен» ?",
        answers: [
            "Дым Отечества",
            "Дух купечества",
            "Дар пророчества",
            "Пыл девичества"
        ],
        rightAnswer: 0,
        addScore: 3000
    },
    {
        question: "Какого персонажа нет в известной считалке «На золотом крыльце сидели» ?",
        answers: [
            "Сапожника",
            "Кузнеца",
            "Короля",
            "Портного"
        ],
        rightAnswer: 1,
        addScore: 4000
    },
    {
        question: "Какой специалист занимается изучением неопознанных летающих объектов?",
        answers: [
            "Психиатр",
            "Кинолог",
            "Уфолог",
            "Сексопатолог"
        ],
        rightAnswer: 2,
        addScore: 5000
    },
]