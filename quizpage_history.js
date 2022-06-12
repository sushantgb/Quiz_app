//questions-array
const questions = [
    {
        serial: 1,
        que: "Who among the following is associated with ‘Songs from Prison’, a translation of ancient Indian religious lyrics in English?",
        ans: "Mohandas Karamchand Gandhi",
        option: [
        "Bal Gangadhar Tilak", 
        "Jawaharlal Nehru", 
        "Mohandas Karamchand Gandhi", 
        "Sarojini Naidu"]
    },
    {
        serial: 2,
        que: "Who among the following was associated as Secretary with Hindu Female School which later came to be known as Bethune Female School?",
        ans: "Ishwar Chandra Vidyasagar",
        option: [
        "Annie Besant", 
        "Debandranath Tagore", 
        "Ishwar Chandra Vidyasagar", 
        "Sarojini Naidu"]
    },
    {
        serial: 3,
        que: "In the context of Colonial India, Shah Nawaz Khan, Prem Kumar Sehgal and Gurbaksh Singh Dhillon are remembered as?",
        ans: "officers of the Indian National Army",
        option: [
        "leaders of Swadeshi and Boycott Movement", 
        "members of the Interim Government in 1946", 
        "members of the Drafting Committee in the Constituent Assembly", 
        "officers of the Indian National Army"]
    },
    {
        serial: 4,
        que: "With reference to Madanapalle of Andhra Pradesh, which one of the following statements is correct??",
        ans: "Rabindranath Tagore translated the National Anthem from Bengali to English here",
        option: [
        "Pingali Venkayya designed the tricolour Indian National Flag here", 
        "Pattabhi Sitaramaiah led the Quit India Movement of Andhra region from here", 
        "Rabindranath Tagore translated the National Anthem from Bengali to English here", 
        "Madame Blavatsky and Colonel Olcott set up headquarters of Theosophical Society first here"]
    },
    {
        serial: 5,
        que: "Economically, one of the results of the British rule in India in the 19th century was the?",
        ans: "commercialization of Indian agriculture",
        option: [
        "increase in the export of Indian handicrafts", 
        "growth in the number of Indian owned factories", 
        "commercialization of Indian agriculture", 
        "rapid increase in the urban population"]
    },
    {
        serial: 6,
        que: "He wrote biographies of Mazzini, Garibaldi, Shivaji and Shrikrishna; stayed in America for some time; and was also elected to the Central Assembly. He was?",
        ans: "Lala Lajpat Rai",
        option: [
        "Aurobindo Ghosh", 
        "Bipin Chandra Pal", 
        "Lala Lajpat Rai", 
        "Motilal Nehru"]
    },
    {
        serial: 7,
        que: "Which one of the following statements does not apply to the system of Subsidiary Alliance introduced by Lord Wellesley?",
        ans: "To secure a fixed income for the Company",
        option: [
        "To maintain a large standing army at others expense", 
        "To keep India safe from Napoleonic danger", 
        "To secure a fixed income for the Company", 
        "To establish British paramountcy over the Indian States"]
    },
    {
        serial: 8,
        que: "Which of the Jain pilgrim place is associated with “Mahamastaka- Abhisheka festival”?",
        ans: "Shravanabelagola",
        option: [
        "Vaishali", 
        "Pavapuri", 
        "Vallabhi", 
        "Shravanabelagola"]
    },
    {
        serial: 9,
        que: "What was the philosophy of Saint Ramanujacharya?",
        ans: "Vishishtadvaita",
        option: [
        "Advaita", 
        "Dvaita", 
        "Nyaya", 
        "Vishishtadvaita"]
    },
    {
        serial: 10,
        que: "Tholpavakoothu is a folk art of which state?",
        ans: "Kerala",
        option: [
        "Tamil Nadu", 
        "Karnataka", 
        "Kerala", 
        "Andhra Pradesh"]
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
    
    
    
    
    
    
    
    
