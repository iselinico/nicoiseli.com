<!-- 
=====================================================================
  ERROR
=====================================================================
  This file defines the Error-Page of the project
-->

<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('error.title')}</title>
</svelte:head>

<h1>{$_('error.intro.title')}</h1>
<p>{$_('error.intro.description')}</p>
