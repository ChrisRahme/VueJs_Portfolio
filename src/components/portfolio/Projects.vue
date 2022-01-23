<template>
<section id="Projects">
	<div class="container">
		<h1>Projects</h1>
		<div class="cards row">
			<div v-for="(project, c_idx) in this.projects" :key="c_idx" class="col-12 col-sm-6 col-md-4 col-lg-4 pb-4">
				<Card :title="project.title" :links="project.links" :text="project.text" :feet="project.feet"/>
			</div>
		</div>
	</div>
</section>
</template>



<style scoped>
#Projects {
	text-align: left;
}

#Projects h1 {
	margin-bottom: 2rem;
}

#Projects .cards {
	margin: 0;
}
</style>



<script>
import Card from '../common/Card.vue'

export default {
	components: {
		Card
	},

	data() {
		return {
			projects: [
				{
					title: 'Smart WiFi Locks',
					text: [
						'Built with telecommunication and industrial enginners.',
						'Smart WiFi locks with an administrative platform, user permissions, and scheduler.'
					],
					links: [
						{url: 'https://www.github.com/ChrisRahme/Wifi_Locks', alt: 'GitHub', icon: ['fab', 'github']}
					],
					feet: [
						'Python', 'PHP', 'MySQL', 'MQTT', 'Arduino'
					]
				},

				{
					title: 'AI Chatbot',
					text: [
						'Multilingual customer support AI chatbot with interfaces for Web and Mobile.'
					],
					links: [
						{url: 'https://www.github.com/ChrisRahme/fyp-chatbot', alt: 'GitHub', icon: ['fab', 'github']}
					],
					feet: [
						'Rasa', 'Python', 'JavaScript', 'Kotlin', 'Helm'
					]
				},

				{
					title: 'Portfolio Website',
					text: [
						'Yes, the one you\'re looking at right now! :)',
						'I hope you like it!'
					],
					links: [
						{url: 'https://www.github.com/ChrisRahme/fyp-chatbot', alt: 'GitHub', icon: ['fab', 'github']}
					],
					feet: [
						'Vue'
					]
				},
			]
		}
  	}
}
</script>