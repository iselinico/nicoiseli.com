<!-- 
=====================================================================
  HOME
=====================================================================
  This file defines the Landing-Page of the project
-->

<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
</svelte:head>

<h1>{$_('home.intro.title')}</h1>
<p>{$_('home.intro.description')}</p>
