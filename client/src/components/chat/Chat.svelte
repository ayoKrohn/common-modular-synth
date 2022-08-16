<script>
import {username, roomname} from "../../store/globalStore.js"

export let socket;

let message = "";

//vi behøver kun $: når vi instansiere et reaktivt objekt, 
//efterfølgende kan vi refere til det uden $
$:messages = [{
    username: "ayo", 
    message: "har det feeedt"
},
{
    username: "Jimmy", 
    message: "har det også feeedt"
}
];

const submitMessage = () => {
    const chatObject = { username: $username, message, roomname: $roomname };
    socket.emit("send-message", (chatObject));
    console.log(chatObject);
    
}

socket.on("new-message", (chatObject) => {
    messages.push(chatObject);
    messages = messages;
}
)

</script>
<div class="chat">
    <div class="input">
        <input
        bind:value={message} type="text">
        <button on:click={submitMessage}>Send</button>
    </div>
    <div class="container">
        {#each messages as message}
        <p class="name">{message.username}</p>
        <p class="message">{message.message}</p>
        {/each}
    </div>
    
</div>

<style>
    .chat {
        margin: auto;
        width: 70%;
        padding: 10px;
        
    }

    input {
        z-index: 1;
    }

    .name {
     background-color: antiquewhite;
     padding: 10px 0 10px 20px;
    }

    .message {
     background-color: aliceblue;
     padding: 10px 0 10px 20px;   
    }

    
</style>