console.log("Drum Machine");

// var snare = new AudioContext(),
// snareAudioSource = snare.createMediaElementSource(document.querySelector(".snareAudio")),
// filter = snare.createBiquadFilter();
// snareAudioSource.connect(filter);
// filter.connect(snare.destination);
// filter.type = "lowshelf";
// filter.frequency.value = 4000;
// filter.gain.value = 40;





console.clear();

// instigate our audio context

// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();



// load some sound
//KICK
const kickAudio = document.querySelector('audio.kickAudio');
const kickTrack = audioCtx.createMediaElementSource(kickAudio);
const kickPLayBtn = document.querySelector('.kickPlayButton');


// play pause audio

kickPLayBtn.addEventListener("click", function() {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    kickAudio.play();

})



// kickPLayBtn.addEventListener('click', function() {
	
// 	// check if context is in suspended state (autoplay policy)
// 	if (audioCtx.state === 'suspended') {
// 		audioCtx.resume();
// 	}
	
// 	if (this.dataset.playing === 'false') {
// 		kickAudio.play();
// 		this.dataset.playing = 'true';
// 	// if kickTrack is playing pause it
// 	} else if (this.dataset.playing === 'true') {
// 		kickAudio.pause();
// 		this.dataset.playing = 'false';
// 	}
	
// 	let state = this.getAttribute('aria-checked') === "true" ? true : false;
// 	this.setAttribute( 'aria-checked', state ? "false" : "true" );
	
// }, false);


// if kickTrack ends
// kickAudio.addEventListener('ended', () => {
// 	kickPLayBtn.dataset.playing = 'false';
// 	kickPLayBtn.setAttribute( "aria-checked", "false" );
// }, false);

// volume
    // const gainNode = audioCtx.createGain();

    // const volumeControl = document.querySelector('[data-action="volume"]');
    // volumeControl.addEventListener('input', function() {
    //     gainNode.gain.value = this.value;
    // }, false);

// panning
const pannerOptions = {pan: 0};
const panner = new StereoPannerNode(audioCtx, pannerOptions);

let panSlider = document.querySelector('[data-action="panner"]');

panSlider.addEventListener('input', function() {
    panner.pan.value = panSlider.value; 
    // console.log(panner);
    // console.log( panSlider.value )

})

// const pannerControl = document.querySelector('[data-action="panner"]');
// pannerControl.addEventListener('input', function() {
	// panner.pan.value = -1; //this.value;	
// }, false);






