import { BufferLoader } from "./bufferload-model_ES6.js"
import { View } from "./view_ES6.js"
import { Audio } from "./audio-model_ES6.js"

window.onload = () => {

	let bufferLoader = new BufferLoader(
		Audio.audioContext,
		[
			"MP3/A4.mp3",
			"MP3/A5.mp3",
			"MP3/C4.mp3",
			"MP3/C5.mp3",
			"MP3/D4.mp3",
			"MP3/D5.mp3",
			"MP3/E4.mp3",
			"MP3/E5.mp3",
			"MP3/G4.mp3",
			"MP3/G5.mp3",
		],
		finishedLoading
	);
  	bufferLoader.load();

    console.log(bufferLoader)
    console.log(bufferLoader.load())


    function finishedLoading(bufferList) {
		Audio.init(bufferList);

        // append canvas 
        const canvas = document.getElementById("canvas");
        const render = new View(canvas);
        
        // si no se utitliza el BIND, this se convierte en el canvas, ya no en el view object
        // render.handleClick == this == canvas
        // render.handleClick.bind(render) == this == view
        canvas.addEventListener('click', render.handleClick.bind(render), false);

        // cuidado con las arrow functions, cuando se ejecuta un metodo/funcion preferible NO ARROW
        setInterval(render.updateDisplay.bind(render), render.frameRate);
        // render.updateDisplay();
    }
    
}