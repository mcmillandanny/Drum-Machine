console.log("Drum Machine");



// for cross browser

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();



// load some sound
const kickAudio = document.querySelector('audio.kickAudio');
const snareAudio = document.querySelector('audio.snareAudio');
const clapAudio = document.querySelector('audio.clapAudio');
const hihatAudio = document.querySelector('audio.hihatAudio');
const boomAudio = document.querySelector('audio.boomAudio');



const kickTrack = audioCtx.createMediaElementSource(kickAudio);
const snareTrack = audioCtx.createMediaElementSource(snareAudio);
const clapTrack = audioCtx.createMediaElementSource(clapAudio);
const hihatTrack = audioCtx.createMediaElementSource(hihatAudio);
const boomTrack = audioCtx.createMediaElementSource(boomAudio);


const kickPlayBtn = document.querySelector('.kickPlayButton');
const snarePlayBtn = document.querySelector('.snarePlayButton');
const clapPlayBtn = document.querySelector('.clapPlayButton');
const hihatPlayBtn = document.querySelector('.hihatPlayButton');
const boomPlayBtn = document.querySelector('.boomPlayButton');



let lowShelfFilter = audioCtx.createBiquadFilter();
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
document.querySelector('.lowShelfSlider').addEventListener('change', function() {
    lowShelfFilter.gain.value = this.value;
})

kickTrack
    .connect(analyser) 
    .connect(lowShelfFilter) 
    .connect(audioCtx.destination)

snareTrack
    .connect(analyser) 
    .connect(lowShelfFilter)
    .connect(audioCtx.destination)
    

clapTrack 
    .connect(analyser) 
    .connect(lowShelfFilter)
    .connect(audioCtx.destination)
    
    

hihatTrack
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(audioCtx.destination)

boomTrack
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(audioCtx.destination)
    
   



// play audio

window.addEventListener("keydown", function(event) {
    console.log(event)
    if (event.keyCode === 81) { // Q

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        snareAudio.play();
    }

    if (event.keyCode === 87) { // W

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        kickAudio.play();
    }
    
    if (event.keyCode === 69) { // E

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        clapAudio.play();
    }

    if (event.keyCode === 82) { // R

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        hihatAudio.play();
    }

    if (event.keyCode === 84) { // T
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        boomAudio.play();
    }

})



// volume
    // const gainNode = audioCtx.createGain();

    // const volumeControl = document.querySelector('[data-action="volume"]');
    // volumeControl.addEventListener('input', function() {
    //     gainNode.gain.value = this.value;
    // }, false);

// panning
// const pannerOptions = {pan: 0};
// const panner = new StereoPannerNode(audioCtx, pannerOptions);
// let panSlider = document.querySelector('[data-action="panner"]');


// panSlider.addEventListener('input', function() {
//     panner.pan.value = panSlider.value; 

// })



// canvas visualizer experiment 


// analyser.fftSize = 2048;
// var bufferLength = analyser.frequencyBinCount;
// var dataArray = new Uint8Array(bufferLength);


analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);



analyser.getByteTimeDomainData(dataArray);

let canvasElement = document.querySelector('#visualizer-canvas');
let canvasCtx = canvasElement.getContext('2d');
let resizeCanvas = () => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
}
window.addEventListener('load', resizeCanvas)
window.addEventListener('resize', resizeCanvas)



function draw() {

    
    // console.log("draw function!")
    // analyser.getByteTimeDomainData(dataArray);
    // canvasCtx.fillStyle = 'rgb(100, 100, 100)';
    // canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    // canvasCtx.lineWidth = 2;
    // canvasCtx.strokeStyle = getRandomColor();
    // canvasCtx.beginPath();
    // var sliceWidth = WIDTH * 1.0 / bufferLength;
    // var x = 0;

    // var drawVisual = requestAnimationFrame(draw);


    var barWidth = (canvasElement.width / bufferLength)// * 2.5;
    var barHeight;
    var x = 0;
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'rgb(0, 0, 0)';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;
        // console.log('barHeight', barHeight)

        canvasCtx.fillStyle = 'rgb(' + (barHeight*2.5) + ',50,50)';
        canvasCtx.fillRect(x,canvasElement.height-barHeight/2,barWidth,barHeight); // 
        // console.log(x,'  ' , HEIGHT-barHeight/2, '   ', barWidth, '   ', barHeight)
        // canvasCtx.lineWidth = 2;
        // canvasCtx.strokeStyle = getRandomColor();
        // canvasCtx.beginPath();
        x += barWidth + 1;
    }

    requestAnimationFrame(draw);
}; // draw()


    // for(var i = 0; i < bufferLength; i++) {
        
    //     var v = dataArray[i] / 128.0;
    //     var y = v * HEIGHT/2;
        
    //     if(i === 0) {
    //         canvasCtx.moveTo(x, y);
    //     } else {
    //         canvasCtx.lineTo(x, y);
    //     }
        
    //     x += sliceWidth;
    // }
    
    // for(var i = 0; i < bufferLength; i++) {
        
    //     var v = dataArray[i] / 128.0;
    //     var y = v * HEIGHT/2;
        
    //     if(i === 0) {
    //         canvasCtx.moveTo(x, y);
    //     } else {
    //         canvasCtx.lineTo(x, y);
    //     }
        
    //     x += sliceWidth;
    // }
    
    // canvasCtx.lineTo(canvasCtx.width, canvasCtx.height/2);
    // canvasCtx.stroke();
    
    
    

draw()


let timeStamp = Math.round(new Date().getTime()/1000)

console.log(timeStamp);



