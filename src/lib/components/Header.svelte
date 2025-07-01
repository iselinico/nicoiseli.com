<!-- 
=====================================================================
  HEADER
=====================================================================
  This file defines the Header-Component of the project
-->

<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { theme } from '$lib/stores/theme.js';
	import { locale, _ } from 'svelte-i18n';
	import '$lib/stores/locale.js';

	// Initialize Variables
	let currentLocale = 'en';
	let currentTheme = 'light';

	onMount(() => {
		// Initialize Theme
		currentTheme = get(theme);

		// Initialize Language
		currentLocale = localStorage.getItem('locale') || 'en';
		locale.set(currentLocale);
	});

	// Change Theme
	function changeTheme() {
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		theme.set(newTheme);
		currentTheme = newTheme;
	}

	// Change Language
	function changeLanguage(event) {
		const lang = event.target.value;
		localStorage.setItem('locale', lang);
		locale.set(lang);
		currentLocale = lang;
	}
</script>

<header>
	<!-- Navigation -->
	 <nav>
		<ul>
			<li><a href="/about">{$_('header.nav-menu-1')}</a></li>
			<li><a href="/projects">{$_('header.nav-menu-2')}</a></li>
			<li><a href="/mindspace">{$_('header.nav-menu-3')}</a></li>
			<li><a href="/creative-lab">{$_('header.nav-menu-4')}</a></li>
		</ul>
	 </nav>

	<!-- Theme -->
	<button on:click={changeTheme} aria-label="Toggle Dark/Light Mode">
		{#if currentTheme === 'light'}
			🌞 Light Mode
		{:else}
			🌜 Dark Mode
		{/if}
	</button>

	<!-- Language -->
	<select on:change={changeLanguage} bind:value={currentLocale} aria-label="Select Language">
		<option value="en">English</option>
		<option value="de">Deutsch</option>
	</select>
</header>
