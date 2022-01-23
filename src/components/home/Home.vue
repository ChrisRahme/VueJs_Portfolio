<template>
<div id="Home">
	<Title class="color-transparent"/>
	<!-- <Avatar class="color-transparent" width="264px" height="280px"/> -->
	<Brief class="color-primary"/>
	<Skills class="color-transparent"/>
</div>
</template>



<style scoped>
#Home #Title {
	padding-top: 4rem;
	margin-bottom: 0;
}
</style>



<script>
import Title from './Title.vue'
import Avatar from '../common/Avatar.vue'
import Brief from './Brief.vue'
import Skills from './Skills.vue'

export default {
	components: {
		Title,
		Avatar,
		Brief,
		Skills
	}
}
</script>