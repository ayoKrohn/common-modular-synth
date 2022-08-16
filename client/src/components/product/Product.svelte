<script>
    import { onMount } from "svelte";
    import { synthURL, cartItems, amountOfItems } from "../../store/globalStore.js";
    
    export let products = [];
    
    onMount(async () => {
        const res = await fetch(synthURL);
        const { data: productArray } = await res.json();
        products = productArray;
    });
    
    
    const addToCart = (product) => {
            cartItems.update(items => [...items, product]);
            }
      
    </script>

<div class="product">
    {#each products as product}
    
        <h3>{product.productName}</h3>
        <p class="description">{product.description}</p>
        <p class="price">${product.price}<button class="addToCart" on:click={() => addToCart(product)}> Buy </button></p>
        <img src={product.image} alt="diy synthesizer kit" style="width:400px;height:300px;" />
        
    
    {/each}
</div>
   
    
    <style>
       .addToCart {
        padding: 10px;
        margin-left: 20px;
       }
        
    </style>