<template>
<section id="Experience" aria-label="Experience">
	<div class="container">
		<div v-for="(section, idx) in this.sections" :key="idx" class="section">
			<div v-if="section.show">
				<h1>{{section.title}}</h1>

				<Task v-for="(task, idx_t) in section.tasks" :key="idx_t"
					:start="task.start" :end="task.end" :title="task.title" :subtitle="task.location" :details="task.details"
				/>
			</div>
		</div>
	</div>
</section>
</template>



<style scoped>
#Experience {
	text-align: left;
}

#Experience .section:not(:last-child) {
	margin-bottom: 6rem;
}

#Experience .section h1 {
	margin-bottom: 2rem;
}
</style>



<script>
import Task from "../../common/Task.vue"

export default {
	components: {
		Task
	},

	data() {
		return {
			sections: [
				{
					title: 'Experience',
					show: true,
					tasks: [
						{
							start: 'Sep 2021', //end: 'Present',
							title: 'Full-Stack Web Developer & Data Integration Analyst (Full-time)',
							location: 'Data Consult',
							details: [
								'Maily working with Laravel, Node-RED, Python, and Docker.',
								'',
								'Major tasks:',
								'- Google Chat chatbot for internal use (Google Apps, NodeJS).',
								'- Cisco phone call recording module for web app (Laravel, Node-RED, Asterisk).',
								'- Audio sentiment analysis submodule for call recording module (Python).',
								'- CRUD and CRM app to manage clients\'s profile and licenses (Python Django, Node-RED).'
							]
						},
						{
							start: 'Sep 2020', end: 'May 2021',
							title: 'Astronomy Teacher (Part-time)',
							location: 'Al-Hayat International School',
							details: [
								'Prepared lessons and taught astronomy as an elective to students aged 8 to 15.',
								'The courses ranged from the basics to cosmology, astrophysics, and alien life.'
							]
						},
						{
							start: 'Jun 2020', end: 'Sep 2020',
							title: 'Drupal Web Developer (Internship)',
							location: 'Saint-Joseph University of Beirut',
							details: [
								'Worked on a proof-of-concept migration of Saint-Joseph University\'s website.',
								'Worked with custom themes, custom entities, and custom views.'
							]
						},
						{
							start: 'Jun 2019', end: 'Aug 2019',
							title: 'Google Web Toolkit Developer (Internship)',
							location: 'Neumann',
							details: [
								'Worked on a Big Data project that aims to build a GWT Java application used to view and manipulate a MySQL database.'
							]
						}
					]
				},

				{
					title: 'Education',
					show: true,
					tasks: [
						{
							start: 'Nov 2021', //end: 'Present',
							title: 'Masters 2 in Artificial Intelligence',
							location: 'Saint-Joseph University of Beirut',
							details: [
								'Currently doing a Masters in Artificial Intelligence. Expecting to graduate mid-to-end 2022.',
								'Courses learned: Computer Vision, NLP, Cybersecurity, Games, Control Systems.',
							]
						},
						{
							start: 'Sep 2016', end: 'Jun 2021',
							title: 'Software-Focused Computer & Communications Engineering',
							location: 'Saint-Joseph University of Beirut',
							details: [
								'Graduated with a Bachelor\'s degree in Computer & Communication Engineering with a focus on Software Engineering.'
							]
						},
						{
							start: 'Sep 2001', end: 'Jun 2016',
							title: 'Life Sciences Baccalaureate',
							location: 'Collège de la Sainte Famille Française Fanar',
							details: [
								'Graduated with a Lebanese Baccalaureate in Life Sciences.'
							]
						}
					]
				},
			]
		}
  	}
}
</script>