<template>
<section id="Skills" aria-label="Skills">
	<div class="container">
		<h1>Skills</h1>

		<div class="row">
			<div class="col-12 col-md-6">
				<Task v-for="(skill, idx_s) in skills_first" :key="idx_s"
					:title="skill.title" :details="skill.details"
				/>
			</div>

			<div class="col-12 col-md-6">
				<Task v-for="(skill, idx_s) in skills_two" :key="idx_s"
					:title="skill.title" :details="skill.details"
				/>
			</div>
		</div>
	</div>
</section>
</template>



<style scoped>
#Skills {
	text-align: left;
}

#Skills h1 {
	margin-bottom: 2rem;
}
</style>



<script>
import Task from "../common/Task.vue"

export default {
	components: {
		Task
	},

	data() {
		return {
			skills_first: [
				{
					title: 'Programming Languages & Frameworks',
					details: [
						'Python, Java, C#',
						'Rasa',
						'Unity'
					]
				},
				{
					title: 'Web Languages & Frameworks',
					details: [
						'HTML, CSS',
						'JavaScript, PHP, NodeJS, Node-RED',
						'Vue, React, Laravel, Django',
						'Drupal'
					]
				},
				{
					title: 'DevOps',
					details: [
						'Agile',
						'Docker, Helm, Kubernetes',
						'Git, GitHub, GitLab',
					]
				},
			],

			skills_two: [
				{
					title: 'Databases',
					details: [
						'MySQL, SQLite',
						'Redis, MongoDB',
						'Elasticsearch',
					]
				},
				{
					title: 'Other Dev Tools',
					details: [
						'REST',
						'Windows, Linux',
					]
				},
				{
					title: 'Astronomy',
					details: [
						'Astrophysics, Cosmology',
						'Observational astronomy, Telescopes, Stargazing'
					]
				},
			]
		}
  	}
}
</script>