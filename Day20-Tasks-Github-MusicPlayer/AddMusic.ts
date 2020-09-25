export interface songConfig{
    songTitle:string,
    artist:string,
    album:string
}

export class AddMusic{
    songs:Array<songConfig>;

    constructor(){
        this.songs = [];
    }

    addSong(songObj:songConfig):void{
        this.songs.push(songObj);
    }

    getSongs():Array<songConfig>{
        return this.songs;
    }
}

export class MyPlayList{
    songs:Array<songConfig>;

    constructor(){
        this.songs = [];
    }

    addSong(songObj:songConfig):void{
        this.songs.push(songObj);
    }

    getSongs():Array<songConfig>{
        return this.songs;
    }
}