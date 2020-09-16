const quizData = [];
let quesCount = 0;
progressWidth = 0;
let totalScore = 0;

async function codeFlow(){
    await getQuizData();
    insertData(quesCount);
}

// FETCH THE QUIZ QUESTIONS FROM OPENDB API.
async function getQuizData(){
    try{
        let dataPromise = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
        let data =  await dataPromise.json();
        let data1 = await data.results;
        data1.forEach(element => {
            quizData.push(element);
        });
    } 
    catch(error){
        console.error(error);
    }
}

function insertData(count){
    if (count <= 9) {
        clearData();
        progressWidth = progressWidth + 10;
        document.getElementById('progressText').innerHTML = 'Question ' + (quesCount + 1) + '/10';
        document.getElementById('progressBar').style = 'width: ' + progressWidth + '%';
        document.getElementById('progressBar').setAttribute('aria-valuenow',progressWidth);
        document.getElementById('scoreVal').innerHTML = totalScore;
        document.getElementById('question').innerHTML = quizData[count].question;
        document.getElementById('answerA').innerHTML = quizData[count].correct_answer;
        document.getElementById('answerB').innerHTML = quizData[count].incorrect_answers[0];
        document.getElementById('answerC').innerHTML = quizData[count].incorrect_answers[1];
        document.getElementById('answerD').innerHTML = quizData[count].incorrect_answers[2];
        quesCount++;   
    }
    else{
        localStorage.setItem('totalScore',totalScore);
        window.location.href = 'end.html';
    }
}

function clearData(){
    document.getElementById('progressText').innerHTML = '';
    document.getElementById('scoreVal').innerHTML = '';
    document.getElementById('question').innerHTML = '';
    document.getElementById('answerA').innerHTML = '';
    document.getElementById('answerB').innerHTML = '';
    document.getElementById('answerC').innerHTML = '';
    document.getElementById('answerD').innerHTML = '';
}

function toggleClass(ans){
   setOldClass();
   ans.setAttribute('class','col-11 answer-active');
}

function setOldClass(){
   document.getElementById('answerA').setAttribute('class','col-11 choice-text');
   document.getElementById('answerB').setAttribute('class','col-11 choice-text');
   document.getElementById('answerC').setAttribute('class','col-11 choice-text');
   document.getElementById('answerD').setAttribute('class','col-11 choice-text');
}

function saveAnswers(){
    let answerText = '';
    switch (true) {
        case document.getElementById('answerA').classList.value === 'col-11 answer-active':
            answersText = document.getElementById('answerA').innerHTML;
            break;

        case document.getElementById('answerB').classList.value === 'col-11 answer-active':
            answersText = document.getElementById('answerB').innerHTML;
            break;

        case document.getElementById('answerC').classList.value === 'col-11 answer-active':
            answersText = document.getElementById('answerC').innerHTML;
            break;
    
        default:
            answersText = document.getElementById('answerD').innerHTML;
            break;
    }

    if (answersText === quizData[quesCount-1].correct_answer){
        totalScore += 10;
    }
}

function ifAnswered(){
    console.log(document.getElementById('answerA').classList.value);
    if(document.getElementById('answerA').classList.value === 'col-11 answer-active' ||
       document.getElementById('answerB').classList.value === 'col-11 answer-active' ||
       document.getElementById('answerC').classList.value === 'col-11 answer-active' ||
       document.getElementById('answerD').classList.value === 'col-11 answer-active'){
           return true;
       }
       else{
           return false;
       }
}

//DESIGN THE CONTAINER
let container = document.createElement('div');
container.setAttribute('class','container cust-container');
container.setAttribute('id','container');

//DESIGN THE HEADER DETAILS (Question Number & Score)
let headerOne = document.createElement('div');
headerOne.setAttribute('class','row mt-5');
let questionNbr = document.createElement('div');
questionNbr.setAttribute('class','col-4 question nopadding');
questionNbr.setAttribute('id','progressText');
questionNbr.innerHTML = 'Question ' + (quesCount + 1) + '/10';
let blank = document.createElement('div');
blank.setAttribute('class','col-6');
let score = document.createElement('div');
score.setAttribute('class','col-2 text-center question');
score.innerHTML = 'Score';
headerOne.append(questionNbr,blank,score);

