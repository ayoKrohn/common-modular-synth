<script>
	import { Router, Route, Link } from "svelte-navigator";
	import { useNavigate, useLocation } from "svelte-navigator";
	import PrivateRoute from "../../PrivateRoute.svelte";
	import { isLoggedIn } from "../../store/globalStore.js";
	  
    import Home from "../../pages/home/Home.svelte";
	import Synth from "../../pages/synth/Synth.svelte";
	import Login from "../../pages/login/Login.svelte";
	import Signup from "../../pages/signup/Signup.svelte";
	import Profile from "../../pages/profile/Profile.svelte";

	
	//const navigate = useNavigate();
  	//const location = useLocation();

	let user = localStorage.getItem("user") || false;
	console.log(user);

	async function logout() {
		
    const res = await fetch("http://localhost:3000/api/users/logout");
		localStorage.removeItem("user");
		//navigate("/", { replace: true });
	}
	

</script>
<main>
<Router>
	<nav class="navbar">
		<Link to="/">Home</Link>
		
		{#if user}
        <Link to="/synth">Synth</Link>
		<Link to="/profile">Profile</Link>
		
		{:else} 
		<Link to="/login">Login</Link>
		<Link to="/signup">Signup</Link>
		{/if}
		<button on:click|preventDefault={logout}>Logout</button>

		
		
		<!-- <Link to="/cart"><img class="cart" src="images/shopping-cart.png" alt="Cart" /></Link> -->
	</nav>
	
		<Route path="/" component={Home}></Route>
		<Route path="/synth" component={Synth}></Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/signup" component={Signup}></Route>
		<PrivateRoute path="/profile" let:location component={Profile}>
			  <h3>Welcome {user}</h3>
		</PrivateRoute> 
	  </Router>
	  
	</main>
	  
	

<style>
	nav {
		position: relative;
		width: 100%;
		background-color: rgb(116, 242, 73);			
	}

	/*img {
	
  left: 10%;
  top: 10%;
  width: 10%;
  height: auto;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
	*/
</style>