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
var boomAudio = document.querySelector('audio.boomAudio');
var openHatAudio = document.querySelector('audio.openhatAudio');
var rideAudio = document.querySelector('audio.rideAudio');
var tinkAudio = document.querySelector('audio.tinkAudio');
var tomAudio = document.querySelector('audio.tomAudio');
var bigBandAudio = document.querySelector('audio.bigBandAudio');
var marchAudio = document.querySelector('audio.marchAudio');
var bassAudio = document.querySelector('audio.bassAudio');
var ps1Audio = document.querySelector('audio.ps1Audio');
var anotherAudio = document.querySelector('audio.anotherAudio');
var heyAudio = document.querySelector('audio.heyAudio');

var kickTrack = audioCtx.createMediaElementSource(kickAudio);
var snareTrack = audioCtx.createMediaElementSource(snareAudio);
var clapTrack = audioCtx.createMediaElementSource(clapAudio);
var hihatTrack = audioCtx.createMediaElementSource(hihatAudio);
var boomTrack = audioCtx.createMediaElementSource(boomAudio);
var openHatTrack = audioCtx.createMediaElementSource(openHatAudio);
var rideTrack = audioCtx.createMediaElementSource(rideAudio);
var tinkTrack = audioCtx.createMediaElementSource(tinkAudio);
var tomTrack = audioCtx.createMediaElementSource(tomAudio);
var bigBandTrack = audioCtx.createMediaElementSource(bigBandAudio);
var marchTrack = audioCtx.createMediaElementSource(marchAudio);
var bassTrack = audioCtx.createMediaElementSource(bassAudio);
var ps1Track = audioCtx.createMediaElementSource(ps1Audio);
var anotherTrack = audioCtx.createMediaElementSource(anotherAudio);
var heyTrack = audioCtx.createMediaElementSource(heyAudio);

var kickPlayBtn = document.querySelector('.kickPlayButton');
var snarePlayBtn = document.querySelector('.snarePlayButton');
var clapPlayBtn = document.querySelector('.clapPlayButton');
var hihatPlayBtn = document.querySelector('.hihatPlayButton');
var boomPlayBtn = document.querySelector('.boomPlayButton');
var openHatPlayBtn = document.querySelector('.hithatPlayButton');
var ridePlayBtn = document.querySelector('.ridePlayButton');
var tinkPlayBtn = document.querySelector('.tinkPlayButton');
var tomPlayBtn = document.querySelector('.tomPlayButton');
var bigBandPlayBtn = document.querySelector('.bigBandPlayButton');
var marchPlayBtn = document.querySelector('.marchPlayButton');
var bassPlayBtn = document.querySelector('.bassPlayButton');
var ps1PlayBtn = document.querySelector('.ps1PlayButton');
var anotherPlayBtn = document.querySelector('.anotherPlayButton');
var heyPlayBtn = document.querySelector('.heyPlayButton');

var lowShelfFilter = audioCtx.createBiquadFilter();
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
document.querySelector('.lowShelfSlider').addEventListener('change', function () {
    lowShelfFilter.gain.value = this.value;
});

// volume
var gainNode = audioCtx.createGain();
var volumeControl = document.querySelector('[data-action="volume"]');

volumeControl.addEventListener('input', function () {
    gainNode.gain.value = this.value;
}, false);

// panning
var pannerOptions = { pan: 0 };
var panner = new StereoPannerNode(audioCtx, pannerOptions);

var panSlider = document.querySelector('[data-action="panner"]');

panSlider.addEventListener('input', function () {
    panner.pan.value = panSlider.value;
}, false);

kickTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

snareTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

clapTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

hihatTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

boomTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

openHatTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

rideTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

tinkTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

tomTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

bigBandTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

marchTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

bassTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

ps1Track.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

anotherTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

heyTrack.connect(analyser).connect(lowShelfFilter).connect(panner).connect(gainNode).connect(audioCtx.destination);

// play audio

snarePlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    snareAudio.play();

    TweenMax.fromTo(snarePlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

kickPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    kickAudio.play();

    TweenMax.fromTo(kickPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

hihatPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    kickAudio.play();
    TweenMax.fromTo(hihatPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

boomPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    kickAudio.play();
    TweenMax.fromTo(boomPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});
clapPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    clapAudio.play();

    TweenMax.fromTo(clapPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

openHatPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    openHatAudio.play();

    TweenMax.fromTo(openHatPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

ridePlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    rideAudio.play();

    TweenMax.fromTo(ridePlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

tinkPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    tinkAudio.play();

    TweenMax.fromTo(tinkPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

tomPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    tomAudio.play();

    TweenMax.fromTo(tomPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

bigBandPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    bigBandAudio.play();

    TweenMax.fromTo(bigBandPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

marchPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    marchAudio.play();

    TweenMax.fromTo(marchPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

bassPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    bassAudio.play();

    TweenMax.fromTo(bassPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

ps1PlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    ps1Audio.play();

    TweenMax.fromTo(ps1PlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

anotherPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    anotherAudio.play();

    TweenMax.fromTo(anotherPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

heyPlayBtn.addEventListener("click", function () {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    heyAudio.play();

    TweenMax.fromTo(heyPlayBtn, .3, {
        scale: .5
    }, {
        scale: 1
    });
});

window.addEventListener("keydown", function (event) {

    if (event.keyCode === 81) {
        // Q

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        kickAudio.play();
        TweenMax.fromTo(kickPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 87) {
        // W

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        hihatAudio.play();
        TweenMax.fromTo(hihatPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 69) {
        // E

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        clapAudio.play();
        TweenMax.fromTo(clapPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 82) {
        // R

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        snareAudio.play();
        TweenMax.fromTo(snarePlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 84) {
        // T

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        boomAudio.play();
        TweenMax.fromTo(boomPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 65) {
        // A

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        openHatAudio.play();
        TweenMax.fromTo(openHatPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 83) {
        // S

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        rideAudio.play();
        TweenMax.fromTo(ridePlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 68) {
        // D

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        tinkAudio.play();
        TweenMax.fromTo(tinkPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 70) {
        // F

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        tomAudio.play();
        TweenMax.fromTo(tomPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 90) {
        // Z

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        bigBandAudio.play();
        TweenMax.fromTo(bigBandPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 88) {
        // X

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        marchAudio.play();
        TweenMax.fromTo(marchPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 67) {
        // C

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        bassAudio.play();
        TweenMax.fromTo(bassPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 72) {
        // H

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        ps1Audio.play();
        TweenMax.fromTo(ps1PlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 74) {
        // J

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        anotherAudio.play();
        TweenMax.fromTo(anotherPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }

    if (event.keyCode === 75) {
        // K

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        heyAudio.play();
        TweenMax.fromTo(heyPlayBtn, .3, {
            scale: .5
        }, {
            scale: 1
        });
    }
});

// canvas visualizer 


analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

analyser.getByteTimeDomainData(dataArray);

var canvasElement = document.querySelector('#visualizer-canvas');
var canvasCtx = canvasElement.getContext('2d');
var resizeCanvas = function resizeCanvas() {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
};
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function draw() {

    var barWidth = canvasElement.width / bufferLength; // * 2.5;
    var barHeight;
    var x = 1;
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'rgba(0,0,50)';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        // console.log('barHeight', barHeight)

        canvasCtx.fillStyle = getRandomColor();
        canvasCtx.fillRect(x, canvasElement.height - barHeight / 1, barWidth, barHeight); // 

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


draw();

var timeStamp = Math.round(new Date().getTime() / 1000);

console.log(timeStamp);
//# sourceMappingURL=main.js.map
