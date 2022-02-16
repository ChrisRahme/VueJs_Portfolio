<template>
<section id="Skills">
	<div class="container">
		<h1>Skills</h1>

		<div class="row">
			<div class="col">
				<Task v-for="(skill, idx_s) in skills_left" :key="idx_s"
					:title="skill.title" :details="skill.details"
				/>
			</div>

			<div class="col">
				<Task v-for="(skill, idx_s) in skills_right" :key="idx_s"
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
			skills_left: [
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

			skills_right: [
				{
					title: 'Other Dev Tools',
					details: [
						'REST',
						'Windows, Linux',
					]
				},
				{
					title: 'Databases',
					details: [
						'MySQL, SQLite',
						'Redis, MongoDB',
						'Elasticsearch',
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