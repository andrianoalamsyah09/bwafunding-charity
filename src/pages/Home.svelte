<script>
<<<<<<< HEAD
	import CharityList from "../componets/CharityList.svelte";
	import Header from "../componets/Header.svelte";
	import Welcome from "../componets/Welcome.svelte";
	import Promo from "../componets/Promo.svelte";
	import Footer from "../componets/Footer.svelte"

	import { charities } from "../Data/charity.js";
	let title = "Charity";

</script>


<Header />
<Welcome />
<CharityList  { charities } />
<Promo />
<Footer />
=======
	import CharityList from '../components/CharityList.svelte' ;
	import Header from '../components/Header.svelte' ;
	import Welcome from '../components/Welcome.svelte';
	import Promo from '../components/Promo.svelte' ;
	import Footer from '../components/Footer.svelte' ;

	import  { charities } from '../data/charities.js' ;

	let title = "Charity";
</script>
 

 
<CharityList charities={ charities } />
<Header />
<Welcome />
<Promo />
<Footer/>



>>>>>>> 808816c90a4a2bbc63391680ac4b0e25c8658538
