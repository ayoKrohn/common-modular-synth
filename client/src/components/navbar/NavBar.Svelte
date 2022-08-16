<script>
	import { Router, Route, Link, useNavigate, useLocation } from "svelte-navigator";
	import PrivateRoute from "../../privateroutes/PrivateRoute.svelte";
	import { loggedInUser } from "../../store/globalStore.js";
	  
    import Home from "../../pages/home/Home.svelte";
	import Synth from "../../pages/synth/Synth.svelte";
	import Login from "../../pages/login/Login.svelte";
	import Signup from "../../pages/signup/Signup.svelte";
	import Profile from "../../pages/profile/Profile.svelte";
	import Cart from "../../pages/cart/Cart.svelte";
	import Room from "../../pages/room/Room.svelte";
	import io from "socket.io-client";

	const socket = io();

	async function logout() {
	const res = await fetch("http://localhost:3000/api/users/logout");
	$loggedInUser = "";
	};

</script>
<main>
<Router>
	<nav class="navbar">
	
	<div class="left-side">
		<Link to="/">Home</Link>
		<Link to="/room">Room</Link>
		<Link to="/synth">Synth</Link>
		<Link to="/cart">Cart</Link>
	</div>
	<div class="right-side">	
		{#if $loggedInUser}
        <Link to="/profile">Profile</Link>
		<button on:click={logout}>Logout</button>
		
		{:else} 
		<Link to="/login">Login</Link>
		<Link to="/signup">Signup</Link>
		{/if} 
	</div>
	</nav>
	
		<Route path="/" component={Home}></Route>
		<Route path="/synth">
		<Synth {socket}/></Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/signup" component={Signup}></Route>
		<Route path="/cart" component={Cart}></Route>
		<Route path="/room">
		<Room {socket}/></Route>
	
		<PrivateRoute path="/profile"> 
			<Profile/>
		</PrivateRoute> 
	  </Router>
	  
	</main>
<style>
	nav {
		position: relative;
		display: flex;
		justify-content: space-between;
		width: 100%;
		background-color: rgb(242, 73, 158);	
		padding: 20px;		
	}

	.right-side {
		margin-right: 40px;
	}
</style>