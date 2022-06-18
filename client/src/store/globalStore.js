import { readable } from "svelte/store";
import { writable } from "svelte/store";

//vi henter en bruger i db 
export const fetchUser = async (userData) => {
    const options = makeOptions("POST", userData);
    const res = await fetch(loginURL, options);
    return res;
}

//generisk metode der indsætter options
const makeOptions = (method, body) => {
    const opt = {
    method: method,
    mode: "cors", //tillader cors
    credentials: "include", //læs op    
    headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      },
    };
    if (body) { //hvis der er en body som i post kald, sender vi body med
        opt.body = JSON.stringify(body);
    }
    return opt;
}
    export const amountOfItems = writable(0);

    export const cartItems = writable([]);

    export const loggedInUser = writable(null);


