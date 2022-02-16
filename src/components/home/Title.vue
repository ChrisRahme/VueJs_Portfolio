<template>
<section id="Title">
	<div class="container">
		<div class="names">
			<h1 class="name-long">{{name_long}}</h1>
			<h1 class="name-short">{{name_short}}</h1>
		</div>
		<div class="titles">
			<h2>Computer / Software Engineer</h2>
			<h2>Masters in Artificial Intelligence</h2>
			<h2>Astronomy Teacher &amp; Mentor</h2>
		</div>

		<Avatar class="color-transparent" width="264px" height="280px"/>

		<div class="row">
			<h3>Some languages I speak:</h3>
			<div class="icons">
				<!-- Basic Web -->
				<font-awesome-icon class="icon animate" size="3x" title="HTML"       :icon="['fab', 'html5']"/>
				<font-awesome-icon class="icon animate" size="3x" title="CSS"        :icon="['fab', 'css3']"/>
				<font-awesome-icon class="icon animate" size="3x" title="JavaScript" :icon="['fab', 'js-square']"/>
				<font-awesome-icon class="icon animate" size="3x" title="PHP"        :icon="['fab', 'php']"/>
				<font-awesome-icon class="icon separator" size="3x" :icon="['fas', 'grip-lines-vertical']"/>

				<!-- Web Frameworks -->
				<font-awesome-icon class="icon animate" size="3x" title="Vue"        :icon="['fab', 'vuejs']"/>
				<font-awesome-icon class="icon animate" size="3x" title="React"      :icon="['fab', 'react']"/>
				<font-awesome-icon class="icon animate" size="3x" title="Laravel"    :icon="['fab', 'laravel']"/>
				<!-- <font-awesome-icon class="icon separator" size="3x" :icon="['fas', 'grip-lines-vertical']"/> -->

				<!-- Web CMS -->
				<font-awesome-icon class="icon animate" size="3x" title="Drupal"     :icon="['fab', 'drupal']"/>
				<font-awesome-icon class="icon separator" size="3x" :icon="['fas', 'grip-lines-vertical']"/>

				<!-- Deployment -->
				<!-- <font-awesome-icon class="icon animate" size="3x" title="Docker"     :icon="['fab', 'docker']"/> -->
				<!-- <font-awesome-icon class="icon separator" size="3x" :icon="['fas', 'grip-lines-vertical']"/> -->

				<!-- Languages -->
				<font-awesome-icon class="icon animate" size="3x" title="Java"       :icon="['fab', 'java']"/>
				<font-awesome-icon class="icon animate" size="3x" title="Python"     :icon="['fab', 'python']"/>
				<font-awesome-icon class="icon separator" size="3x" :icon="['fas', 'grip-lines-vertical']"/>

				<!-- Frameworks -->
				<font-awesome-icon class="icon animate" size="3x" title="Unity"      :icon="['fab', 'unity']"/>
			</div>
		</div>
	</div>
</section>
</template>



<style scoped>
#Title .names {
	margin-bottom: -3.5rem;
}

#Title .names > .name-long,
#Title .names > .name-short {
	transition: var(--transition-ease) 0.2s;
}

#Title .names > .name-long {
    opacity: 0;
}

#Title .names > .name-short {
    opacity: 1;
	transform: translateY(-4.25rem);
}

#Title .names:hover > .name-long,
#Title .names:hover > .name-short {
	color: var(--color-primary);
}

/* #Title .names:hover > .name-long {
    opacity: 1;
}

#Title .names:hover > .name-short {
    opacity: 0;
} */



#Title h1 {
	font-size: 3.5rem;
	font-weight: 700;
	margin-bottom: 0;
}

#Title h2 {
	font-size: 1.75rem;
	font-weight: 600;
	color: var(--color-darker-gray);
	margin-bottom: 0;
	transition: var(--transition-ease);
}

#Title h2:hover {
	color: var(--color-analog-right);
}



#Title .Avatar {
	margin-top: 1rem;
	margin-bottom: 3rem;
	transition: var(--transition-ease);
}

#Title .Avatar:hover {
	transform: scale(1.1);
}



@keyframes icon-animation {
	0% {
		color: var(--color-dark);
		transform: scale(1);
	}
	90% {
		color: var(--color-dark);
		transform: scale(1);
	}
	100% {
		color: var(--color-primary);
		transform: scale(1.05);
	}
}

#Title .icons {
	margin: -0.75rem auto 0 auto;
}

#Title .icons > .icon {
	margin: 1.5rem 0.75rem 0 0.75rem;
	color: var(--color-dark);
}

#Title .icons > .icon.separator {
	margin-right: 1.5rem;
	margin-left: 1.5rem;
	color: var(--color-primary);
}

#Title .icons > .icon.animate {
	transition: var(--transition-ease);
	animation-name: icon-animation;
	animation-duration: 5s;
	animation-timing-function: ease;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

#Title .icons > .icon.animate:hover {
	color: var(--color-primary);
	cursor: auto;
	transform: scale(1.05);
}
</style>



<script>
import Avatar from '../common/Avatar.vue'

export default {
	data() {
		return {
			name_short: "Chris Rahmé",
			name_long: "Christopher Habib-Rahmé",
		}
	},

	methods: {
	},

	mounted() {
		// Icons animation
		const _this = document.getElementById('Title')
		const icon_row = _this.getElementsByClassName('icons')[0]
		const icons = Array.from(icon_row.getElementsByClassName('icon'))

		icons.forEach((icon, i) => {
			icon.classList.remove('fa-w-14')
			icon.style.animationDelay = (1.5 * i / 10).toString() + 's'
		})

		icon_row.classList.remove('hidden')
	},

	components: {
		Avatar
	}
}
</script>