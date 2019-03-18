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
const openHatAudio = document.querySelector('audio.openhatAudio');
const rideAudio = document.querySelector('audio.rideAudio');
const tinkAudio = document.querySelector('audio.tinkAudio');
const tomAudio = document.querySelector('audio.tomAudio');
const bigBandAudio = document.querySelector('audio.bigBandAudio');
const marchAudio = document.querySelector('audio.marchAudio');
const bassAudio = document.querySelector('audio.bassAudio');
const ps1Audio = document.querySelector('audio.ps1Audio');
const anotherAudio = document.querySelector('audio.anotherAudio');
const heyAudio = document.querySelector('audio.heyAudio');



const kickTrack = audioCtx.createMediaElementSource(kickAudio);
const snareTrack = audioCtx.createMediaElementSource(snareAudio);
const clapTrack = audioCtx.createMediaElementSource(clapAudio);
const hihatTrack = audioCtx.createMediaElementSource(hihatAudio);
const boomTrack = audioCtx.createMediaElementSource(boomAudio);
const openHatTrack = audioCtx.createMediaElementSource(openHatAudio);
const rideTrack = audioCtx.createMediaElementSource(rideAudio);
const tinkTrack = audioCtx.createMediaElementSource(tinkAudio);
const tomTrack = audioCtx.createMediaElementSource(tomAudio);
const bigBandTrack = audioCtx.createMediaElementSource(bigBandAudio);
const marchTrack = audioCtx.createMediaElementSource(marchAudio);
const bassTrack = audioCtx.createMediaElementSource(bassAudio);
const ps1Track = audioCtx.createMediaElementSource(ps1Audio);
const anotherTrack = audioCtx.createMediaElementSource(anotherAudio);
const heyTrack = audioCtx.createMediaElementSource(heyAudio);


const kickPlayBtn = document.querySelector('.kickPlayButton');
const snarePlayBtn = document.querySelector('.snarePlayButton');
const clapPlayBtn = document.querySelector('.clapPlayButton');
const hihatPlayBtn = document.querySelector('.hihatPlayButton');
const boomPlayBtn = document.querySelector('.boomPlayButton');
const openHatPlayBtn = document.querySelector('.hithatPlayButton');
const ridePlayBtn = document.querySelector('.ridePlayButton');
const tinkPlayBtn = document.querySelector('.tinkPlayButton');
const tomPlayBtn = document.querySelector('.tomPlayButton');
const bigBandPlayBtn = document.querySelector('.bigBandPlayButton');
const marchPlayBtn = document.querySelector('.marchPlayButton');
const bassPlayBtn = document.querySelector('.bassPlayButton');
const ps1PlayBtn = document.querySelector('.ps1PlayButton');
const anotherPlayBtn = document.querySelector('.anotherPlayButton');
const heyPlayBtn = document.querySelector('.heyPlayButton');





let lowShelfFilter = audioCtx.createBiquadFilter();
lowShelfFilter.type = "lowshelf";
lowShelfFilter.gain.value = 0;
lowShelfFilter.frequency.value = 2000;




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


// volume
const gainNode = audioCtx.createGain();
const volumeControl = document.querySelector('[data-action="volume"]');

volumeControl.addEventListener('input', function() {
        gainNode.gain.value = this.value;
    }, false);

// panning
const pannerOptions = {pan: 0};
const panner = new StereoPannerNode(audioCtx, pannerOptions);

let panSlider = document.querySelector('[data-action="panner"]');

panSlider.addEventListener('input', function() {
    panner.pan.value = panSlider.value; 
}, false)

kickTrack    
    .connect(analyser) 
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)
    
   

snareTrack
    .connect(analyser) 
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)
    

clapTrack 
    .connect(analyser) 
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)
    
    
    

hihatTrack
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

boomTrack
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)
    
openHatTrack
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

rideTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

tinkTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

tomTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

bigBandTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

marchTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

bassTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

ps1Track 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

anotherTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)

heyTrack 
    .connect(analyser)    
    .connect(lowShelfFilter)
    .connect(panner)
    .connect(gainNode)
    .connect(audioCtx.destination)


// play audio

snarePlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        snareAudio.play();

        TweenMax.fromTo(snarePlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

kickPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        kickAudio.play();

        TweenMax.fromTo(kickPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})


hihatPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        kickAudio.play();
        TweenMax.fromTo(hihatPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

boomPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        kickAudio.play();
        TweenMax.fromTo(boomPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})
clapPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        clapAudio.play();

        TweenMax.fromTo(clapPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

openHatPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        openHatAudio.play();

        TweenMax.fromTo(openHatPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

ridePlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        rideAudio.play();

        TweenMax.fromTo(ridePlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

tinkPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        tinkAudio.play();

        TweenMax.fromTo(tinkPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

tomPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        tomAudio.play();

        TweenMax.fromTo(tomPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

bigBandPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        bigBandAudio.play();

        TweenMax.fromTo(bigBandPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

marchPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        marchAudio.play();

        TweenMax.fromTo(marchPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

bassPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        bassAudio.play();

        TweenMax.fromTo(bassPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

ps1PlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        ps1Audio.play();

        TweenMax.fromTo(ps1PlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

anotherPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        anotherAudio.play();

        TweenMax.fromTo(anotherPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})

heyPlayBtn.addEventListener("click", () => {
   
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
        heyAudio.play();

        TweenMax.fromTo(heyPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )   
})


window.addEventListener("keydown", function(event) {

    if (event.keyCode === 81) { // Q

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        kickAudio.play();
        TweenMax.fromTo(kickPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        }    
    )}

    if (event.keyCode === 87) { // W

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        hihatAudio.play();
            TweenMax.fromTo(hihatPlayBtn, .3, {
                scale: .5,
            },
            {
                scale: 1,
            }    
 
   )}
    
    if (event.keyCode === 69) { // E

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        clapAudio.play();
        TweenMax.fromTo(clapPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 82) { // R

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        snareAudio.play();
        TweenMax.fromTo(snarePlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 84) { // T
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        boomAudio.play();
        TweenMax.fromTo(boomPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 65) { // A
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        openHatAudio.play();
        TweenMax.fromTo(openHatPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 83) { // S
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        rideAudio.play();
        TweenMax.fromTo(ridePlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 68) { // D
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        tinkAudio.play();
        TweenMax.fromTo(tinkPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 70) { // F
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        tomAudio.play();
        TweenMax.fromTo(tomPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 90) { // Z
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        bigBandAudio.play();
        TweenMax.fromTo(bigBandPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 88) { // X
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        marchAudio.play();
        TweenMax.fromTo(marchPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 67) { // C
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        bassAudio.play();
        TweenMax.fromTo(bassPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}


    if (event.keyCode === 72) { // H
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
       ps1Audio.play();
       TweenMax.fromTo(ps1PlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode ===74) { // J
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
       anotherAudio.play();
       TweenMax.fromTo(anotherPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}

    if (event.keyCode === 75) { // K
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
       heyAudio.play();
       TweenMax.fromTo(heyPlayBtn, .3, {
            scale: .5,
        },
        {
            scale: 1,
        } 
    )}
})


// canvas visualizer 



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



    var barWidth = (canvasElement.width / bufferLength)// * 2.5;
    var barHeight;
    var x = 1;
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'rgba(0,0,50)';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;
        // console.log('barHeight', barHeight)

        canvasCtx.fillStyle = getRandomColor();
        canvasCtx.fillRect(x,canvasElement.height-barHeight/1,barWidth,barHeight); // 
 
        x += barWidth + 2;
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



