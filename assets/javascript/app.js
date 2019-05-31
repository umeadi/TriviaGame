// ![Basic](Images/1-basic.jpg)

// **[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// Eric suggested to place each question in an object, and identify the correct answer within the object



// On click function to start game
$("#start").on("click",function(){
    game.start();
})


// Question Array containing questions and answers
var questions = [{
    question: "Where did Tony Stark build his first Iron Man suit?",
    answers: ["On an island ", "In a cave...with a box of scraps ", "In his garage ", "At his private research facility"],
    correctAnswer: "In a cave...with a box of scraps"
}, {
    question: "What color was Wolverine's original costume?",
    answers: ["Black and grey ", "Yellow and blue ", "Brown and yellow ", "Red and white"],
    correctAnswer: "Yellow and blue"
}, {
    question: "What material is Captain America's shield made of?",
    answers: ["Titanium ", "Unobtainum ", "Vibranium ", "Plutonium"],
    correctAnswer: "Vibranium"
}, {
    question: "What land is The Black Panther King of?",
    answers: ["Wakanda ", "Botswana ", "Onitsha ", "Wukari"],
    correctAnswer: "Wakanda"
}, {
    question: "What is the Silver Surfer's real name?",
    answers: ["Zolan Ladd ", "Bill Bixby ", "Hal Jordan ", "Norrin Radd"],
    correctAnswer: "Norrin Radd"
}];

// Object containing game key/value pairs
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's Up!");
            game.done();
        }
    },

// Start game function to update html on page with questions 
    start: function () {
        timer = setinterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "<h2>");
            for (var q = 0; q < questions[i].answers.length; q++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[q] + "'>" + questions[i].answers[q])
            }
        }
    }
}