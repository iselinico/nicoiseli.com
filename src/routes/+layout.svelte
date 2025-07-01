<!-- 
=====================================================================
  LAYOUT
=====================================================================
  This file defines the layout of the project
-->

<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
	<div class="main-content">
		<slot />
	</div>
	<Footer />
</main>

<style global>
	@import '../global.css';
</style>
