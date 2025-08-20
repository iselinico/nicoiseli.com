<!-- 
=====================================================================
  BUTTON
=====================================================================
  This file defines the Button-Component of the project
-->

<!--SCRIPTS-->
<script>
	import { _ } from 'svelte-i18n';

	// Initialize Variables
	export let label;
	export let action;

    // Action
	function handleClick(e) {
		if (action) action(e);
	}
</script>

<!--STYLES-->
<style>
	@import './button.css';
</style>

<!--MARKUP-->
<button id="primary-button" on:click={handleClick}>
	<!-- Label -->
	<span>{label}</span>
</button>