//DESIGN THE HEADER DETAILS (Progress Bar & Score)
let headerTwo = document.createElement('div');
headerTwo.setAttribute('class','row mt-2');
let questionBar = document.createElement('div');
questionBar.setAttribute('class','col-4 progress nopadding');
questionBar.setAttribute('style','height :30px;')
let progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
progressBar.setAttribute('role','progressbar');
progressBar.setAttribute('style','width: 0%')
progressBar.setAttribute('aria-valuenow','0');
progressBar.setAttribute('aria-valuemin','0');
progressBar.setAttribute('aria-valuemax','100');
progressBar.setAttribute('id','progressBar');
let blank1 = document.createElement('div');
blank1.setAttribute('class','col-6');
let scoreVal = document.createElement('div');
scoreVal.setAttribute('class','col-2 score');
scoreVal.setAttribute('id','scoreVal');
scoreVal.innerHTML = '0';
questionBar.append(progressBar);
headerTwo.append(questionBar,blank1,scoreVal);

//DESIGN THE QUESTION AND ANSWER
let questionArea = document.createElement('div');
questionArea.setAttribute('class','row');

let question = document.createElement('div');
question.setAttribute('class','col-12 question mt-3 nopadding');
question.setAttribute('id','question');

let answerOne = document.createElement('div');
answerOne.setAttribute('class','row mt-2');
let optionA = document.createElement('div');
optionA.setAttribute('class','col-1 optionA');
optionA.innerHTML= 'A';
let answerA = document.createElement('a');
answerA.setAttribute('class','col-11 choice-text');
answerA.setAttribute('id','answerA');
answerA.setAttribute('href','#');
answerA.onclick = function(){
    toggleClass(this);
};
answerOne.append(optionA,answerA);

let answerTwo = document.createElement('div');
answerTwo.setAttribute('class','row mt-2');
let optionB = document.createElement('div');
optionB.setAttribute('class','col-1 optionA');
optionB.innerHTML= 'B';
let answerB = document.createElement('a');
answerB.setAttribute('class','col-11 choice-text');
answerB.setAttribute('id','answerB');
answerB.setAttribute('href','#');
answerB.onclick = function(){
    toggleClass(this);
};
answerTwo.append(optionB,answerB);

let answerThree = document.createElement('div');
answerThree.setAttribute('class','row mt-2');
let optionC = document.createElement('div');
optionC.setAttribute('class','col-1 optionA');
optionC.innerHTML= 'C';
let answerC = document.createElement('a');
answerC.setAttribute('class','col-11 choice-text');
answerC.setAttribute('id','answerC');
answerC.setAttribute('href','#');
answerC.onclick = function(){
    toggleClass(this);
};
answerThree.append(optionC,answerC);

let answerFour = document.createElement('div');
answerFour.setAttribute('class','row mt-2');
let optionD = document.createElement('div');
optionD.setAttribute('class','col-1 optionA');
optionD.innerHTML= 'D';
let answerD = document.createElement('a');
answerD.setAttribute('class','col-11 choice-text');
answerD.setAttribute('id','answerD');
answerD.setAttribute('href','#');
answerD.onclick = function(){
    toggleClass(this);
};
answerFour.append(optionD,answerD);

let saveNext = document.createElement('div');
saveNext.setAttribute('class','row mt-3');
let saveNextA = document.createElement('div');
saveNextA.setAttribute('class','col-12 text-right');
let resetBtn = document.createElement('button');
resetBtn.setAttribute('class','btn saveNext mr-2');
resetBtn.innerHTML = 'Go Home';
resetBtn.setAttribute('id','resetBtn');
resetBtn.onclick = function(){
    location.href = 'index.html'
}
let saveNextBtn = document.createElement('button');
saveNextBtn.setAttribute('class','btn saveNext');
saveNextBtn.innerHTML = 'Save & Next';
saveNextBtn.setAttribute('id','saveNextBtn');
saveNextBtn.onclick = function(){
    if (ifAnswered()){
        saveAnswers();
        setOldClass();
        insertData(quesCount);
    }
    else{
        alert('Please choose an answer!');
    }
}
saveNextA.append(resetBtn,saveNextBtn);
saveNext.append(saveNextA);


questionArea.append(question)
container.append(headerOne,headerTwo,questionArea,answerOne,answerTwo,answerThree,answerFour,saveNext);

document.body.append(container);     

codeFlow();   