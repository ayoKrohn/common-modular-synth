<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { loginURL, isLoggedIn, makeOptions } from "../../store/globalStore.js";
  //import { toast } from "@zerodevx/svelte-toast";
  
  const navigate = useNavigate();
  const location = useLocation();
  
  let loginData= {};

  async function login(){
    const info = await fetch(loginURL, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({loginData})
    });
    console.log("heeeej0");
    const responseMessage = await info.json();
    console.log("heeeej2");
    
    if(info.ok){
      console.log(responseMessage);
      localStorage.setItem("user", JSON.stringify(responseMessage));

      navigate("/profile", { replace: true });
      return;
    } else {
       console.log("error");
    }};
  
 /* async function login() {
    const options = makeOptions("POST", loginData);
    const res = await fetch(loginURL, options);
    if (res.ok) { 
      let userInfo = await res.json();
      localStorage.setItem("user", userInfo.email);
      console.log(userInfo);
      //evt gem i store??
      //loggedinstatus gemmes i store 
      //email/username på bruger 
      
      navigate("/profile", { replace: true });
    } else {
      console.log("error");
      //navigate("/", { replace: true });
    }  
  }
      /*if (res.status === 200){
      responseMessage = await res.json();
      console.log(responseMessage);
      $loggedInUser = {...responseMessage};

       */

   
      
</script>

<div class="login">
<h1>Login</h1>
<form on:submit|preventDefault={login}>
<label for="email">Email</label>
<input type="text" placeholder="Email" name="email"  bind:value={loginData.email}>

<label for="password">Password</label>
<input type="password" name="password" bind:value={loginData.password}>
<button type="submit">Login</button>
</form>
</div>



   