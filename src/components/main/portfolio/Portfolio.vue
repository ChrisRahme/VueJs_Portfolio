<template>
<div id="Portfolio">
	<Experience class="color-transparent"/>
	<Projects class="color-primary"/>
	<Skills class="color-transparent"/>
</div>
</template>



<style scoped>
#Portfolio {
	padding-top: 4rem;
}
</style>



<script>
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'

export default {
	components: {
		Experience,
		Projects,
		Skills
	}
}
</script>