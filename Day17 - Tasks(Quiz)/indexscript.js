   //CREATE CONTAINER
   let container = document.createElement('div');
   container.setAttribute('class','container cust-container');

   //CREATE DIVS
   let div1 = document.createElement('div');
   div1.setAttribute('class','row')
   let header = document.createElement('div');
   header.setAttribute('class','col-12 header');
   header.innerHTML = 'Quick Sports Quiz'
   div1.append(header);

   //CREATE BUTTONS
   let play = document.createElement('div');
   play.setAttribute('class','row');
   let playBtn = document.createElement('a');
   playBtn.setAttribute('class','col-12 mt-3 btn buttons');
   playBtn.setAttribute('id','play');
   playBtn.setAttribute('href','game.html');
   playBtn.innerHTML = 'Play';
   play.append(playBtn);

   let highScore = document.createElement('div');
   highScore.setAttribute('class','row');
   let highScoreBtn = document.createElement('a');
   highScoreBtn.setAttribute('class','col-12 mt-3 btn buttons');
   playBtn.setAttribute('id','highScores');
   highScoreBtn.setAttribute('href','highscores.html');
   highScoreBtn.innerHTML = 'High Scores';
   highScore.append(highScoreBtn);

   container.append(div1,play,highScore);
   document.body.append(container);