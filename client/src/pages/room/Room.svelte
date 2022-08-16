<script>
import {synthURL, roomname, username, isInRoom} from "../../store/globalStore.js"
//test er den variable der eksporteres default fra store.
//default gør at den altid eksportere denne variabel som kan kaldes
//hvad vi vil. Når vi henter specifikke elementer skal de i tuborg
//klammer. kun default er udeb tuborg klammer.
//import test from "../../store/globalStore.js"
import { navigate } from "svelte-navigator";

//vi modtager data fra parent component (navbar) som prop ->
//props er måden at sende data fra parent til child -
//med "export let" keyword 
export let socket;

let tempUsername = "";
let tempRoomname ="";


const joinRoom = () => {
    $roomname = tempRoomname;
    $username = tempUsername;
    $isInRoom = true;
    console.log(tempRoomname);
    socket.emit("join", {tempRoomname});
    navigate("/synth", {replace: true});
}


</script>

<body>
    <input class="username" 
    bind:value={tempUsername} 
    type="text" 
    placeholder="type your username"/>
    <input class="room-name" 
    bind:value={tempRoomname} 
    type="text"
    placeholder="type room name"/>
    <button on:click={joinRoom}>Join Room</button>
</body>