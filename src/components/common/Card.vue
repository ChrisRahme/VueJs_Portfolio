<template>
<div class="Card card">
	<div class="card-body">
		<div class="row">
			<div class="col">
				<h5 class="card-title">{{this.title}}</h5>
			</div>

			<div class="col-1">
				<div class="links">
					<a v-for="(link, l_idx) in this.links" :href="link.url" :key="l_idx"> <!-- {url: 'abc.com', icon: ['fab', 'github']} -->
						<font-awesome-icon class="icon" :title="link.alt" :icon="link.icon"/>
					</a>
				</div>
			</div>
		</div>

		<div class="text">
			<p v-for="(text, t_idx) in this.text" class="card-text" :key="t_idx">
				{{text}}
			</p>
		</div>

		<div class="images">
			<img v-for="(image, i_idx) in this.images" :src="'../../assets/img/'+image.path" :alt="image.alt" :key="i_idx">
		</div>
	</div>

	<div class="card-footer">
		<span v-for="(foot, f_idx) in this.feet" :key="f_idx">
			{{foot}}
		</span>
	</div>
</div>
</template>



<style scoped>
.Card {
	background-color: var(--color-light);
	border: none;
	border-radius: 0;
	padding: 1rem;
	transition: var(--transition-ease);
}

.Card:hover {
	box-shadow: 0px 0px 10px 0px var(--color-dark);
	transform: scale(1.005);
}

.Card .card-body {
	padding: 0;
}

.Card .card-body h3,
.Card .card-body h4,
.Card .card-body h5 {
	color: var(--color-primary);
	transition: var(--transition-ease);
}

.Card .card-body p {
	color: var(--color-black);
	font-size: 0.9rem;
	text-align: justify;
	text-justify: inter-word;
	margin-bottom: 0.5rem;
	transition: var(--transition-ease);
}

.Card .links {
	float: right;
}

.Card .links > a {
	width: 100%;
	border-radius: 0;
}

.Card .links > a > .icon {
	color: var(--color-dark-gray);
	font-size: 1.5rem;
	transition: var(--transition-cubic);
}

.Card .links > a > .icon:hover {
	color: var(--color-primary);
}

.Card .images > img {
	height: 1.25rem;
}

.Card .images > img:not(:last-of-type) {
	margin-right: 1rem;
}



.Card .card-footer {
	background: none;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 0;
	border-top: 1px solid rgba(127, 127, 127, 0.25);
}

.Card .card-footer > span {
	font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
	font-size: 0.75rem;
	color: var(--color-dark-gray);
	transition: var(--transition-ease);
}

.Card .card-footer > span:not(:last-of-type)::after {
	content: " "
}



/* MEDIUM SCREENS + */
@media (min-width: 768px) {
	.Card:hover {
		box-shadow: none;
		transform: none;
	}
}
</style>



<script>
export default {
	props: {
		'title': String,
		'links': Array,
		'images': Array,
		'text': Array,
		'feet': Array,
	}
}
</script>