<template>
<div id="App">
	<Header/>

	<main>
		<Home      class="Vue" v-if="page == 'Home'"/>
		<Portfolio class="Vue" v-if="page == 'Portfolio'"/>
		<Contact   class="Vue" v-if="page == 'Contact'"/>
	</main>

	<Footer/>
</div>
</template>



<style>
.Vue {
	padding-top: 6rem;
}

.Vue section {
	padding-top: 8rem;
	padding-bottom: 8rem;
}

.Vue section.color-transparent {
	background-color: transparent;
	color: var(--color-dark);
}

.Vue section.color-primary {
	background-color: var(--color-primary);
	color: var(--color-light);
}

.Vue section.color-transparent a {
	color: var(--color-dark);
}

.Vue section.color-primary a {
	color: var(--color-light);
}
</style>



<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

import Home from './components/home/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Contact from './components/contact/Contact.vue'

export default {
	components: {
		Header,
		Home,
		Portfolio,
		Contact,
		Footer,
	},

	data() {
		return {
			rerender: 0
		}
	},

	mounted() {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
		const localTheme  = (localStorage.getItem('theme') || '').replace(/"/g, '').replace(/'/g, '')

		if (localTheme == 'dark' || localTheme == 'light') {
			this.setMode(localTheme)
		} else {
			if (prefersDark.matches) {
				this.setMode('dark')
			} else {
				this.setMode('light')
			}
		}
	},

	computed: {
		page: function() {
			const paths = Object.entries({
				'/portfolio': 'Portfolio',
				'/contact': 'Contact',
				'/home': 'Home',
				'': 'Home',
			})

			for (let [path, component] of paths) {
				if (window.location.pathname.startsWith(path)) return component
			}
		},

		theme: function() {
			if (this.rerender >= 0) {
				return document.getElementById('theme-link').getAttribute('theme')
			}
		},

		other_theme: function() {
			return this.theme == 'light' ? 'dark' : 'light'
		},

		theme_icon: function() {
			return this.theme == 'light' ? 'sun' : 'moon'
		},

		other_theme_icon: function() {
			return this.theme == 'light' ? 'moon' : 'sun'
		}
	},

	methods: {
		switchMode: function(event) {
			this.setMode(this.other_theme)
		},

		setMode: function(theme) {
			let theme_link = document.getElementById('theme-link')

			theme_link.href = `/css/theme_${theme}.css`
			theme_link.setAttribute('theme', theme)

			localStorage.setItem('theme', theme)

			this.rerender += 1
		}
	}
}
</script>