<<<<<<< HEAD
<script>
	import router from 'page';
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Contact from "./pages/Contact.svelte";
	import Donation from "./pages/Donation.svelte"

	let page, params; 

	router('/', () => (page = Home));
	router('/About', () => (page = About));
	router('/Contact', () => (page = Contact));
	router('/Donation/:id', (ctx, next) => {
		params = ctx.params;
		next();
	} ,() => (page = Donation));
	router.start();


</script>


<svelte:component this={page} {params} />
=======
 <script>
	 import Home from './pages/Home.svelte'; 
 </script> 

 <Home />
>>>>>>> 808816c90a4a2bbc63391680ac4b0e25c8658538
