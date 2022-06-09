//questions-array
const questions = [
{
    serial: 1,
    que: "Which among the following constitutional amendment act, reduced the age of voting from 21 years to 18 years?",
    ans: "61st Amendment Act",
    option: [
    "59th Amendment Act", 
    "61st Amendment Act", 
    "60th Amendment Act", 
    "62nd Amendment Act"]
},
{
    serial: 2,
    que: "The Ninth Schedule was introduced in the Constitution of India during the prime ministership of?",
    ans: "Jawaharlal Nehru",
    option: [
    "Lal Bahadur Shastri", 
    "Jawaharlal Nehru", 
    "Indira Gandhi", 
    "Morarji Desai"]
},
{
    serial: 3,
    que: "What was the exact consitutional status of India on 26th January, 1950?",
    ans: "A Sovereign Democratic Republic",
    option: ["A Democratic Republic", 
    "A Sovereign Democratic Republic", 
    "A Sovereign Secular Democratic Republic", 
    "A Sovereign Socialist Secular Democratic Republic"]
},
{
    serial: 4,
    que: "What does constitutional government mean?",
    ans: "A government limited by the terms of the Constitution",
    option: [
    "A representative government of a nation with a federal structure", 
    "A government whose Head enjoys nominal powers", 
    "A government whose Head enjoys nominal powers", 
    "A government limited by the terms of the Constitution"]
},
{
    serial: 5,
    que: " At the national level, which ministry is the nodal agency to ensure effective implementation of the Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006?",
    ans: "Ministry of Tribal Affairs",
    option: [
    "Ministry of Environment, Forest and Climatic change", 
    "Ministry of Panchayati Raj", 
    "Ministry of Rural Development", 
    "Ministry of Tribal Affairs"]
},
{
    serial: 6,
    que: "Which one of the following in Indian polity is an essential feature that indicates that it is federal in character?",
    ans: "The independence of the judiciary is safeguarded",
    option: [
    "The independence of the judiciary is safeguarded", 
    "The Union Legislature has elected representatives from constituent units", 
    "The Union cabinet can have elected representatives from regional parties", 
    "The Fundamental rights are enforceable by Courts of Law"]
},
{
    serial: 7,
    que: "Which of the following factors constitutes the best safeguard of liberty in a liberal democracy?",
    ans: "Separation of powers",
    option: [
    "A committed judiciary", 
    "Centralization of powers", 
    "Elected government", 
    "Separation of powers"]
},
{
    serial: 8,
    que: "‘Right to Privacy’ is protected under which Article of the constitution of India?",
    ans: "Article 21",
    option: [
    "Article 15", 
    "Article 19", 
    "Article 21", 
    "Article 29"]
},
{
    serial: 9,
    que: "Which among the following is NOT a fundamental duty of a citizen?",
    ans:  "Respect for the government",
    option: [
    "Respect for the constitution", 
    "Respect for the National Flag", 
    "Respect for the National Anthem", 
    "Respect for the government"]
},
{
    serial: 10,
    que: "'Right to vote' can be placed in which among the following categories?",
    ans: "Legal Right",
    option: [
    "Fundamental Right", 
    "Constitutional Obligation", 
    "Fundamental Duty", 
    "Legal Right"]
}
]
//variables associated with the different div of quiz page
var timer = document.getElementById('timer');
var time = document.getElementById('time');
var score = document.getElementById('score');
var marks = document.getElementById('marks');
var timer = document.getElementById('timer');
var questNum = document.getElementById('quest');
var questText = document.querySelector('.questtext');
var answers = document.querySelectorAll('.answers button');
var optionBtn1 = document.getElementById('a');
var optionBtn2 = document.getElementById('b');
var optionBtn3 = document.getElementById('c');
var optionBtn4 = document.getElementById('d');
var nextBtn = document.getElementById('next');
var submitBtn = document.getElementById('submit');


//all sections of the quiz page
var section1 = document.querySelector(".header");
var section2 = document.querySelector(".question");
var section3 = document.querySelector(".answers");
var section4 = document.querySelector(".navigate");
var section5 = document.querySelector(".results");
section5.style.display = "none"; //hiding the result section when quiz is playing

//variables to control various operations in the quiz
let questionCount = 0; //for increasing question index value
let questionNumberDisplay = 1; // for displaying the question number over the question
var scoreCount = 0; //for incrementing score (correct answer)
var question_attempted = 0; //for counting number of attempted questions
var wrongCount = 0; //for counting wrong answer
var questionLength = questions.length;
var timeCount = 10; //timer for each question
var totalTimeCount = 10 * (questions.length); //timer for full quiz
var totalTimeTaken = 0; //for counting the remaining time or time taken
time.textContent = timeCount; //displaying the initial time on timer
var interval; //variable for starting the interval

