<template>
<section id="Projects" aria-label="Projects">
	<div class="container">
		<h1>Some Projects</h1>
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
	font-size: 0.9rem;
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
import Card from '../../common/Card.vue'

export default {
	components: {
		Card
	},

	data() {
		function gitLink(id) {
			return {url: `https://www.github.com/ChrisRahme/${id}`, alt: 'View on GitHub', icon: ['fab', 'github']}
		}

		function playLink(id) {
			return {url: `https://play.google.com/store/apps/details?id=com.ChraGames.${id}`, alt: 'View on PlayStore', icon: ['fab', 'google-play']}
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
					links: [gitLink('FYP-Chatbot')],
					feet: ['Rasa', 'Python', 'JavaScript', 'Kotlin', 'Docker', 'Kubernetes', 'Helm'],
					text: [
						'Multilingual customer support AI chatbot with interfaces for Web and Mobile.',
					],
				},

				{
					title: 'Portfolio Website',
					links: [gitLink('VueJs_Portfolio')],
					feet: ['Vue 3', 'Vite', 'Netlify'],
					text: [
						'Yes, the one you\'re looking at right now! :)',
						'I hope you like it!',
					],
				},

				{
					title: 'Tappy Raven',
					links: [playLink('TappyRaven')],
					feet: ['Android', 'Unity', 'C#'],
					text: [
						'FlappyBird-based game.',
						'Took a day to code the game, took a week to upload it on the Play Store.',
					],
				},

				{
					title: 'Duolingo XP Farmer & Learner',
					links: [gitLink('Duolingo_Bot')],
					feet: ['Python', 'Selenium'],
					text: [
						'Duolingo bot that automatically learns and completes courses.',
					],
				},

				{
					title: 'DarkWeb Page Classification API',
					links: [gitLink('DarkWeb_Page_Classification')],
					feet: ['Python', 'Flask', 'Scikit-Learn', 'TensorFlow'],
					text: [
						'Duolingo bot that automatically learns and completes courses.',
					],
				},
			]
		}
  	},

	methods: {
		clampCards() {
			const _this = document.getElementById('Projects')
			const cards = Array.from(_this.getElementsByClassName('Card'))
			const tops  = cards.map((card) => card.getBoundingClientRect().top)
			const bots  = cards.map((card) => card.getBoundingClientRect().bottom)

			let n_cols = 1
			let prev_diffs = []

			for (n_cols; n_cols < cards.length; n_cols++) {
				if (tops[n_cols] !== tops[n_cols-1]) break
			}

			for (let i = 0; i < cards.length; i += n_cols) {
				let diffs = []

				for (let j = 0; j < n_cols && i+j < cards.length; j++) {
					diffs.push(tops[i+j] - bots[i+j - n_cols])
				}

				const margin = 24 // Math.max(Math.min(...diffs), 24)
				diffs = diffs.map((diff, j) => diff + (prev_diffs[j] || 0) - margin)

				for (let j = 0; j < n_cols && i+j < cards.length; j++) {
					cards[i+j].style.transform = `translateY(-${diffs[j]}px)`
				}

				prev_diffs = diffs
			}
		},

		clampCardsOnResize() {
			const self = this
			var resizeTimeout

			clearTimeout(resizeTimeout)

			const _this = document.getElementById('Projects')
			const cards = Array.from(_this.getElementsByClassName('Card'))

			cards.forEach((card) => card.style.transform = '')

			resizeTimeout = setTimeout(() => {
				self.clampCards()
			}, 500)
		}
	},

	created() {
		window.addEventListener('resize', this.clampCardsOnResize)
	},

	mounted() {
		this.clampCards()
	},

	destroyed() {
		window.removeEventListener('resize', this.clampCardsOnResize)
	},
}
</script>