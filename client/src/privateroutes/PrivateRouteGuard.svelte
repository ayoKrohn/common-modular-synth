<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import {statusURL, loggedInUser } from "../store/globalStore.js";
	import { onMount } from "svelte";

	const navigate = useNavigate();
	const location = useLocation();

	//let user = localStorage.getItem("user") || false;
	//console.log(user)

	$: if (!$loggedInUser) {
		navigate("/login", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $loggedInUser}
	<slot />
{/if}