<script>
	import PianoSynth from "../../components/pianoSynth/PianoSynth.svelte";
	import Chat from "../../components/chat/Chat.svelte";
	//vi sender en prop ned igennem til PianoSynth
	export let socket;


</script>
<div class="pianosynth">
<PianoSynth {socket}/>
</div>
<div class="chat">
<Chat {socket}/>
</div>

<style>
	.pianosynth {
		margin-top: 20px;
		margin-bottom: 100px;
	}
</style>

