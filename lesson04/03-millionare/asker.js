const asciiFirstLetter = 65

let asker = {
    /**
     * Создает сообщение с вопросом пользователю
     * @param {string} question Направление движения игрока.
     * @param {Array.<string>} answers Направление движения игрока.
     * @param {string} score Направление движения игрока.
     */
    makeQuestionMsg(question, answers, score) {
        let ans = "";
        answers.forEach(function (answer, idx) {
            ans += `${String.fromCharCode(asciiFirstLetter + idx)}: ${answer}\n`;
        })
        return `Вопрос на ${score} рублей:\n${question}\n` + ans;
    },

    /**
     * Задает вопросы пользователю
     * @returns {{rightAnswers: int, score: int}} Результаты ответов.
     */
    askQuestions() {
        let score = 0;
        let rightAnswers = 0;
        questions.forEach(function (question) {
            let answer = prompt(asker.makeQuestionMsg(question.question, question.answers, question.addScore)).toUpperCase();
            if (answer.charCodeAt(0) - asciiFirstLetter === question.rightAnswer) {
                score += question.addScore;
                rightAnswers++;
                alert(msg.successMsg);
            } else {
                alert(msg.failMsg);
            }
        })
        return {rightAnswers: rightAnswers, score: score};
    },
};