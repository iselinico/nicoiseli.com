<!-- 
=====================================================================
  CREATIVE-LAB
=====================================================================
  This file defines the Creative-Lab-Page of the project
-->

<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('lab.title')}</title>
</svelte:head>

<h1>{$_('lab.intro.title')}</h1>
<p>{$_('lab.intro.description')}</p>
