
        const questions = [
        { question: "Which keyword is used to define a variable in C?", choices: ["var", "int", "def", "let"], answer: "int", category: "C Language" },
{ question: "Which header file is required for input/output functions in C?", choices: ["stdio.h", "stdlib.h", "conio.h", "io.h"], answer: "stdio.h", category: "C Language" },
{ question: "What is the correct way to declare a pointer in C?", choices: ["int ptr;", "*int ptr;", "int *ptr;", "ptr int*;"], answer: "int *ptr;", category: "C Language" },
{ question: "Which operator is used to access the value at the address stored in a pointer?", choices: ["&", "*", ".", "->"], answer: "*", category: "C Language" },
{ question: "What does the function `malloc` do in C?", choices: ["Allocates memory dynamically", "Releases memory", "Copies memory", "Initializes memory"], answer: "Allocates memory dynamically", category: "C Language" },
{ question: "What is the output of `sizeof(int)` on a 32-bit machine?", choices: ["2", "4", "8", "16"], answer: "4", category: "C Language" },
{ question: "Which loop is guaranteed to execute at least once?", choices: ["for", "while", "do-while", "foreach"], answer: "do-while", category: "C Language" },
{ question: "Which data type has the highest precision in C?", choices: ["float", "double", "int", "long double"], answer: "long double", category: "C Language" },
{ question: "Which of the following is not a valid storage class in C?", choices: ["auto", "register", "static", "constant"], answer: "constant", category: "C Language" },
{ question: "What is the default return type of the `main` function in C?", choices: ["void", "int", "char", "float"], answer: "int", category: "C Language" },
{ question: "What does the 'break' statement do in a loop?", choices: ["Skips the next iteration", "Exits the loop", "Restarts the loop", "Continues the loop"], answer: "Exits the loop", category: "C Language" },
{ question: "What is the valid way to comment in C?", choices: ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"], answer: "// This is a comment", category: "C Language" },
{ question: "Which of the following is a valid identifier in C?", choices: ["int", "_int", "1var", "var-name"], answer: "_int", category: "C Language" },
{ question: "What is the range of values for `signed char` in C?", choices: ["0 to 255", "-128 to 127", "-32768 to 32767", "-2147483648 to 2147483647"], answer: "-128 to 127", category: "C Language" },
{ question: "Which function is used to read a string in C?", choices: ["gets()", "scanf()", "cin", "input()"], answer: "scanf()", category: "C Language" },
{ question: "Which escape sequence represents a newline in C?", choices: ["\\t", "\\n", "\\b", "\\r"], answer: "\\n", category: "C Language" },
{ question: "What is the output of `printf(\"%d\", 5 + 3);`?", choices: ["5", "3", "8", "Compilation error"], answer: "8", category: "C Language" },
{ question: "What is the correct syntax to include a header file in C?", choices: ["#include header.h", "#include 'header.h'", "include <header.h>", "#include <header.h>"], answer: "#include <header.h>", category: "C Language" },
{ question: "Which operator is used for bitwise AND in C?", choices: ["&&", "&", "|", "&&&"], answer: "&", category: "C Language" },
{ question: "What does the `continue` statement do in a loop?", choices: ["Exits the loop", "Skips the rest of the current iteration", "Stops the execution", "Restarts the loop"], answer: "Skips the rest of the current iteration", category: "C Language" },

{ question: "Which of these is not a Java keyword?", choices: ["class", "interface", "extends", "include"], answer: "include", category: "Java" },
{ question: "What is the default value of a boolean in Java?", choices: ["true", "false", "null", "undefined"], answer: "false", category: "Java" },
{ question: "Which method is used to start a thread in Java?", choices: ["run()", "start()", "execute()", "init()"], answer: "start()", category: "Java" },
{ question: "Which keyword is used to inherit a class in Java?", choices: ["inherits", "extends", "implements", "super"], answer: "extends", category: "Java" },
{ question: "What is the size of `int` in Java?", choices: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes", category: "Java" },
{ question: "Which package contains the `Scanner` class?", choices: ["java.io", "java.net", "java.util", "java.text"], answer: "java.util", category: "Java" },
{ question: "What is the default value of a local variable in Java?", choices: ["0", "null", "false", "No default value"], answer: "No default value", category: "Java" },
{ question: "Which method is called when an object is destroyed in Java?", choices: ["destroy()", "finalize()", "dispose()", "garbageCollect()"], answer: "finalize()", category: "Java" },
{ question: "What is the output of `System.out.println(2 + 3 + \"Hello\");`?", choices: ["Hello5", "5Hello", "23Hello", "Error"], answer: "5Hello", category: "Java" },
{ question: "Which interface is used for sorting in Java?", choices: ["Comparator", "Comparable", "Iterable", "Runnable"], answer: "Comparable", category: "Java" },
{ question: "What is the parent class of all classes in Java?", choices: ["Object", "Class", "Base", "Parent"], answer: "Object", category: "Java" },
{ question: "Which keyword is used to create an abstract class in Java?", choices: ["abstract", "interface", "virtual", "base"], answer: "abstract", category: "Java" },
{ question: "What is the output of `Math.floor(4.7)` in Java?", choices: ["4", "4.7", "5", "Error"], answer: "4", category: "Java" },
{ question: "Which access modifier makes a member accessible only within its package?", choices: ["public", "private", "protected", "default"], answer: "default", category: "Java" },
{ question: "Which exception is thrown when dividing by zero in Java?", choices: ["ArithmeticException", "NullPointerException", "IOException", "IllegalArgumentException"], answer: "ArithmeticException", category: "Java" },
{ question: "Which collection class does not allow duplicate elements?", choices: ["List", "Set", "Map", "Queue"], answer: "Set", category: "Java" },
{ question: "What does the `static` keyword indicate in Java?", choices: ["Method is synchronized", "No memory allocation", "Belongs to the class", "Cannot be overridden"], answer: "Belongs to the class", category: "Java" },
{ question: "Which Java feature ensures type safety at runtime?", choices: ["Generics", "Polymorphism", "Serialization", "Encapsulation"], answer: "Generics", category: "Java" },
{ question: "What is the valid way to declare a main method in Java?", choices: ["public static void main(String[] args)", "static public void main(String args[])", "Both A and B", "None of the above"], answer: "Both A and B", category: "Java" },
{ question: "Which keyword is used to handle exceptions in Java?", choices: ["throw", "throws", "try", "catch"], answer: "try", category: "Java" },

{ question: "Which property is used to change the background color?", choices: ["background-color", "color", "bgcolor", "background"], answer: "background-color", category: "CSS" },
{ question: "What does `z-index` control in CSS?", choices: ["Position", "Visibility", "Layer order", "Alignment"], answer: "Layer order", category: "CSS" },
{ question: "Which CSS property is used to make text bold?", choices: ["font-style", "font-weight", "font-size", "font-family"], answer: "font-weight", category: "CSS" },

{ question: "Which algorithm is used for classification tasks?", choices: ["K-Means", "SVM", "PCA", "Apriori"], answer: "SVM", category: "Machine Learning" },
{ question: "What does PCA stand for?", choices: ["Principal Component Analysis", "Probabilistic Component Analysis", "Potential Component Analysis", "Parallel Component Analysis"], answer: "Principal Component Analysis", category: "Machine Learning" },
{ question: "What is overfitting in machine learning?", choices: ["Model too simple", "Model too complex", "Model with high bias", "Model with high variance"], answer: "Model too complex", category: "Machine Learning" },
{ question: "Which algorithm is used for regression tasks?", choices: ["Logistic Regression", "Linear Regression", "K-Means", "Apriori"], answer: "Linear Regression", category: "Machine Learning" },
{ question: "What is the purpose of the learning rate in machine learning?", choices: ["Controls the model's speed", "Controls the complexity", "Determines model's size", "Controls the prediction"], answer: "Controls the model's speed", category: "Machine Learning" },
{ question: "Which type of neural network is most commonly used for image classification?", choices: ["Convolutional Neural Network", "Recurrent Neural Network", "Artificial Neural Network", "Generative Adversarial Network"], answer: "Convolutional Neural Network", category: "Machine Learning" }

        ];

        let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = [];
let timerInterval;
let timeLeft = 30;
let answers = [];

const MAX_QUESTIONS = 10;

const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const scoreContainer = document.getElementById("score-container");
const quizContainer = document.getElementById("quiz-container");
const categorySelection = document.getElementById("category-selection");
const timeBar = document.getElementById("time-bar");

const totalQuestionsDisplay = document.getElementById("total-questions");
const correctAnswersDisplay = document.getElementById("correct-answers");
const incorrectAnswersDisplay = document.getElementById("incorrect-answers");
const finalScoreDisplay = document.getElementById("score");
const reviewContainer = document.getElementById("review-container");
const reviewQuestionsContainer = document.getElementById("review-questions");

document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.getAttribute('data-category');

        filteredQuestions = selectedCategory === "all"
            ? questions.flat()
            : questions.flat().filter(q => q.category === selectedCategory);

        if (filteredQuestions.length === 0) {
            alert("No questions available for the selected category.");
            return;
        }

        shuffleArray(filteredQuestions);

        filteredQuestions = filteredQuestions.slice(0, MAX_QUESTIONS);

        currentQuestionIndex = 0;
        score = 0;
        answers = [];
        timeLeft = 30;

        categorySelection.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        scoreContainer.classList.add("hidden");

        startTimer();
        showQuestion();
    });
});

