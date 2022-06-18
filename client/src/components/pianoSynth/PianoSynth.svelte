<script>
	import * as Tone from "tone";
    
    const synth = new Tone.Synth().toDestination();

    const keysAndNodes = {
        "a" : "C4",
        "w" : "Db4",
        "s" : "D4",
        "e" : "Eb4",
        "d" : "E4",
        "f" : "F4",
        "t" : "Gb4",
        "g" : "G4",
        "y" : "Ab4",
        "h" : "A4",
        "u" : "Bb4",
        "j" : "B4",
        "k" : "C5" 
    }

    // Play from keyboard
    function playNote(e){
        let key = e.key;
        synth.triggerAttackRelease(keysAndNodes[key] , "8n");
        lightUpKey(key);
    } 
    
    function lightUpKey(key){
	document.getElementById(key).style.backgroundColor = 'yellow' ; 
}
    function changeToNormalKeyColor(e) {
       if (document.getElementById(e.key).className === "black-key svelte-16cpkzg") {  
        document.getElementById(e.key).style.backgroundColor = 'black';
       }
        else {
            document.getElementById(e.key).style.backgroundColor = 'white';
        }
    }

	// -- Play with mouse -- //
	
    function playC4() {
		synth.triggerAttackRelease("C4", "8n");
	} 
    function playDb4() {
		synth.triggerAttackRelease("Db4", "8n");
    }
    function playD4() {
		synth.triggerAttackRelease("D4", "8n");
    }
    function playEb4() {
		synth.triggerAttackRelease("Eb4", "8n");
    }
    function playE4() {
		synth.triggerAttackRelease("E4", "8n");
    }
    function playF4() {
		synth.triggerAttackRelease("F4", "8n");
    }
    function playGb4() {
		synth.triggerAttackRelease("Gb4", "8n");
    }
    function playG4() {
		synth.triggerAttackRelease("G4", "8n");
    }
    function playAb4() {
		synth.triggerAttackRelease("Ab4", "8n");
    }
    function playA4() {
		synth.triggerAttackRelease("A4", "8n");
    }
    function playBb4() {
		synth.triggerAttackRelease("Bb4", "8n");
    }
    function playB4() {
		synth.triggerAttackRelease("B4", "8n");
    }
    function playC5() {
		synth.triggerAttackRelease("C5", "8n");
    }

</script>
<svelte:window on:keydown={playNote} on:keyup="{changeToNormalKeyColor}"/>

<body>
    
    <div class="pianoPage">
        <h1>Piano</h1>
        <div class="piano">  
           <div class="white-key" id="a" on:click={playC4}></div>  
           <div class="black-key" id="w" on:click={playDb4}></div> 
           <div class="white-key" id="s" on:click={playD4}></div> 
           <div class="black-key" id="e" on:click={playEb4}></div> 
           <div class="white-key" id="d" on:click={playE4}></div> 
           <div class="white-key" id="f" on:click={playF4}></div> 
           <div class="black-key" id="t" on:click={playGb4}></div>
           <div class="white-key" id="g" on:click={playG4}></div> 
           <div class="black-key" id="y" on:click={playAb4}></div> 
           <div class="white-key" id="h" on:click={playA4}></div> 
           <div class="black-key" id="u" on:click={playBb4}></div> 
           <div class="white-key" id="j" on:click={playB4}></div> 
           <div class="white-key" id="k" on:click={playC5}></div> 
        </div>
    </div>
</body>

    <style>
        
        .pianoPage {
            align-items: center;
        }
        h1 {
            text-align: center;
        }
        .piano {
            display: flex;
            justify-content: center;
        }
        .white-key {
            border: 1px solid black;
            width: 100px;
            height: 400px;
            background-color: white;
        }
        .black-key {
            background-color: black;
            width: 60px;
            height: 250px;
            margin-left: -30px;
            margin-right: -30px;
            z-index: 1;
        }
    </style>
	