<!-- 
=====================================================================
  HEADER
=====================================================================
  This file defines the Header-Component of the project
-->

<!--SCRIPTS-->
<script>
	import { onMount, tick } from 'svelte';
	import { get } from 'svelte/store';
	import { theme } from '$lib/stores/theme.js';
	import { locale, _ } from 'svelte-i18n';

	// Initialize Variables
	let currentLocale = 'en';
	let currentTheme = 'light';
	let isSearchOpen = false;
	let searchInput;
	let searchQuery = '';
	let isMenuOpen = false;

	// Navigation Items
	const navItems = [
		{ key: 'header.nav.menu-1', href: '/about' },
		{ key: 'header.nav.menu-2', href: '/projects' },
		{ key: 'header.nav.menu-3', href: '/mindspace' },
		{ key: 'header.nav.menu-4', href: '/creative-lab' }
	];

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

	// Open Search
	function openSearch() {
		isSearchOpen = true;

		tick().then(() => {
			searchInput?.focus();
		});
	}

	// Clear Search Input
	function clearSearchInput() {
		searchQuery = '';
		searchInput?.focus();
	}

	// Toggle Menu
	function toggleMenu() {
		if (isSearchOpen) {
			isSearchOpen = false;
		} else {
			isMenuOpen = !isMenuOpen;
		}
	}
</script>

<!--STYLES-->
<style>
	@import './header.css';
</style>

