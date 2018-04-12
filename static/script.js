const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = document.querySelector('.container').offsetWidth;
let height = canvas.height = 200 ;



const audio = new Audio;
audio.src = "static/music/kare.mp3";
audio.controls = true;
audio.loop = true;
audio.autoplay = true;

document.querySelector('.container').appendChild(audio);
var AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
const analyser = context.createAnalyser();
const source = context.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(context.destination);
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
function frame(){
	requestAnimationFrame(frame);
	let array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(array);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = '#00CCFF';
	for(let i = 0 ; i < 50  ; i++){
		let x = i * 1000/50 + 6;
		let width = 8 ;
		let height =  - (array[i] / 2);
		ctx.fillRect(x,canvas.height,width,height);
	}
}
frame();

const  music = document.querySelectorAll('.music'); 
for(let i = 0 ; i< music.length ; i++ ){
	music[i].addEventListener('click',function(e){
		audio.src = this.getAttribute('data-name');
	});
}
