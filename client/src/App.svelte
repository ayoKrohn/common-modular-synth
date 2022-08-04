<script>
    import Navbar from "./components/navbar/Navbar.svelte";
    import { SvelteToast } from '@zerodevx/svelte-toast';
    

    const options = {
        theme: {
          "--toastBackground": "#48BB78"
    },
    };
    
    </script>
    <main>
    <SvelteToast {options} />
    <Navbar/>
   
    </main>
    <style>
        
    </style>


