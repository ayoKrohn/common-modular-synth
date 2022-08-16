<script>
import Product from "../../components/product/Product.svelte";
</script>

<section class="banner">
    <div class="container">
        <img src="img/banner.png" class="w3-image" alt="welcome to diy synths" style="width:100%;max-width:900px">
        <div class="welcome">Welcome to</div>
        <div class="diy-synths">DIY SYNTHS</div>
    </div>
</section>
<section class="products">
    <Product/>
</section>

<style>
.container {
    position: relative;
    text-align: center;
    color: white;
    margin-top: 5%;
    margin-bottom: 5%;
}

.welcome {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
}

.diy-synths {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', Courier, monospace;
    font-size: 70px;  
}

</style>