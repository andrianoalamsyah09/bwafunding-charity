<script>
	import { Charity, getCharity } from "../stores/data.js";
	import { params } from '../stores/peges'
	import router from "page";
    import Header from "../componets/Header.svelte";
    import Footer from "../componets/Footer.svelte";
	import Loader from "../componets/Loader.svelte";

	let amount, name, email, agree = false;


	getCharity($params.id)
    
	async function handleForm(event) {  
		const newData =await getCharity($params.id);
		Charity.pledged = Charity.pledged + parseInt(amount);
		try{
			const res = await fetch(`https://charity-api-bwa.herokuapp.com/charities/${$params.id}`, 
			{
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(Charity)
		});
		const resMid = await fetch(`/.netlify/function/payment`, {
			method: "POST",
			headers: {
				"content-type": "applocation/json",
			},
			body: JSON.stringify({
				id: $params.id,
				amount: parseInt(amount),
				name,
				email,
			})
		});
		const midtransData = await resMid.jon();
		console.log(midtransData);
		window.location.href = midtransData.url;
		} catch(err) {
			console.log(err);
		}
		 
	}
	function handleButtonClick() {
		console.log("Buttom click")
	};

</script>

<style>
	#xs-input-checkbox {
		display: flex;
		align-items: center;
	}
	#xs-donate-agree {
		width: 35px;
	}
	label[for='xs-donate-agree'] {
		margin: 0;
		margin-left: 10px;
	}
</style>

<Header />   

<!-- welcome section -->
<!--breadcumb start here-->
	{#if !$Charity}

	<Loader />

    {:else}
	<section class="xs-banner-inner-section parallax-window" style=
	"background-image:url('/assets/images/about_bg.jpg')">
	<div class="xs-black-overlay"></div>
	<div class="container">
	<div class="color-white xs-inner-banner-content">
	<h2>Donate Now</h2>
	<p>{$Charity.title}</p>
	<ul class="xs-breadcumb">
	<li class="badge badge-pill badge-primary">
	<a href="/" class="color-white">Home /</a> Donate
	</li>
	</ul>
	</div>
	</div>
	</section><!--breadcumb end here--><!-- End welcome section -->
	<main class="xs-main">
	<!-- donation form section -->
	<section class="xs-section-padding bg-gray">
		<div class="container">
		<div class="row">
		<div class="col-lg-6">
		<div class="xs-donation-form-images"><img src=
		"{$Charity.thumbnail}" class="img-responsive" alt=
		"Family Images"></div>
		</div>
		<div class="col-lg-6">
		<div class="xs-donation-form-wraper">
		<div class="xs-heading xs-mb-30">
		<h2 class="xs-title">{$Charity.title}</h2>
		<p class="small">To learn more about make donate charity
		with us visit our "<span class="color-green">Contact
		us</span>" site. By calling <span class=
		"color-green">+44(0) 800 883 8450</span>.</p><span class=
		"xs-separetor v2"></span>
		<!-- </div>.xs-heading end -->
		<form on:submit|preventDefault={handleForm} action="#" method="post" id="xs-donation-form" class=
			"xs-donation-form" name="xs-donation-form">
			<div class="xs-input-group">
				<label for="xs-donate-name">
					Donation Amount 
					<span class="color-light-red">
						**
					</span>
				</label> 
				<input type="text"
					name="name" 
					id="xs-donate-name" 
					class="form-control"
					bind:value={amount}
					required="true"
					placeholder="Your donation in Rupiah">
			</div><!-- .xs-input-group END -->
			<div class="xs-input-group">
				<label for="xs-donate-name">
					Your name
					<span class="color-light-red">**</span>
				</label>
				<input 
					type="text"
					name="name"
					id="xs-donate-name"
					class="form-control"
					bind:value={name}
					required="true"
					placeholder="Your awesome name"
				/>
			</div>
			<div class="xs-input-group">
				<label for="xs-donate-charity">
					Your Email
					<span class="color-light-red">
						**
					</span>
				</label> 
				<input type="text"
					name="email" 
					id="xs-donate-email" 
					class="form-control"
					bind:value={email}
					required="true"
					placeholder="email@awesone.com"/>
			</div>
		
			<!-- .xs-input-group END -->
			<div class="xs-input-group" id="xs-input-checkbox">
				<input type="checkbox" name="agree" id="xs-donate-agree" bind:checked={agree} />
				<label for="xs-donate-agree">
					I Agree
					<span class="color-light-red">**</span>
				</label>
			 </div>
			 <button type="submit" disabled={!agree} class="btn btn-warning"><span class=
				"badge"><i class="fa fa-heart"></i></span> Donate
				now</button>
	</form><!-- .xs-donation-form #xs-donation-form END -->
	</div>
	</div>
	</div><!-- .row end -->
	</div><!-- .container end -->
	</section><!-- End donation form section -->
	</main>
	
	{/if}
    <Footer />
