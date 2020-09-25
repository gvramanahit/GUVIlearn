import { AddMusic,MyPlayList,songConfig } from './AddMusic'



//To create container
let container = document.createElement('div');
container.setAttribute('class','container');

//To Design 'All Songs'
let divMainOne = document.createElement('div');
divMainOne.setAttribute('class','row');

let allSongsBox = document.createElement('div');
allSongsBox.setAttribute('class','col-lg-5 col-md-5 col-sm-12 box mt-5');
let headerOne = document.createElement('h3');
headerOne.setAttribute('class','header')
headerOne.innerHTML = 'All Songs';

let blankBox = document.createElement('div');
blankBox.setAttribute('class','col-2');

//To Design 'My Playlist'
let myPlaylistBox = document.createElement('div');
myPlaylistBox.setAttribute('class','col-lg-5 col-md-5 col-sm-12 box mt-5');
myPlaylistBox.setAttribute('id','myplaylistbox');
let headerTwo = document.createElement('h3');
headerTwo.setAttribute('class','header')
headerTwo.innerHTML = 'My Playlist';


//To Design 'Audio Player'
let divMainTwo = document.createElement('div');
divMainTwo.setAttribute('class','row');

let blankBox1 = document.createElement('div');
blankBox1.setAttribute('class','col-3');

let audioPlayerBox = document.createElement('div');
audioPlayerBox.setAttribute('class','col-lg-6 col-md-6 col-sm-12 box mt-5');
audioPlayerBox.setAttribute('id','audioplayerbox');
let headerThree = document.createElement('h3');
headerThree.setAttribute('class','header header1')
headerThree.innerHTML = 'Player';
let playListBtn = document.createElement('button');
playListBtn.setAttribute('class','btn buttonB');
playListBtn.innerHTML = 'Add to playlist';
playListBtn.setAttribute('id','playlistbutton');
headerThree.append(playListBtn);
let songTitleDiv = document.createElement('div');
songTitleDiv.setAttribute('id','songtitle');
songTitleDiv.innerHTML = 'Song    :';
let artistDiv = document.createElement('div');
artistDiv.setAttribute('id','artist');
artistDiv.innerHTML = 'Artist :'
let albumDiv = document.createElement('div');
albumDiv.setAttribute('id','album');
albumDiv.innerHTML = 'Album :'

//To design the buttons
let volDownBtn = document.createElement('button');
volDownBtn.setAttribute('class','btn button');
volDownBtn.setAttribute('id','voldownbtn');
volDownBtn.innerHTML = 'V-';
volDownBtn.onclick= () => {
    if(audObjG.volume > 0){
        let vol:number = Number(audObjG.volume.toFixed(2));
        audObjG.volume = vol - 0.05;
    }
}
let prevBtn = document.createElement('button');
prevBtn.setAttribute('class','btn ml-2 button');
prevBtn.setAttribute('id','prev');
prevBtn.innerHTML = '|<';
prevBtn.onclick = () => {
    if (songIndexG === 0){
        songIndexG = playSongs.length-1;
    }
    else{
        songIndexG--;
    }
    (<HTMLElement>document.getElementById('songtitle')).innerHTML = 'Song    :' + playSongs[songIndexG].songTitle;
    (<HTMLElement>document.getElementById('album')).innerHTML = 'Artist :' + playSongs[songIndexG].artist;
    (<HTMLElement>document.getElementById('artist')).innerHTML = 'Album   :' + playSongs[songIndexG].album;
    (<HTMLButtonElement>document.getElementById('playpause')).innerHTML = '||'
    playPauseFlag = false;
    audObjG.src = 'songs/'+playSongs[songIndexG].songTitle;
    audObjG.play();
}
let playPauseBtn = document.createElement('button');
playPauseBtn.setAttribute('class','btn ml-2 button playbutton');
playPauseBtn.setAttribute('id','playpause');
playPauseBtn.innerHTML = 'Play';
let nextBtn = document.createElement('button');
nextBtn.setAttribute('class','btn ml-2 button');
nextBtn.setAttribute('id','next');
nextBtn.innerHTML = '>|';
nextBtn.onclick = () => {
    if (songIndexG === playSongs.length-1){
        songIndexG = 0;
    }
    else{
        songIndexG++;
    }
    (<HTMLElement>document.getElementById('songtitle')).innerHTML = 'Song    :' + playSongs[songIndexG].songTitle;
    (<HTMLElement>document.getElementById('album')).innerHTML = 'Artist :' + playSongs[songIndexG].artist;
    (<HTMLElement>document.getElementById('artist')).innerHTML = 'Album   :' + playSongs[songIndexG].album;
    (<HTMLButtonElement>document.getElementById('playpause')).innerHTML = '||'
    playPauseFlag = false;
    audObjG.src = 'songs/'+playSongs[songIndexG].songTitle;
    audObjG.play();
}
let volUpBtn = document.createElement('button');
volUpBtn.setAttribute('class','btn ml-2 button');
volUpBtn.setAttribute('id','volupbtn');
volUpBtn.innerHTML = 'V+';
volUpBtn.onclick = () => {
    console.log(audObjG.volume);
    if(audObjG.volume < 1){
    let vol:number = Number(audObjG.volume.toFixed(2));
    audObjG.volume = vol + 0.05;
    }
}

