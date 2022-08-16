<script>
    import {cartItems, amountOfItems} from "../../store/globalStore.js";
    //reaktiv variabel med $: og store kun med $
    $:currentItems = $cartItems;
    //tager imod callback + initialize value og lægger item.price
    //til
    $:totalSum = $cartItems.reduce((total, item) => {
        return total + item.price 
    }, 0);

    //find.index tager imod et predicate (true/false)
    // -> tager det første item der matcher
    //brug evt indexOf
    function deleteItem(input) {
       const itemIndex = $cartItems.findIndex((item) => {
          return item.productName === input.productName
    })
        $cartItems.splice(itemIndex, 1);
        currentItems = $cartItems;
        totalSum = totalSum; //vi reasigner for at opdaterer vores 
        //reaktive variabel
    };

    //reaktivitet sker først når vi reassigner en variabel til en ny
    //variabel

    
   
</script>
   
<div class="shopping-cart">
{#each currentItems as item}
<tr>
    <td>{item.productName}</td>
    <td>Price: {item.price}</td>
    <td>{item.description}</td>
    <button on:click={deleteItem(item)}>Delete item</button>
</tr>
{/each} 
<h3>{totalSum}</h3>

</div> 