let scores=[];
let displayLength = 0;

scores = JSON.parse(localStorage.getItem('scoreHistory'));

if (scores != null){
    if (scores.length > 5){
        displayLength = 5;
    }
    else{
        displayLength = scores.length
    }
    scores.sort((a,b) => b.score - a.score);
}


//CREATE CONTAINER
let container = document.createElement('div');
container.setAttribute('class','container cust-container');

//CREATE DIVS
let div1 = document.createElement('div');
div1.setAttribute('class','row')
let header = document.createElement('div');
header.setAttribute('class','col-12 header');
header.innerHTML = 'High Scores'
div1.append(header);
container.append(div1);

if(displayLength === 0){
    //DESIGN the scores div
    let scoresDiv = document.createElement('div');
    scoresDiv.setAttribute('class','row');
    let highScores = document.createElement('div');
    highScores.setAttribute('class','col-12 scores');
    highScores.innerHTML = 'Please play at least once to get your name up here!';
    scoresDiv.append(highScores);
    container.append(scoresDiv);
}
else{
    for (i=0;i<displayLength;i++){
        //DESIGN the scores div
        let scoresDiv = document.createElement('div');
        scoresDiv.setAttribute('class','row');
        let highScores = document.createElement('div');
        highScores.setAttribute('class','col-12 scores');
        highScores.innerHTML = scores[i].name + ' - ' + scores[i].score;
        scoresDiv.append(highScores);
        container.append(scoresDiv);
    }
}




//DESIGN the Go home button
let homeBtnDiv = document.createElement('div');
homeBtnDiv.setAttribute('class','row text-center mt-5');
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

container.append(homeBtnDiv);
document.body.append(container);