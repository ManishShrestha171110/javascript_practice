const questionsSet = [
    {
        question: "Which is largest among following?",
        options: ["1) 4", "2) 10", "3) 20", "4) 9"],
        answer: "3"
    },
    {
        question: "Who won the FIFA World Cup in 2022?",
        options: ["1) France", "2) Argentina", "3) Portugal", "4) Belgium"],
        answer: "2"
    },
    {
        question: "Which country won 2023 ICC Cricket World Cup?",
        options: ["1) India", "2) Australia", "3) South Africa", "4) England"],
        answer: "2"
    },
    {
        question: "Give the least number from the following.",
        options: ["1) 3", "2) 1", "3) 9", "4) 5"],
        answer: "4"
    },
    
];

let score = 0;

for (let i = 0; i < questionsSet.length; i++) {
    const newQuestion = questionsSet[i];

    console.log(`Question ${i + 1}: ${newQuestion.question}`);
    newQuestion.options.forEach(option => {
        console.log(option);
    });

    let userAnswer = prompt("Please enter the answer (1, 2, 3, or 4):").toUpperCase();

    if (userAnswer === newQuestion.answer) {
        console.log("Your answer is Correct.\n");
        score++;
    } else if (userAnswer === "1" || userAnswer === "2" || userAnswer === "3" || userAnswer === "4") {
        console.log(`Your answer is wrong! The correct answer is ${Questionewn.answer}.\n`);
    } else {
        console.log("Invalid input! Please enter 1, 2, 3, or 4.\n");
    }
}

console.log(`Your score is ${score} out of ${questionsSet.length}.`);

if (score === questionsSet.length) {
    console.log("Great! All answers are correct.");
} else if (score >= questionsSet.length / 2) {
    console.log("Nice job! You have a good understanding.");
} else {
    console.log("You need more practice.");
}