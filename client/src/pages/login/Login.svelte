<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { loginURL, makeOptions, loggedInUser } from "../../store/globalStore.js";
  import { toast } from "@zerodevx/svelte-toast";
  
  const navigate = useNavigate();
  const location = useLocation();
  
  let email, password;
  

  async function login(){
    console.log("yo")
    console.log(email, password)
    const res = await fetch(loginURL, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({email, password})
    });

    if(res.ok){
    const data = await res.json();
    console.log(data);
      $loggedInUser = data;
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/profile", { replace: true });
      }
    else {
      toast.push("User doesnt exist", {
        theme: {
          "--toastBackground": "#F56565",
          "--toastBarBackground": "#C53030",
        },
      });
    }
  };
      
  
  
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
<input type="text" placeholder="Email" name="email"  bind:value={email}>

<label for="password">Password</label>
<input type="password" name="password" bind:value={password}>
<button type="submit">Login</button>
</form>
</div>



   