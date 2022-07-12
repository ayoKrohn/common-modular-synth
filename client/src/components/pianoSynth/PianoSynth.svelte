<script>
	import * as Tone from "tone";
  import io from "socket.io-client";

  const socket = io();

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

  socket.on("play-note", ({data}) => {      
      if (data in keysAndNodes) {
        synth.triggerAttackRelease(keysAndNodes[data] , "8n");
        document.getElementById(data).classList.add('pressed');
      }    
  });

  // -- Play from keyboard -- //
  function playNoteKey(e){
      socket.emit("key-pressed", {data: e.key}); 
  } 

  function playNoteMouse(e){
      socket.emit("key-pressed", {data: e.target.id});
  }

  socket.on("lightup-key", ({data}) => {
      if (data in keysAndNodes) {
        document.getElementById(data).classList.add('pressed');
      }
  });

  function lightUpKey(e){
      socket.emit("key-light", {data: e.key});	 
  }

  socket.on("key-light-off", ({data}) => {
    if (data in keysAndNodes) {
      document.getElementById(data).classList.remove('pressed');
    }
  })
  
  function changeToNormalKeyColor(e) {
    let val;
    if (e.key == undefined) {
        // Mousey mouse
        val = e.target.id;
    } else {
        // Keyboard
        val = e.key;
    }

    socket.emit("turn-off-light", ({data: val}));
  }
</script>

<svelte:window on:keydown={playNoteKey} on:keyup={changeToNormalKeyColor}/>

<body>
    <div class="pianoPage">
        <h1 class="pressed">Piano</h1>
        <div class="piano">
           <div class="white-key" id="a" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div>  
           <div class="black-key" id="w" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="white-key" id="s" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="black-key" id="e" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="white-key" id="d" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="white-key" id="f" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="black-key" id="t" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div>
           <div class="white-key" id="g" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="black-key" id="y" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="white-key" id="h" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="black-key" id="u" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="white-key" id="j" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
           <div class="white-key" id="k" on:mousedown={playNoteMouse} on:mouseup={changeToNormalKeyColor}></div> 
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
        .pressed {
          background-color : yellow;  
        }
    </style>
	