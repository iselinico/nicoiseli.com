<!-- 
=====================================================================
  MINDSPACE
=====================================================================
  This file defines the Mindspace-Page of the project
-->

<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('mindspace.title')}</title>
</svelte:head>

<h1>{$_('mindspace.intro.title')}</h1>
<p>{$_('mindspace.intro.description')}</p>
