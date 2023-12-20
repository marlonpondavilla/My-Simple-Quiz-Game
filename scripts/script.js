

const option1 = document.querySelector('#opt-1');
const option2 = document.querySelector('#opt-2');
const option3 = document.querySelector('#opt-3');
const option4 = document.querySelector('#opt-4');
let checkAnswerBtn1 = document.querySelector('.btn1');
let checkAnswerBtn2 = document.querySelector('.btn2');
let checkAnswerBtn3 = document.querySelector('.btn3');
let checkAnswerBtn4 = document.querySelector('.btn4');
// let checkAnswerBtn2 =  document.querySelector('.check-answer-btn');  
const refreshBtn = document.querySelector('.refresh-btn');

let okBtn = document.querySelector('.ok-btn');

const popUp = document.querySelector('.result-popup');
const quizContainer = document.querySelector('.quiz-container');
let questionTitle = document.getElementById('question-header');
const quizType = document.querySelector('.quiz-title-type');

let optionEl1 = document.getElementById('js-option-1');
let optionEl2 = document.getElementById('js-option-2');
let optionEl3 = document.getElementById('js-option-3');
let optionEl4 = document.getElementById('js-option-4');
let score = 0;

// To determine which page the quiz on 
let success = 1;

// Questions object
const questions = {
    question1: 'Which programming language used to create dynamic web pages?',
    question2: 'He discovered Penicillin and became the father of it.',
    question3: 'Which month of the calendar year whose name is a verb?',
    question4: 'What is the capital of the Philippines?'
}
// Options object
const options_1 = {
    opt1: 'PHP',
    opt2: 'JavaScript',
    opt3: 'Java',
    opt4: 'C++'
}
const options_2 = {
    opt1: 'Isaac Newton',
    opt2: 'Albert Einstein',
    opt3: 'Louis Pasteur',
    opt4: 'Alexander Fleming'
}
const options_3 = {
    opt1: 'February',
    opt2: 'October',
    opt3: 'March',
    opt4: 'September'
}
const options_4 = {
    opt1: 'Manila',
    opt2: 'Cebu',
    opt3: 'Pampanga',
    opt4: 'Davao'
}
//Answers object
const answers = {
    ans1: options_1.opt2,
    ans2: options_2.opt4,
    ans3: options_3.opt3,
    ans4: options_4.opt1
}

let answer = "";

// functions for question
question1()
function question1(){
    const q1 = questions['question1'];
    const opt_1 = options_1['opt1'];
    const opt_2 = options_1['opt2'];
    const opt_3 = options_1['opt3'];
    const opt_4 = options_1['opt4'];
    questionTitle.textContent = q1;
    optionEl1.textContent  = opt_1;
    optionEl2.textContent  = opt_2;
    optionEl3.textContent  = opt_3;
    optionEl4.textContent  = opt_4;
    
}
function checkAnswer1(){
    if (answer === answers['ans1']) {
        score++;
        changeJsScore();
        showPopup();
        question2();
        answer = "";
        console.log("answer1 runs")
        success++;
        checkAnswerBtn1.classList.add('hide');
        checkAnswerBtn2.classList.add('show');
        quizType.textContent = 'Science';
    } else if (answer !== option2) {
        option2.style.backgroundColor = '#5FD068';
        option2.style.color = '#fff'
        refreshBtn.classList.add('show');
        checkAnswerBtn1.style.display = 'none';
        incorrectState();
    }
}

function question2(){
    const q2 = questions['question2'];
    const opt_1 = options_2['opt1'];
    const opt_2 = options_2['opt2'];
    const opt_3 = options_2['opt3'];
    const opt_4 = options_2['opt4'];
    questionTitle.textContent = q2;
    optionEl1.textContent  = opt_1;
    optionEl2.textContent  = opt_2;
    optionEl3.textContent  = opt_3;
    optionEl4.textContent  = opt_4;
}
function checkAnswer2(){ 
    if (answer === answers['ans2']) {
        score++;
        changeJsScore();
        showPopup();
        question3();
        success++;
        answer = "";
        console.log("answer2 runs");
        checkAnswerBtn2.style.display = 'none';
        checkAnswerBtn3.classList.add('show');
        quizType.textContent = 'Riddle'
    } else if (answer !== answers['ans2']) {
        option4.style.backgroundColor = '#5FD068';
        option4.style.color = '#fff'
        refreshBtn.classList.add('show');
        checkAnswerBtn2.style.display = 'none';
        incorrectState();
    }
}

