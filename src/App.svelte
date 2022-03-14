<script>
	import router from 'page';
	import { page, params } from './stores/peges.js'
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Contact from "./pages/Contact.svelte";
	import Donation from "./pages/Donation.svelte";
	import Notfound from './pages/Notfound.svelte';
	import Success from "./pages/Success.svelte";
	import Failure from "./pages/Failure.svelte";


	// export let ready;
 
	router('/', () => ($page = Home));``
	router('/About', () => ($page = About));
	router('/Contact', () => ($page = Contact));
	router('/Success', () => ($page = Success));
	router('/error',() => ($page = Failure)) ;
	router('/Donation/:id', (ctx, next) => {
		$params = ctx.params;
		next();
	} ,() => ($page = Donation));
	router('/*', () => ($page = Notfound));

	router.start();
</script>


<svelte:component this={$page}  />