//function to display the questions
function displayQuiz(index){
    questText.innerText = questions[index].que;
    optionBtn1.innerText = questions[index].option[0];
    optionBtn2.innerText = questions[index].option[1];
    optionBtn3.innerText = questions[index].option[2];
    optionBtn4.innerText = questions[index].option[3];
    questNum.innerText = questionNumberDisplay;
    //loop when options are clicked
    for(var j = 0; j < answers.length; j++){
        answers[j].setAttribute("onclick", "checkAnswer(this)")
    }
}

//definition of function when next button is clicked
function Nextquest(){
    clearInterval(interval); /*stopping the interval in case 
    next button clicked without attempting the question*/

    questionCount++; //increment of questions
    timeCount = 10; //reseting the timer

    //reseting the background colour of buttons
    optionBtn1.style.backgroundColor = 'white';
    optionBtn2.style.backgroundColor = 'white';
    optionBtn3.style.backgroundColor = 'white';
    optionBtn4.style.backgroundColor = 'white';

    //displaying the timer
    time.textContent = timeCount;
    startTimer(timeCount); //restarting the timer
    questionNumberDisplay++; //increasing the question number display

    //reactivating the buttons
    optionBtn1.disabled = false;
    optionBtn2.disabled = false;
    optionBtn3.disabled = false;
    optionBtn4.disabled = false;

    //checking for last question
    if(questions.length>questionCount){
        displayQuiz(questionCount);
    }else{
        console.log("exam over");
    }
    /*on last question activating the submit button 
    and deactivating the next button*/

    if(questions.length==questionCount+1){
        submitBtn.classList.remove("inactive");
        submitBtn.classList.add("active");
        nextBtn.classList.add("inactive");
        nextBtn.classList.remove("active");
    }
}
//definition of function to check the correct answer
function checkAnswer(answer){
    clearInterval(interval); //stopping the timer when an option selected
    question_attempted++; //counting the attempted question
    //disabling the buttons
    optionBtn1.disabled = true;
    optionBtn2.disabled = true;
    optionBtn3.disabled = true;
    optionBtn4.disabled = true;

    //variables for user input and actual correct answer from array
    let user_answer = answer.innerText;
    let correct_answer = questions[questionCount].ans;

    //checking if the question is correct
    if(user_answer == correct_answer){
        console.log("Correct");
        scoreCount++; //adding score
        console.log(scoreCount);
        answer.style.backgroundColor='#22F28A'; //showing the button color
    }else{
        wrongCount++;  //adding wrong answer
        console.log("Wrong: " + wrongCount);
        answer.style.backgroundColor='#F22279';
    }
    //displaying the score in the marks span
    marks.innerHTML = scoreCount;
    console.log("Attempted: "+ question_attempted);
}

//definition of timer function
function startTimer(timeCount){
        interval = setInterval(function(){
        time.textContent = timeCount; //displaying timer
        timeCount--; //decrement in timer for each question
        totalTimeCount--; //decrement in time for overall quiz
        /*calculating the time taken*/
        totalTimeTaken = ((10*(questions.length)) - (totalTimeCount));
        //printing on console for reference and enquiry
        console.log(totalTimeTaken);
        console.log(totalTimeCount);
        console.log(timeCount);

        //when time is in single digit
        if(timeCount < 10){
            time.textContent = "0" + timeCount;
        }
        //when time is up
        if(timeCount == 0){
            clearInterval(interval);
            time.textContent = "Time Up !";
            //disabling buttons
            optionBtn1.disabled = true;
            optionBtn2.disabled = true;
            optionBtn3.disabled = true;
            optionBtn4.disabled = true;
        }
        //when total time is exhausted
        if(totalTimeCount==(10*(questions.length))){
            clearInterval(interval);
        }
    }, 1000);
}
//initiation of page
if (questionCount == 0){
    displayQuiz(0);
}
//initiation of timer function
startTimer(timeCount);


//--------related to result page ------------------
var playerName = document.querySelector(".player-name span");
var totalTime = document.querySelector(".total-time span");
var totalQuestions = document.querySelector(".total-questions span");
var attemptedQuestions = document.querySelector(".attempted-questions span");
var correctQuestions = document.querySelector(".correct-answers span");
var incorrectQuestions = document.querySelector(".wrong-answers span");
var percentage = document.querySelector(".percentage span");

//function definition when submit button is clicked
function Submitresult(){
    /*adding and removing the required classlist 
    to deactivate the sections.
    only section 5 (result) section is activated to display results*/
    section1.classList.add("inactive")
    section1.classList.remove("header");
    section2.classList.add("inactive")
    section2.classList.remove("question");
    section3.classList.add("inactive")
    section3.classList.remove("answers");
    section4.classList.add("inactive")
    section4.classList.remove("navigate");
    //displaying the result section
    section5.style.display = "flex";
    //displaying the required values on result page
    playerName.innerHTML = localStorage.getItem("storedName");
    totalTime.innerHTML = totalTimeTaken;
    attemptedQuestions.innerHTML = question_attempted;
    correctQuestions.innerHTML = scoreCount;
    incorrectQuestions.innerHTML = wrongCount;
    totalQuestions.innerHTML = questionLength;
    percentage.innerHTML = ((scoreCount/questionLength)*100);
}









