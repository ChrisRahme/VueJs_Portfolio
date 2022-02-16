<template>
<section id="Projects">
	<div class="container">
		<h1>Projects</h1>
		<div class="cards row">
			<div v-for="(project, c_idx) in this.projects" :key="c_idx" class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-4">
				<Card :title="project.title" :links="project.links" :text="project.text" :feet="project.feet"/>
			</div>
		</div>

		<a class="btn btn-link" href="https://github.com/stars/ChrisRahme/lists/my-projects">Check out my other projects on GitHub!</a>
	</div>
</section>
</template>



<style scoped>
/* #Projects {
	text-align: left;
} */

#Projects h1 {
	margin-bottom: 2rem;
}

#Projects .cards {
	text-align: left;
	margin: 0;
}

#Projects > .container > a.btn {
	line-height: 2rem;
	height: 3rem;
	border-radius: 1.5rem;
	outline: none;
	margin-top: 2rem;
	background-color: var(--color-light);
	border-color: var(--color-light);
	color: var(--color-dark);
	transition: var(--transition-ease);
}

#Projects > .container > a.btn:hover {
	/* background-color: var(--color-lighter-gray);
	border-color: var(--color-lighter-gray); */
	color: var(--color-primary);
}
</style>



<script>
import Card from '../common/Card.vue'

export default {
	components: {
		Card
	},

	data() {
		function gitLink(id) {
			return {url: `https://www.github.com/ChrisRahme/${id}`, alt: 'View on GitHub', icon: ['fab', 'github']}
		}

		return {
			projects: [
				{
					title: 'Smart WiFi Locks',
					links: [gitLink('WiFi_Locks')],
					feet: ['Python', 'PHP', 'MySQL', 'MQTT', 'Arduino'],
					text: [
						'Smart WiFi locks with an administrative platform, user permissions, and scheduler.',
						'Built with a telecommunication and an industrial enginner.',
					],
				},

				{
					title: 'AI Chatbot',
					links: [gitLink('fyp-chatbot')],
					feet: ['Rasa', 'Python', 'JavaScript', 'Kotlin', 'Helm'],
					text: [
						'Multilingual customer support AI chatbot with interfaces for Web and Mobile.'
					],
				},

				{
					title: 'Portfolio Website',
					links: [gitLink('vuejs-portfolio')],
					feet: ['Vue 3'],
					text: [
						'Yes, the one you\'re looking at right now! :)',
						'I hope you like it!'
					],
				},
			]
		}
  	}
}
</script>