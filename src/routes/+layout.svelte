<!-- 
=====================================================================
  LAYOUT
=====================================================================
  This file defines the layout of the project
-->

<!--SCRIPTS-->
<script>
	import '$lib/stores/locale.js';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<!--STYLES-->
<style global>
	@import '../global.css';
</style>

<!--MARKUP-->
<Header />
<main>
	<div class="main-content">
		<slot />
	</div>
	<Footer />
</main>
