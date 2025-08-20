<!-- 
=====================================================================
  ABOUT
=====================================================================
  This file defines the About-Page of the project
-->

<!--SCRIPTS-->
<script>
	import { _, json } from 'svelte-i18n';

	// Reactive translations
	$: education = $json('about.intro.education.entries');
	$: experience = $json('about.intro.experience.entries');
	$: skillsLanguages = $json('about.intro.skills.languages.entries');
	$: skillsUX = $json('about.intro.skills.ux.entries');
	$: skillsTools = $json('about.intro.skills.tools.entries');
</script>

<svelte:head>
	<title>{$_('about.title')}</title>
</svelte:head>

<!-- Intro -->
<div class="about-intro">
	<h1 class="about-title heading-xl">{$_('about.intro.title')}</h1>
	<p class="about-description body-m">{$_('about.intro.description')}</p>
</div>

<!-- Education Section -->
<section class="about-section">
	<div class="section-title heading-l">{$_('about.intro.education.title')}</div>
	<div class="section-content">
		{#each education as edu}
			<div class="entry">
				<div class="entry-meta">
					<div class="duration body-s">{edu.duration}</div>
					<div class="location">
						<div class="degree heading-s">{edu.degree}</div>
						<div class="school body-s">{edu.school}</div>
					</div>
				</div>
				<div class="entry-description body-s">
					{edu.description}<br />{edu.grade}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Experience Section -->
<section class="about-section">
	<div class="section-title heading-l">
		{$_('about.intro.experience.title')}
	</div>
	<div class="section-content">
		{#each experience as exp}
			<div class="entry">
				<div class="entry-meta">
					<div class="duration body-s">{exp.duration}</div>
					<div class="location">
						<div class="job-title heading-s">{exp.title}</div>
						<div class="employer body-s">{exp.employer}</div>
					</div>
				</div>
				<div class="entry-description body-s">{exp.description}</div>
			</div>
		{/each}
	</div>
</section>

<!-- Skills Section -->
<section class="about-section">
	<div class="section-title heading-l">{$_('about.intro.skills.title')}</div>
	<div class="section-content">
		<!-- Languages -->
		<div class="entry">
			<div class="entry-meta heading-s">
				{$_('about.intro.skills.languages.title')}
			</div>
			<div class="entry-description">
				{#each skillsLanguages as skill}
					<div class="skill-item">
						<div class="skill-name body-s">{skill.title}</div>
						<div class="skill-dots">
							{#each Array(5) as _, i}
								<span class="dot {i < skill.level ? 'filled' : 'outline'}"
								></span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- UX -->
		<div class="entry">
			<div class="entry-meta heading-s">
				{$_('about.intro.skills.ux.title')}
			</div>
			<div class="entry-description">
				{#each skillsUX as skill}
					<div class="skill-item">
						<span class="skill-name body-s">{skill.title}</span>
						<div class="skill-dots">
							{#each Array(5) as _, i}
								<span class="dot {i < skill.level ? 'filled' : 'outline'}"
								></span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Tools -->
		<div class="entry">
			<div class="entry-meta heading-s">
				{$_('about.intro.skills.tools.title')}
			</div>
			<div class="entry-description">
				{#each skillsTools as skill}
					<div class="skill-item">
						<span class="skill-name body-s">{skill.title}</span>
						<div class="skill-dots">
							{#each Array(5) as _, i}
								<span class="dot {i < skill.level ? 'filled' : 'outline'}"
								></span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Leisure Time -->
<section class="about-section">
	<div class="section-title heading-l">
		{$_('about.intro.leisure-time.title')}
	</div>
	<div class="section-content">
    <div class="entry">
       <div class="entry-description body-s">{$_('about.intro.leisure-time.description')}</div>
    </div>
	</div>
</section>

<!--STYLES-->
<style>
	@import './about.css';
</style>
