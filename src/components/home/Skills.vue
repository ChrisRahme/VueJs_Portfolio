<template>
<section id="Skills">
	<div class="container">
		<HorizontalCard class="programming"
			href="/portfolio/programming"
			icon="flaticon-programming-code-signs"
			title="Programming"
			:contents="[
				{
					'title': 'Topics of interest',
					'text': [
						'Web Development',
						'Artificial Intelligence',
						'Unity Game Development'
					]
				},
				{
					'title': 'Languages & frameworks',
					'text': [
						'Python, Java, JavaScript',
						'Vue, Laravel, Drupal',
						'Rasa - I\'m a moderator on their forum! (https://forum.rasa.com/u/chrisrahme)'
					]
				}
			]"
		/>

		<HorizontalCard class="astronomy"
			href="/portfolio/astronomy"
			icon="flaticon-galaxy-spiral-shape"
			title="Astronomy"
			:contents="[
				{
					'title': 'Topics of interest',
					'text': [
						'Astrophysics - Black holes, spacetime, higher dimensions',
						'Cosmology - Past and future of the universe, the multiverse',
						'Observational Astronomy - Locating planets in the sky'
					]
				},
				{
					'title': 'Main responsibilities',
					'text': [
						'Help organizing astronomy events',
						'Give stargazing sessions with telescope observations',
						'Teach most astronomy topics for all levels and ages',
					]
				}
			]"
		/>
	</div>
</section>
</template>



<style scoped>
#Skills .HorizontalCard:not(:last-child) {
	margin-bottom: 4rem;
}

#Skills .HorizontalCard:not(:first-child):not(:last-child) {
	margin-top: 4rem;
	margin-bottom: 4rem;
}

#Skills .HorizontalCard:last-child {
	margin-top: 4rem;
}



/* MEDIUM SCREENS */
@media (min-width: 768px) {
	#Skills .HorizontalCard:first-child {
		border-radius: 0.5rem 0.5rem 0 0;
		margin-bottom: 0;
	}

	#Skills .HorizontalCard:not(:first-child):not(:last-child) {
		margin-top: 0;
		border-top: none;
		border-radius: 0;
		border-bottom: none;
		margin-bottom: 0;
	}

	#Skills .HorizontalCard:last-child {
		margin-top: 0;
		border-top: none; /* Remove when there are more than 2 cards */
		border-radius: 0 0 0.5rem 0.5rem;
	}
}
</style>


<style>
/* Pick from https://hslpicker.com/#60C060 by changing H value only */

#Skills .HorizontalCard.programming:hover h3,
#Skills .HorizontalCard.programming:hover h4,
#Skills .HorizontalCard.programming:hover .icon {
	/* color: #5fafbf; */
	color: var(--color-complementary-triadic-left);
}

#Skills .HorizontalCard.astronomy:hover h3,
#Skills .HorizontalCard.astronomy:hover h4,
#Skills .HorizontalCard.astronomy:hover .icon {
	/* color: #6f5fbf; */
	color: var(--color-split-right);
}
</style>



<script>
import HorizontalCard from '../common/HorizontalCard.vue'

export default {
	components: {
		HorizontalCard
	}
}
</script>