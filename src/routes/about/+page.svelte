<!-- 
=====================================================================
  ABOUT
=====================================================================
  This file defines the About-Page of the project
-->

<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('about.title')}</title>
</svelte:head>

<h1>{$_('about.intro.title')}</h1>
<p>{$_('about.intro.description')}</p>