<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	//import { loggedInUser } from "./store/globalStore.js";

	const navigate = useNavigate();
	const location = useLocation();

	let user = localStorage.getItem("user") || false;

	$: if (!user) {
		navigate("/login", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if user}
	<slot />
{/if}