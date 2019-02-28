'use strict';

console.log("Drum Machine");

// for cross browser

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();

// load some sound
var kickAudio = document.querySelector('audio.kickAudio');
var snareAudio = document.querySelector('audio.snareAudio');
var clapAudio = document.querySelector('audio.clapAudio');
var hihatAudio = document.querySelector('audio.hihatAudio');

var kickTrack = audioCtx.createMediaElementSource(kickAudio);
var snareTrack = audioCtx.createMediaElementSource(snareAudio);
var clapTrack = audioCtx.createMediaElementSource(clapAudio);
var hihatTrack = audioCtx.createMediaElementSource(hihatAudio);

var kickPlayBtn = document.querySelector('.kickPlayButton');
var snarePlayBtn = document.querySelector('.snarePlayButton');
var clapPlayBtn = document.querySelector('.clapPlayButton');
var hihatPlayBtn = document.querySelector('.hihatPlayButton');

var lowShelfFilter = audioCtx.createBiquadFilter();
lowShelfFilter.type = "lowshelf";
lowShelfFilter.gain.value = 0;
lowShelfFilter.frequency.value = 4000;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// make range slider control lowShelfFilter.frequency.value
document.querySelector('.lowShelfSlider').addEventListener('change', function () {
    lowShelfFilter.gain.value = this.value;
});

kickTrack.connect(analyser).connect(lowShelfFilter).connect(audioCtx.destination);

snareTrack.connect(analyser).connect(lowShelfFilter).connect(audioCtx.destination);

clapTrack.connect(analyser).connect(lowShelfFilter).connect(audioCtx.destination);

hihatTrack.connect(analyser).connect(lowShelfFilter).connect(audioCtx.destination);

// play pause audio

kickPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // audioCtx.play();
    kickAudio.play();
});

snarePlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // audioCtx.play();
    snareAudio.play();
});

clapPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // audioCtx.play();
    clapAudio.play();
});

hihatPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // audioCtx.play();
    hihatAudio.play();
});

// volume
// const gainNode = audioCtx.createGain();

// const volumeControl = document.querySelector('[data-action="volume"]');
// volumeControl.addEventListener('input', function() {
//     gainNode.gain.value = this.value;
// }, false);

// panning
var pannerOptions = { pan: 0 };
var panner = new StereoPannerNode(audioCtx, pannerOptions);
var panSlider = document.querySelector('[data-action="panner"]');

panSlider.addEventListener('input', function () {
    panner.pan.value = panSlider.value;
});

// canvas visualizer experiment 

var WIDTH = 500;
var HEIGHT = 500;

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

analyser.getByteTimeDomainData(dataArray);

var canvasCtx = document.querySelector('#visualizer-canvas').getContext('2d');
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
    // console.log("draw function!")
    analyser.getByteTimeDomainData(dataArray);
    canvasCtx.fillStyle = 'rgb(100, 100, 100)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = getRandomColor();
    canvasCtx.beginPath();
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT / 2;

        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    for (var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT / 2;

        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasCtx.lineTo(canvasCtx.width, canvasCtx.height / 2);
    canvasCtx.stroke();

    requestAnimationFrame(draw);
};

draw();

// console.log(bufferLength)
//# sourceMappingURL=main.js.map