<header class:is-menu-open={isMenuOpen} class:is-search-open={isSearchOpen}>
	<div class="header-content">
		<!-- Home -->
		<div class="home">
			<a href="/" aria-label="Open Homepage">
				<svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="currentColor" viewBox="0 0 19 20">
					<path d="M18.2 8.679a2.747 2.747 0 1 1-5.495 0 2.747 2.747 0 0 1 5.495 0Z"/>
					<path d="M0 0h5.476v3.736S6.572 0 11.394 0c4.894 0 6.267 3.741 6.652 5.84a3.832 3.832 0 0 0-2.596-1.008 3.842 3.842 0 0 0-3.159 1.651c-.447-.879-1.361-1.945-3.158-1.916-2.387.038-3.222 1.89-3.472 2.687a2.505 2.505 0 0 0-.095.732L5.476 20H0V0Z"/>
					<path d="M12.688 11.354V20h5.508v-8.628a3.835 3.835 0 0 1-2.746 1.152 3.835 3.835 0 0 1-2.762-1.17Z"/>
				</svg>
			</a>
		</div>

		<!-- Navigation -->
		<div class="navigation">
			<nav class="desktop-menu">
            <a href="/about" class="body-s">{$_('header.nav.menu-1')}</a>
            <a href="/projects" class="body-s">{$_('header.nav.menu-2')}</a>
            <a href="/mindspace" class="body-s">{$_('header.nav.menu-3')}</a>
            <a href="/creative-lab" class="body-s">{$_('header.nav.menu-4')}</a>
          </nav>
		</div>

		<!-- Action -->
		<div class="actions">
			<!-- Language -->
			<select class="detail-s locale" on:change={changeLanguage} bind:value={currentLocale} aria-label="Select Language">
				<option class="detail-m" value="en">en</option>
				<option class="detail-m" value="de">de</option>
			</select>

			<!-- Search -->
			<button class ="search" on:click={openSearch} aria-label="Search">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
					<path fill-rule="evenodd" d="M11.5 3.75a7.75 7.75 0 1 0 5.379 13.33.755.755 0 0 1 .2-.201A7.75 7.75 0 0 0 11.5 3.75Zm7.05 13.739a9.213 9.213 0 0 0 2.2-5.989 9.25 9.25 0 1 0-3.261 7.05l2.98 2.98a.75.75 0 1 0 1.061-1.06l-2.98-2.981Z" clip-rule="evenodd"/>
				</svg>
			</button>

			<!-- Theme -->
			<button class="theme" on:click={changeTheme} aria-label="Toggle Dark/Light Mode">
				{#if currentTheme === 'light'}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M8.686 1.47a.75.75 0 0 1 .153.84 9.675 9.675 0 0 0-.858 3.997c0 5.364 4.348 9.712 9.713 9.712a9.672 9.672 0 0 0 3.997-.858.75.75 0 0 1 .992.992 11.214 11.214 0 0 1-10.22 6.597C6.27 22.75 1.25 17.73 1.25 11.538c0-4.549 2.708-8.463 6.597-10.221a.75.75 0 0 1 .84.153ZM6.8 3.647a9.7 9.7 0 0 0-4.049 7.89c0 5.365 4.348 9.713 9.712 9.713a9.7 9.7 0 0 0 7.891-4.049c-.853.208-1.744.318-2.66.318-6.192 0-11.212-5.02-11.212-11.212 0-.916.11-1.807.318-2.66Z" clip-rule="evenodd"/>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.37 4.37a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 0 1-1.06 1.06L4.37 5.43a.75.75 0 0 1 0-1.06Zm15.26 0a.75.75 0 0 1 0 1.06l-1.414 1.414a.75.75 0 1 1-1.06-1.06L18.57 4.37a.75.75 0 0 1 1.06 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Zm-5 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM6.844 17.16a.75.75 0 0 1 0 1.06L5.43 19.635a.75.75 0 0 1-1.06-1.061l1.414-1.414a.75.75 0 0 1 1.06 0Zm10.312 0a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 1 1-1.06 1.06l-1.414-1.414a.75.75 0 0 1 0-1.06ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/>
					</svg>
				{/if}
			</button>

			<!-- Burger Menu -->
			 <button class="burger-menu" on:click={toggleMenu} aria-label="Toggle menu" class:is-menu-open={isMenuOpen} class:is-search-open={isSearchOpen}>
				<div class="burger-icon">
					<div class="line"></div>
					<div class="line"></div>
				</div>
			</button>
		</div>

		<!-- Search Menu -->
		{#if isSearchOpen}
			<div class="search-menu">
				<div class="search-menu-content">
					<div class="search-wrapper">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M11.5 3.75a7.75 7.75 0 1 0 5.379 13.33.755.755 0 0 1 .2-.201A7.75 7.75 0 0 0 11.5 3.75Zm7.05 13.739a9.213 9.213 0 0 0 2.2-5.989 9.25 9.25 0 1 0-3.261 7.05l2.98 2.98a.75.75 0 1 0 1.061-1.06l-2.98-2.981Z" clip-rule="evenodd"/>
						</svg>
						<input type="text" class=" heading-l search-input" bind:this={searchInput} bind:value={searchQuery} placeholder="{$_('header.search.placeholder')}">
						{#if searchQuery !== ''}
							<button class="clear-search-input" on:click={clearSearchInput} aria-label="Clear Search">
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor" viewBox="0 0 25 24">
									<path fill-rule="evenodd" d="M1.662 12c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm7.293-3.707a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.414L14.076 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L11.248 12 8.955 9.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"/>
								</svg>
							</button>
						{/if}
					</div>
					<div class="search-results">
						{#if searchQuery === ''}
							<!-- Empty Query -->
							<p class="body-s search-result-title">{$_('header.search.quickstart')}</p>
							<nav>
								{#each navItems as item, i}
									<div class="quickstart-item">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
											<path fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
										</svg>
										<a
											href={item.href}
											class="heading-m"
											on:click={toggleMenu}
										>
											{$_(item.key)}
										</a>
									</div>
								{/each}
							</nav>
						{:else}
							<!-- Filled Query -->
							<p class="body-s search-result-title">{$_('header.search.no-results')}</p>
						{/if}
					</div>
				</div>
			</div>
		{/if} 

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="mobile-menu">
				<nav>
					{#each navItems as item, i}
						<a
							href={item.href}
							class="heading-l"
							on:click={toggleMenu}
						>
							{$_(item.key)}
						</a>
					{/each}
				</nav>
			</div>
		{/if} 
	</div>
</header>

