<!-- 
=====================================================================
  FOOTER
=====================================================================
  This file defines the Header-Component of the project
-->

<!--SCRIPTS-->
<script>
	import { _ } from 'svelte-i18n';
</script>

<!--STYLES-->
<style>
	@import './footer.css';
</style>

<!--MARKUP-->
<footer>
	<div class="footer-content">
		<div class="footer-info">
			<div class="profile">
				<div class="personal-info">
					<h3 class="heading-l">{$_('footer.personal-info.name')}</h3>
					<p class="body-m">{$_('footer.personal-info.job')}</p>
				</div>
			</div>
			<nav class="footer-nav">
				<div class="nav-column">
					<h4 class="heading-s">{$_('footer.pages.title')}</h4>
					<ul>
						<li><a href="/" class="body-s">{$_('footer.pages.home')}</a></li>
						<li><a href="/about" class="body-s">{$_('footer.pages.about')}</a></li>
						<li><a href="/projects" class="body-s">{$_('footer.pages.projects')}</a></li>
						<li><a href="/mindspace" class="body-s">{$_('footer.pages.mindspace')}</a></li>
						<li><a href="/creative-lab" class="body-s">{$_('footer.pages.lab')}</a></li>
					</ul>
				</div>
				<div class="nav-column">
					<h4 class="heading-s">{$_('footer.profiles.title')}</h4>
					<ul>
						<li><a href="https://dribbble.com/nicoiseli" class="body-s" target="_blank" rel="nofollow">{$_('footer.profiles.dribbble')}</a></li>
						<li><a href="https://github.com/iselinico" class="body-s" target="_blank" rel="nofollow">{$_('footer.profiles.github')}</a></li>
						<li><a href="https://linkedin.com/in/nico-iseli"class="body-s" target="_blank" rel="nofollow">{$_('footer.profiles.linkedin')}</a></li>
						<li><a href="https://www.pinterest.com/nicoiseli/_created" class="body-s" target="_blank" rel="nofollow">{$_('footer.profiles.pinterest')}</a></li>
						<li><a href="https://unsplash.com/@nicoiseli" class="body-s" target="_blank" rel="nofollow">{$_('footer.profiles.unsplash')}</a></li>
					</ul>
				</div>
				<div class="nav-column resources">
					<h4 class="heading-s">{$_('footer.resources.title')}</h4>
					<ul>
						<li><a href="https://github.com/" class="body-s" target="_blank" rel="nofollow">{$_('footer.resources.github')}</a></li>
						<li><a href="https://greensock.com/" class="body-s" target="_blank" rel="nofollow">{$_('footer.resources.gsap')}</a></li>
						<li><a href="https://www.i18next.com/" class="body-s" target="_blank" rel="nofollow">{$_('footer.resources.i18next')}</a></li>
						<li><a href="https://svelte.dev/" class="body-s" target="_blank" rel="nofollow">{$_('footer.resources.svelte')}</a></li>
						<li><a href="https://vercel.com/" class="body-s" target="_blank" rel="nofollow">{$_('footer.resources.vercel')}</a></li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="legal">
			<p class="copyright body-xs">{$_('footer.copyright')}</p>
		</div>
	</div>
</footer>
