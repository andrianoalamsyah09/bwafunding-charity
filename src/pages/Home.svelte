<script>
	import { onMount } from 'svelte'
	import CharityList from "../componets/CharityList.svelte";
	import Header from "../componets/Header.svelte";
	import Welcome from "../componets/Welcome.svelte";
	import Promo from "../componets/Promo.svelte";
	import Footer from "../componets/Footer.svelte";
	import Loader from "../componets/Loader.svelte";

	let title = "Charity";
	let data = getData();

	async function getData() {
		const res = await fetch('https://charity-api-bwa.herokuapp.com/charities');
		const data = await res.json()

		if(res.ok) {
			return data;
		} else new Error(data);
	}


</script>


<Header />
<Welcome />
{#await data}
<Loader />
{:then charities}
<CharityList  { charities } />
{/await}
<Promo />
<Footer />
