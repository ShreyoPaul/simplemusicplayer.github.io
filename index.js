let playPause = document.getElementById('play');
let forward = document.getElementById('forward');
let back = document.getElementById('back');
let title = document.getElementById('title');
let artist = document.getElementById('artist');
let pic = document.getElementById('pic');
let index = true;

let song = document.querySelector('audio');

let i=0;

let track_list = [
    {
        name: "Shape of You",
        artist: "Ed Sheeran",
        image: "./pics/shape of you.jpg",
        path: "./songs/shape of you.mp3"
    },
    {
        name: "Believer",
        artist: "Imagine Dragons",
        image: "./pics/believer.jpg",
        path: "./songs/believer.mp3"
    },
    {
        name: "Stereo Heart",
        artist: "Gym Class Heroes",
        image: "./pics/stereo heart.jpg",
        path: "./songs/stereo heart.mp3",
    },
];
console.log(track_list.length);

playPause.addEventListener('click', songControl);
forward.addEventListener('click', forwardplay);
back.addEventListener('click',backplay);

function songControl() {

    if (index) {
        song.src = `${track_list[i].path}`; 
        song.load();
        song.play();
        // alert('playing ' + track_list[i].name);
        pic.src = `${track_list[i].image}`;
        artist.innerHTML = `${track_list[i].artist}`
        title.innerHTML = `${track_list[i].name}`;
        playPause.innerHTML = 'pause_circle';
        index = false;
    }
    else{
        song.pause();
        // alert('pausing');
        //pause_circle
        playPause.innerHTML = 'play_circle';
        index = true;
    }
}

song.addEventListener('ended',forwardplay);

function forwardplay(){
    index = true;
    if(i==track_list.length-1) {
        i=0;
        // alert(i);
        songControl();
    }
    else {
        i++;
        songControl();
    }
}

function backplay(){
    index = true;
    if(i==0) {
        i=track_list.length-1;
        // alert(i);
        songControl();
    }
    else {
        i--;
        songControl();
    }
}