allSongsBox.append(headerOne);
myPlaylistBox.append(headerTwo);
audioPlayerBox.append(headerThree,songTitleDiv,artistDiv,albumDiv,volDownBtn,prevBtn,playPauseBtn,nextBtn,volUpBtn);
divMainOne.append(allSongsBox,blankBox,myPlaylistBox)
divMainTwo.append(blankBox1,blankBox1,audioPlayerBox)
container.append(divMainOne,divMainTwo);
document.body.append(container);



let newSong = new AddMusic();
newSong.addSong({songTitle:'Chellamma.mp3',artist:'Anirudh',album:'Doctor'});
newSong.addSong({songTitle:'Kaattupayalae.mp3',artist:'GV Prakash',album:'Soorarai Potru'});
newSong.addSong({songTitle:'KKK.mp3',artist:'Anirudh',album:'KKK'});
newSong.addSong({songTitle:'PUBG.mp3',artist:'unknown',album:'unknown'});
newSong.addSong({songTitle:'TIKTOK.mp3',artist:'unknown',album:'unknown'});

let playList = new MyPlayList();
var allSongs:Array<songConfig> = newSong.getSongs();
let playListSongs:Array<songConfig> = playList.getSongs();
let playSongs:Array<songConfig> = allSongs.map((element) => {
    return element;
})
let songIndexG:number = 0;
let audObjG = new Audio();
audObjG.src = 'songs/'+playSongs[songIndexG].songTitle;
let playPauseFlag:boolean = true;

(<HTMLElement>document.getElementById('songtitle')).innerHTML = 'Song    :' + playSongs[songIndexG].songTitle;
(<HTMLElement>document.getElementById('album')).innerHTML = 'Artist :' + playSongs[songIndexG].artist;
(<HTMLElement>document.getElementById('artist')).innerHTML = 'Album   :' + playSongs[songIndexG].album;


for(let i=0;i<allSongs.length;i++){
    let songDiv = document.createElement('div');
    songDiv.setAttribute('class','songdiv')
    songDiv.innerHTML = allSongs[i].songTitle;
    songDiv.onclick = () => {
        playSongs.length = 0;
        playSongs = allSongs.map((element) => {
            return element;
        })
        playSong(i,playSongs);
    };
    allSongsBox.appendChild(songDiv);
}

function playSong(songIndex:number,currentSongs:Array<songConfig>){
    (<HTMLElement>document.getElementById('songtitle')).innerHTML = 'Song    :' + currentSongs[songIndex].songTitle;
    (<HTMLElement>document.getElementById('album')).innerHTML = 'Artist :' + currentSongs[songIndex].artist;
    (<HTMLElement>document.getElementById('artist')).innerHTML = 'Album   :' + currentSongs[songIndex].album;
    songIndexG = songIndex;
    audObjG.src = 'songs/'+currentSongs[songIndexG].songTitle;
    audObjG.play();
}

(<HTMLButtonElement>document.getElementById('playlistbutton')).onclick = () => {
    let found:boolean = false;

    for (let i=0;i<playListSongs.length;i++){
        if(playListSongs[i].songTitle ===  playSongs[songIndexG].songTitle){
            found = true;
            alert('This song has been added to the playlist already!')
        }
    }
    if( !found || playListSongs.length === 0){
        playListSongs.push(playSongs[songIndexG]);
    }

    (<HTMLDivElement>document.getElementById('myplaylistbox')).innerHTML = ''
    myPlaylistBox.append(headerTwo);
    for(let i=0;i<playListSongs.length;i++){
        let songDiv = document.createElement('div');
        songDiv.setAttribute('class','songdiv')
        songDiv.innerHTML = playListSongs[i].songTitle;
        songDiv.onclick = () => {
            playSongs.length = 0;
            playSongs = playListSongs.map((element) => {
                return element;
        })
        playSong(i,playSongs);
    };
    myPlaylistBox.appendChild(songDiv);
    }

}

(<HTMLButtonElement>document.getElementById('playpause')).onclick = () => {
    if (playPauseFlag){
        (<HTMLButtonElement>document.getElementById('playpause')).innerHTML = '||'
        audObjG.play();
        playPauseFlag = false;
    }
    else {
        audObjG.pause();
        (<HTMLButtonElement>document.getElementById('playpause')).innerHTML = 'Play'
        playPauseFlag = true;
    }
    

}