function showQuestion() {
    if (currentQuestionIndex >= filteredQuestions.length) {
        endQuiz();
        return;
    }

    const question = filteredQuestions[currentQuestionIndex];
    questionContainer.innerText = question.question;
    choicesContainer.innerHTML = "";

    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("choice-button");
        button.onclick = () => selectAnswer(button, choice);
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(button, choice) {
    const correctAnswer = filteredQuestions[currentQuestionIndex].answer;
    answers[currentQuestionIndex] = {
        question: filteredQuestions[currentQuestionIndex].question,
        answer: choice,
        correct: choice === correctAnswer
    };

    if (choice === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
        highlightCorrectAnswer(correctAnswer);
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < filteredQuestions.length) {
            timeLeft = 30;
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function highlightCorrectAnswer(correctAnswer) {
    Array.from(choicesContainer.children).forEach(button => {
        if (button.innerText === correctAnswer) {
            button.classList.add("correct");
        }
    });
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    updateTimeBar();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimeBar();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Moving to the next question.");
            currentQuestionIndex++;
            if (currentQuestionIndex < filteredQuestions.length) {
                timeLeft = 30;
                showQuestion();
                startTimer();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

function updateTimeBar() {
    timeBar.style.width = (timeLeft / 30) * 100 + '%';
}

function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");

    const totalQuestions = filteredQuestions.length;
    const incorrectAnswers = totalQuestions - score;

    totalQuestionsDisplay.innerText = totalQuestions;
    correctAnswersDisplay.innerText = score;
    incorrectAnswersDisplay.innerText = incorrectAnswers;
    finalScoreDisplay.innerText = score;
}

function reviewQuiz() {
    scoreContainer.classList.add("hidden");
    reviewContainer.classList.remove("hidden");

    reviewQuestionsContainer.innerHTML = '';

    answers.forEach(answer => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item', answer.correct ? 'correct' : 'incorrect');
        reviewItem.innerHTML = `<strong>Question:</strong> ${answer.question}<br><strong>Your Answer:</strong> ${answer.answer} <br><strong>Status:</strong> ${answer.correct ? 'Correct' : 'Incorrect'}`;
        reviewQuestionsContainer.appendChild(reviewItem);
    });
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    filteredQuestions = [];
    timeLeft = 30;

    categorySelection.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    scoreContainer.classList.add("hidden");
    reviewContainer.classList.add("hidden");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    