<template>
<section id="Experience">
	<div class="container">
		<div v-for="(section, idx) in this.sections" :key="idx" class="section">
			<div v-if="section.show">
				<h1>{{section.title}}</h1>

				<Task v-for="(task, idx_t) in section.tasks" :key="idx_t"
					:start="task.start" :end="task.end" :title="task.title" :location="task.location" :details="task.details"
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
import Task from "../common/Task.vue"

export default {
	components: {
		Task
	},

	data() {
		return {
			sections: [
				{
					title: 'Education',
					show: true,
					tasks: [
						{
							start: 'Nov 2021', //end: 'Present',
							title: 'Masters 2 in Artificial Intelligence',
							location: 'Saint-Joseph University of Beirut',
							details: [
								'Currently doing a Masters in Artificial Intelligence, learning about Computer Vision, NLP, and more.',
								'Expecting to graduate on summer of 2022.'
							]
						},
						{
							start: 'Sep 2016', end: 'Jun 2021',
							title: 'Computer & Communications Engineering - Software Section',
							location: 'Saint-Joseph University of Beirut',
							details: [
								'Graduated with a Bachelor’s degree in Computer & Communication Engineering with a focus on Software Engineering.'
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

				{
					title: 'Experience',
					show: true,
					tasks: [
						{
							start: 'Sep 2021', //end: 'Present',
							title: 'Full-Stack Web Developer & Data Integration Analyst (Full-time)',
							location: 'Data Consult',
							details: [
								'Working on building CRMs, dashboards, and other projects such as a Google Chat chatbot.',
								'Maily working with Laravel, Vue, NodeJS, and Node-RED.'
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
				}
			]
		}
  	}
}
</script>