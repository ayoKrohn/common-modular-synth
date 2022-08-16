import { readable } from "svelte/store";
import { writable } from "svelte/store";

export const synthURL = "http://localhost:3000/api/synths";

export const loginURL = "http://localhost:3000/api/users/login";

export const signupURL = "http://localhost:3000/api/users/signup";

export const statusURL = "http://localhost:3000/api/users/status";


//Send bruger data - både login og signup  
/*export const fetchUser = async (userData) => {
    const options = makeOptions("POST", userData);
    const res = await fetch(loginURL, options);
    const user = await res.json()
    console.log(user);
    return res;
    } */

    /*if (res.ok) {
        console.log(res);
        toast.push("YES! Your credentials were approved for login");
      navigate("/", { replace: true });
    
    } else {
        toast.push("OBS! You credentials were not correct, try again!", {
            theme: {
              "--toastBackground": "#F56565",
              "--toastBarBackground": "#C53030",
            },
          }); */


  export const makeOptions = (method, body) => {
    const opt = {
    method: method,   
    headers: {
        "Content-type": "application/json",
      },
    };
    if (body) { //hvis der er en body som i post kald, sender vi body med
        opt.body = JSON.stringify({body});    
    } 
    return opt;
  } 

    export const amountOfItems = writable(0);

    export const cartItems = writable([]);

    export const isInRoom = writable(null);

    export const roomname = writable("");

    export const username = writable("");

    export const loggedInUser = writable("");


