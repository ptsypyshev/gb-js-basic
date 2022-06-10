let game = {
    /**
     * Запускает игру.
     */
    run() {
        player.SetName(prompt("Введите Ваше имя"));
        do {
            const result = asker.askQuestions();
            player.score= result.score;
            player.rightAnswers = result.rightAnswers;
            alert(msg.congrats(player));
            if (!confirm(msg.startNewGameMsg)) {
                alert(msg.farewell);
                return;
            }
        } while (true);
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log(msg.greetings);
        console.log(msg.consoleInfoMsg);
        if (confirm(msg.greetings)) {
            game.run();
        } else {
            alert(msg.farewell);
        }
    }
};

game.init();