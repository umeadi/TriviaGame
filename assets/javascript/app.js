// ![Basic](Images/1-basic.jpg)

// **[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// Eric suggested to place each question in an object, and identify the correct answer within the object




$("#start").on("click",function(){
    $("#subwrapper").remove();
})

var questions = [{
    question:"Where did Tony Stark build his first Iron Man suit?",
    answers:["On an island", "In a cave...with a box of scraps", "In his garage", "At his private research facility"],
    correctAnswer:"In a cave...with a box of scraps"
}, {
    question:"What color was Wolverine's original costume?",
    answers:["Black and grey", "Yellow and blue", "Brown and yellow", "Red and white"],
    correctAnswer:"Yellow and blue"
}, {
    question:"What material is Captain America's shield made of?",
    answers:["Titanium", "Unobtainum", "Vibranium", "Plutonium"],
    correctAnswer:"Vibranium"
}, {
    question:"What land is The Black Panther King of",
    answers:["Wakanda", "Botswana", "Onitsha", "Wukari"],
    correctAnswer:"In a cave...with a box of scraps"
}, {
    question:"Where did Tony Stark build his first Iron Man suit?",
    answers:["On an island", "In his garage", "In a cave...with a box of scraps"],
    correctAnswer:"In a cave...with a box of scraps"
}];