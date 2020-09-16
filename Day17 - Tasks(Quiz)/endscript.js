let totalScore = 0;
let userScore = {};

//DESIGN THE CONTAINER
let container = document.createElement('div');
container.setAttribute('class','container cust-container');
container.setAttribute('id','container');

//DESIGN the score area
let scoreDiv = document.createElement('div');
scoreDiv.setAttribute('class','row');
let score = document.createElement('div');
score.setAttribute('class','col-12 text-center score');
score.setAttribute('id','score');
scoreDiv.append(score);

//DESIGN the input area
let inputDiv = document.createElement('div');
inputDiv.setAttribute('class','row');
let username = document.createElement('input');
username.setAttribute('class','col-12 inputbox mt-2');
username.setAttribute('id','username');
username.setAttribute('placeholder','Enter User name');
inputDiv.append(username);

//DESIGN the save button
let saveBtnDiv = document.createElement('div');
saveBtnDiv.setAttribute('class','row text-center mt-2');
let blankDiv1 = document.createElement('div');
blankDiv1.setAttribute('class','col-3');
let saveScoreBtn = document.createElement('button');
saveScoreBtn.setAttribute('class','col-6 btn text-center buttons');
saveScoreBtn.setAttribute('id','saveScoreBtn');
saveScoreBtn.disabled = true;
saveScoreBtn.innerHTML = 'Save'
saveBtnDiv.append(blankDiv1,saveScoreBtn);

//DESIGN the play again button
let playBtnDiv = document.createElement('div');
playBtnDiv.setAttribute('class','row text-center mt-2');
let blankDiv2 = document.createElement('div');
blankDiv2.setAttribute('class','col-3');
let playAgainBtn = document.createElement('button');
playAgainBtn.setAttribute('class','col-6 btn text-center buttons');
playAgainBtn.setAttribute('id','playAgain');
playAgainBtn.innerHTML = 'Play Again'
playAgainBtn.onclick = () => {
    window.location.href = 'game.html'
};
playBtnDiv.append(blankDiv2,playAgainBtn);


//DESIGN the Go home button
let homeBtnDiv = document.createElement('div');
homeBtnDiv.setAttribute('class','row text-center mt-2');
let blankDiv3 = document.createElement('div');
blankDiv3.setAttribute('class','col-3');
let goHomeBtn = document.createElement('button');
goHomeBtn.setAttribute('class','col-6 btn text-center buttons');
goHomeBtn.setAttribute('id','goHome');
goHomeBtn.innerHTML = 'Go Home';
goHomeBtn.onclick = () => {
    window.location.href = 'index.html';
};
homeBtnDiv.append(blankDiv3,goHomeBtn);



container.append(scoreDiv,inputDiv,saveBtnDiv,playBtnDiv,homeBtnDiv);
document.body.append(container);

getScore();


function getScore(){
    totalScore = localStorage.getItem('totalScore');
    document.getElementById('score').innerHTML = totalScore;
}

document.getElementById('username').onkeyup = () => {
    if (document.getElementById('username').value > ''){
        document.getElementById('saveScoreBtn').disabled = false;
    }
    else{
        document.getElementById('saveScoreBtn').disabled = true;
    }
}

document.getElementById('saveScoreBtn').onclick =() => {
    userScore['name'] = document.getElementById('username').value;
    userScore['score'] = totalScore;
    let stringScore = localStorage.getItem('scoreHistory');
    let scoreArray = [];
    let scoreArray1 = [];
    let scoreArray2 = [];
    scoreArray1.push(userScore);
    if (stringScore != null) {
        scoreArray2 =JSON.parse(stringScore);
    }
    scoreArray = scoreArray1.concat(scoreArray2);
    localStorage.setItem('scoreHistory',JSON.stringify(scoreArray));
    document.getElementById('saveScoreBtn').disabled = true;
    document.getElementById('username').disabled = true;
    alert('Thank you!')

}