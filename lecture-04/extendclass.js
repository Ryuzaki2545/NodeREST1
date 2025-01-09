class Media {
    constructor(info) {
        this.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Sond ({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});


console.log(mySong);