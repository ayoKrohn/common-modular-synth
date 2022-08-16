<script>
import { signupURL  } from "../../store/globalStore.js";

let email, password;

async function signup() {
    const res = await fetch(signupURL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({email, password})
    });
    if (res.ok) {
      console.log("juhuuu")
    } else {
      console.log("something went wrong")
    }
}

</script>
<div class="signup">
    <h1>Signup</h1>
    <form on:submit|preventDefault={signup}>
    <label for="email">Email</label>
    <input type="text" placeholder="Email" name="email" bind:value={email}>
        
    <label for="password">Password</label>
    <input type="password" placeholder="password" name="password" bind:value={password}>
    <button type="submit">Sign Up</button>
    </form>
    </div>