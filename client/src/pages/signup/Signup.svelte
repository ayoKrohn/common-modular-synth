<script>
import { signupURL  } from "../../store/globalStore.js";

let newUser = {};

async function signup() {
    const res = await fetch(signupURL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newUser),
    });
}

</script>
<div class="signup">
    <h1>Signup</h1>
    <form>
    <label for="email">Email</label>
    <input type="text" placeholder="Email" name="email" bind:value={newUser.email}>
        
    <label for="password">Password</label>
    <input type="password" placeholder="password" name="password" bind:value={newUser.password}>
    <button type="submit" on:click={signup}>Sign Up</button>
    </form>
    </div>