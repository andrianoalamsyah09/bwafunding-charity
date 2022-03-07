<script>
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
