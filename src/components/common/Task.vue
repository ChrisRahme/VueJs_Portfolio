<template>
<div class="Task row">
	<div v-if="this.start || this.end" class="col-lg-2 dates">
		<h5 v-if="this.start && this.end">{{this.start}} - {{this.end}}</h5>
		<h5 v-else>{{this.start}} - Present</h5>
	</div>

	<details class="col-lg">
		<summary>
			<h5>{{this.title}}</h5>
			<h6 v-if="this.location">&nbsp;&nbsp;&nbsp;&nbsp;- {{this.location}}</h6>
		</summary>

		<span v-if="this.details">
			<p v-for="(paragraph, p_idx) in this.details" :key="p_idx">{{paragraph}}</p>
		</span>
	</details>
</div>
</template>



<style scoped>
.Task {
	margin-bottom: 2rem;
}

.Task .dates * {
	font-size: 1rem;
	text-align: left;
	color: var(--color-primary);
}

.Task summary * {
	display: inline-block;
	font-size: 1rem;
	margin: 0;
}

.Task summary h6 {
	font-style: italic;
	color: var(--color-gray)
}

.Task details p {
	margin-left: 1rem;
	margin-bottom: 0;
}


/* LARGE SCREENS */
@media (min-width: 992px) {
	.Task .dates * {
		text-align: right;
	}
}
</style>



<script>
export default {
	props: {
		'start': String,
		'end': String,
		'title': String,
		'location': String,
		'details': Array
	},
}
</script>