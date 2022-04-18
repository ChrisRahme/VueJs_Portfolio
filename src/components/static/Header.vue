<script setup>
</script>

<template>
<header id="Header">
	<div class="container">
		<nav class="navbar navbar-expand-lg d-print flex">
			<div class="navbar-brand">
				<a class="nav-link flex" href="/">
					<font-awesome-icon class="icon fa-2x" :icon="['fas', 'house-user']"/>
					<!-- <img src="../../assets/img/vue_logo.png" width="50" height="50" alt="Chris Rahmé Logo"> -->
					<!-- <span>Chris Rahmé</span> -->
				</a>
			</div>


			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
    			<span class="navbar-toggler-icon navbar-text">
					<font-awesome-icon class="icon fa-1x" :icon="['fas', 'bars']"/>
				</span>
			</button>

			<div id="navbar-nav" class="collapse navbar-collapse">
				<ul class="navbar-nav langs row" style="display: none">
					<button type="button" class="btn nav-link col" @click="setLang">En</button>
					<button type="button" class="btn nav-link col" @click="setLang">Fr</button>
				</ul>

				<span class="separator"></span>

				<ul class="navbar-nav links">
					<li class="nav-item" v-for="(link, l_idx) in this.$root.pages" :key="l_idx">
						<span v-if="link[2]">
							<a class="nav-link disabled"  v-if="link[0] == this.$root.page">{{link[0]}}</a>
							<a class="nav-link"          :href="'/'+link[1]" v-else        >{{link[0]}}</a>
						</span>
					</li>
				</ul>

				<span class="separator"></span>

				<!-- <ul class="navbar-nav links"> -->
					<!-- <li class="nav-item"> -->
						<button type="button" id="nav-theme" class="nav-item" @click="this.$root.switchMode">
							<font-awesome-icon :class="`icon ${this.$root.other_theme}`" size="2x" :title="`Switch to ${this.$root.other_theme} mode`" :icon="['fa', this.$root.other_theme_icon]"/>
						</button>
					<!-- </li> -->
				<!-- </ul> -->
			</div>
		</nav>
	</div>
</header>
</template>



<style scoped>
#Header {
	padding: 0 0 0.5rem 0;
	box-shadow: 0 0 15px -5px var(--color-dark);
	position: fixed;
	width: 100%;
	z-index: 100;
	background: var(--color-white);
}

#Header .navbar {
	padding-bottom: 0
}

#Header .navbar-brand .nav-link {
	padding: 0;
}

#Header .navbar-brand img,
#Header .navbar-brand svg {
	object-fit: contain;
}

#Header .navbar-brand span {
	font-size: 2.5rem;
}

#Header .navbar-brand .icon {
	color: var(--color-primary);
	transition: var(--transition-cubic);
}

#Header .navbar-brand .icon:hover {
	color: var(--color-dark);
}

#Header #nav-theme {
	background: none;
	border: none;
}

#Header #nav-theme > .icon {
	color: var(--color-dark);
	transition: var(--transition-cubic);
}

#Header #nav-theme > .icon:hover {
	transform: rotateZ(-15deg);
}

#Header #nav-theme > .icon.light:hover {
	color: var(--color-complementary-triadic-right);
}

#Header #nav-theme > .icon.dark:hover {
	color: var(--color-complementary-triadic-left);
}



/* SMALL SCREEN TOGGLER */

#Header .navbar-toggler {
	transition: var(--transition-cubic);
}

#Header .navbar-toggler,
#Header .navbar-toggler[aria-expanded="true"]:hover {
	background-color: var(--color-light);
	border: 2px solid var(--color-primary);
}

#Header .navbar-toggler:hover,
#Header .navbar-toggler[aria-expanded="true"] {
	border: 2px solid var(--color-dark);
}

#Header .navbar-toggler > .navbar-toggler-icon,
#Header .navbar-toggler[aria-expanded="true"]:hover > .navbar-toggler-icon {
	color: var(--color-primary);
	align-items: center;
	transition: var(--transition-cubic);
}

#Header .navbar-toggler:hover > .navbar-toggler-icon,
#Header .navbar-toggler[aria-expanded="true"] > .navbar-toggler-icon {
	color: var(--color-dark);
}

#Header .navbar-toggler > .navbar-toggler-icon > .icon {
	transform: translateY(-18%) scaleX(1.5);
}

#Header .navbar-toggler[aria-expanded="true"] > .navbar-toggler-icon > .icon {
	transform: rotateZ(90deg) translateX(-18%) scaleX(1.5);
}



/* LINKS */

#Header #navbar-nav {
	-webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: auto;
}

#Header #navbar-nav .separator {
	margin: 0 1rem;
}

#Header #navbar-nav .nav-link {
	font-size: 1.1rem;
	margin-left: 1rem;
	padding: 0.5rem;
	font-weight: 450;
	color: var(--color-dark);
	border: 1.75px solid transparent;
	border-radius: 2rem;
	transition: var(--transition-cubic)
}

#Header #navbar-nav .nav-link:hover {
	color: var(--color-primary);
	/* border: 1.75px solid var(--color-primary); */
}

#Header #navbar-nav .nav-link.disabled {
	color: var(--color-primary);
	font-weight: 500;
}



/* SMALL SCREEN */
@media (max-width: 992px) {
	#Header {
		box-shadow: 0 0 15px -5px var(--color-dark);
	}

	#Header #navbar-nav .separator {
		display: none;
		margin: 0;
	}

	#Header #navbar-nav > .navbar-nav {
		padding-bottom: 1rem;
	}

	#Header #navbar-nav > .navbar-nav.langs {
		display: flex;
		flex-direction: row;
		padding: 0 40% 1rem 40%;
	}

	#Header #navbar-nav > .navbar-nav.links {
		padding: 1rem;
	}

	#Header #navbar-nav .nav-link {
		border: none;
		margin-left: 0;
	}

	#Header #navbar-nav > .navbar-nav.langs > .nav-link {
		padding: 0;
	}
}
</style>



<script>
export default {
	mounted() {
		console.log(this.$root)
	},
}
</script>