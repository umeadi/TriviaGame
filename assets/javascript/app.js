// **[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// Eric suggested to place each question in an object, and identify the correct answer within the object



// On click function to start game
$("#start").on("click", function () {
    game.start();
})


// Question Array containing questions and answers
var questions = [{
    question: " Where did Tony Stark build his first Iron Man suit?",
    answers: ["On an island ", "In a cave...with a box of scraps ", "In his garage ", "At his private research facility"],
    correctAnswer: "In a cave...with a box of scraps"
}, {
    question: " What color was Wolverine's original costume?",
    answers: ["Black and grey ", "Yellow and blue ", "Brown and yellow ", "Red and white"],
    correctAnswer: "Yellow and blue"
}, {
    question: " What material is Captain America's shield made of?",
    answers: ["Titanium ", "Unobtainum ", "Vibranium ", "Plutonium"],
    correctAnswer: "Vibranium"
}, {
    question: " What land is The Black Panther King of?",
    answers: ["Wakanda ", "Botswana ", "Onitsha ", "Wukari"],
    correctAnswer: "Wakanda"
}, {
    question: " What is the Silver Surfer's real name?",
    answers: ["Zolan Ladd ", "Bill Bixby ", "Hal Jordan ", "Norrin Radd"],
    correctAnswer: "Norrin Radd"
}];

// Object containing game key/value pairs
var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        console.log(counter);
        if (game.counter <= 0) {
            console.log("Time's Up!");
            game.done();
        }
    },

    // Start game function to update html on page with questions 
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subbg").prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>')
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subbg").append("<h2>" + questions[i].question + "<h2>");
            for (var q = 0; q < questions[i].answers.length; q++) {
                $("#subbg").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[q] + "'>" + questions[i].answers[q])
            }
        }
    },
    // Answer Checker Functions
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            // console.log($(this).val() + questions[0].correctAnswer)
            
            if ($(this).val().trim() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val().trim() === questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val().trim() === questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val().trim() === questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val().trim() === questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    // Function to update html on page to reflect results
    result: function () {
        clearInterval(timer);
        $("#subbg h2").remove();

        $("#subbg").html("<h2>Trivia Challenge Complete!</h2>");
        $("#subbg").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subbg").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>")
    }
}