<script>
	import { onDestroy } from "svelte";
	import CharityList from "../componets/CharityList.svelte";
	import Header from "../componets/Header.svelte";
	import Welcome from "../componets/Welcome.svelte";
	import Promo from "../componets/Promo.svelte";
	import Footer from "../componets/Footer.svelte";

	onDestroy(function () {
		window.scrollTo(0, 0);
	})
</script>


<Header />
<Welcome />
	<CharityList   />
<Promo />
<Footer />
