class Song {
    constructor() {
        this.title;
        this.author;
    }

    play() {
        console.log("Song playing!");
    }
}

const mySong = new Song("Bohemian Rhapsody","Queen");
mySong.play();