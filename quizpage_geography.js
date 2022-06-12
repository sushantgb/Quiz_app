//questions-array
const questions = [
    {
        serial: 1,
        que: "The black cotton soil of India has been formed due to the weathering of?",
        ans: "Fissure volcanic rock",
        option: [
        "Brown forest soil", 
        "Fissure volcanic rock", 
        "Granite and schist", 
        "Shale and limestone"]
    },
    {
        serial: 2,
        que: "With references to India, Didwana, Kuchaman, Sargol and khatu are the names of?",
        ans: "Saline lakes",
        option: [
        "Glaciers", 
        "Mangrove areas", 
        "Ramsar sites", 
        "Saline lakes"]
    },
    {
        serial: 3,
        que: "Among the following, which one is the least water-efficient crop?",
        ans: "Sugarcane",
        option: [
        "Sugarcane", 
        "Sunflower", 
        "Pearl Millet", 
        "Red Gram"]
    },
    {
        serial: 4,
        que: "Which one of the following pairs of islands is separated from each other by the ‘Ten Degree Channel’?",
        ans: "Andaman and Nicobar",
        option: [
        "Andaman and Nicobar", 
        "Nicobar and Sumatra", 
        "Maldives and Lakshadweep", 
        "Sumatra and Java"]
    },
    {
        serial: 5,
        que: "On the planet earth, most of the freshwater exists as ice caps and glaciers. Out of the remaining freshwater, the largest proportion?",
        ans: "exists as groundwater",
        option: [
        "is found in atmosphere as moisture and clouds", 
        "is found in freshwater lakes and rivers", 
        "exists as groundwater", 
        "exists as soil moisture"]
    },
    {
        serial: 6,
        que: "Among the following States, which one has the most suitable climatic conditions for the cultivation of a large variety of orchids with minimum cost of production, and can develop an export oriented industry in this field?",
        ans: "Arunachal Pradesh",
        option: [
        "Andhra Pradesh", 
        "Arunachal Pradesh", 
        "Madhya Pradesh", 
        "Uttar Pradesh"]
    },
    {
        serial: 7,
        que: "If a tropical rain forest is removed, it does not regenerate quickly as compared to a tropical deciduous forest. This is because?",
        ans: "the soil of rain forest is deficient in nutrients",
        option: [
        "the soil of rain forest is deficient in nutrients", 
        "propagules of the trees in a rain forest have poor viability", 
        "the rain forest species are slow-growing", 
        "exotic species invade the fertile soil of rain forest"]
    },
    {
        serial: 8,
        que: "The lower Gangetic plain is characterized by humid climate with high temperature throughout the year. Which one among the following pairs of crops is most suitable for this region?",
        ans: "Paddy and Jute",
        option: [
        "Paddy and cotton", 
        "Wheat and Jute", 
        "Paddy and Jute", 
        "Wheat and cotton"]
    },
    {
        serial: 9,
        que: "Contour bunding is a method of soil conservation used in:?",
        ans:  "low flat plains, close to stream courses, liable to flooding",
        option: [
        "desert margins, liable to strong wind action", 
        "low flat plains, close to stream courses, liable to flooding", 
        "scrublands, liable to spread of weed growth", 
        "None of the above"]
    },
    {
        serial: 10,
        que: "In which one among the following categories of protected areas in India are local people not allowed to collect and use the biomass?",
        ans: "National Parks",
        option: [
        "Biosphere Reserves", 
        "National Parks", 
        "Wetlands declared under Ramsar Convention", 
        "Wildlife Sanctuaries"]
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
    
    //home page button
    function HomeBtn(){
        parent.location='index.html';
        localStorage.clear();
    }
    
    
    
    
    
    
    
    