function question3() {
    const q3 = questions['question3'];
    const opt_1 = options_3['opt1'];
    const opt_2 = options_3['opt2'];
    const opt_3 = options_3['opt3'];
    const opt_4 = options_3['opt4'];
    questionTitle.textContent = q3;
    optionEl1.textContent  = opt_1;
    optionEl2.textContent  = opt_2;
    optionEl3.textContent  = opt_3;
    optionEl4.textContent  = opt_4;
}
    function checkAnswer3(){ 
    if (answer === answers['ans3']) {
        score++;
        changeJsScore();
        showPopup();
        question4();
        success++;
        answer = "";
        console.log("answer3 runs");
        checkAnswerBtn3.style.display = 'none';
        checkAnswerBtn4.classList.add('show');
        quizType.textContent = 'Geography';
    } else if (answer !== answers['ans3']) {
        option3.style.backgroundColor = '#5FD068';
        option3.style.color = '#fff';
        refreshBtn.classList.add('show');
        checkAnswerBtn3.style.display = 'none';
        incorrectState();
    
    }
}

function question4() {
    const q4 = questions['question4'];
    const opt_1 = options_4['opt1'];
    const opt_2 = options_4['opt2'];
    const opt_3 = options_4['opt3'];
    const opt_4 = options_4['opt4'];
    questionTitle.textContent = q4;
    optionEl1.textContent  = opt_1;
    optionEl2.textContent  = opt_2;
    optionEl3.textContent  = opt_3;
    optionEl4.textContent  = opt_4;
}
    function checkAnswer4(){ 
    if (answer === answers['ans4']) {
        score++;
        changeJsScore();
        showPopup();
        // question5();
        success++;
        answer = "";
        console.log("answer4 runs");
        checkAnswerBtn4.style.display = 'none';
        // checkAnswerBtn5.classList.add('show');
        console.log(success)
        quizContainer.innerHTML = 'Questions will be added soon, hoping procrastination wont visit me';
    } else if (answer !== answers['ans4']) {
        option1.style.backgroundColor = '#5FD068';
        option1.style.color = '#fff'
        refreshBtn.classList.add('show');
        checkAnswerBtn4.style.display = 'none';
        incorrectState();
        console.log('else if runs answer4');
    }
}

function incorrectState() {
    option1.classList.add('incorrect-state');
    option3.classList.add('incorrect-state');
    option2.classList.add('incorrect-state');
    option4.classList.add('incorrect-state');
}

function removeIncorrectState() {
    option1.classList.remove('incorrect-state');
    option3.classList.remove('incorrect-state');
    option2.classList.remove('incorrect-state');
    option4.classList.remove('incorrect-state');
}

function showPopup() {
    popUp.style.display = 'block';
    blurBg();
}

function clickOk() {
    popUp.style.display = 'none';
    removeIncorrectState()
    option1.classList.remove('invoke');
    option2.classList.remove('invoke');
    option3.classList.remove('invoke');
    option4.classList.remove('invoke');
    quizContainer.style.opacity = '100';
}

function blurBg(){
    quizContainer.style.opacity = '0.2';
}

okBtn.addEventListener("click", clickOk);

function changeJsScore(){
    document.querySelector('#js-score-number').textContent = score;
}

option1.addEventListener('click', () => {
    option1.classList.add('invoke');
    option2.classList.remove('invoke');
    option3.classList.remove('invoke');
    option4.classList.remove('invoke');
    answer = answers.ans4;
});
option2.addEventListener('click', () => {
    option2.classList.add('invoke');
    option1.classList.remove('invoke');
    option3.classList.remove('invoke');
    option4.classList.remove('invoke');
    answer = answers.ans1;
});
option3.addEventListener('click', () => {
    option3.classList.add('invoke');
    option1.classList.remove('invoke');
    option2.classList.remove('invoke');
    option4.classList.remove('invoke');
    answer = answers.ans3;
});
option4.addEventListener('click', () => {
    option4.classList.add('invoke');
    option1.classList.remove('invoke');
    option2.classList.remove('invoke');
    option3.classList.remove('invoke');
     answer = answers.ans2;
});

function refreshPage(){
   setTimeout(function(){
    location.reload();
   }, 1000);
}