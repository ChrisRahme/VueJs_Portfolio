<template>
<div id="Contact">
	<ContactForm class="color-transparent"/>
	<ContactIcons class="color-transparent"/>
</div>
</template>



<style scoped>
#Contact #ContactForm {
	padding-top: 4rem;
	padding-bottom: 0;
}

#Contact #ContactIcons {
	padding-top: 6rem;
	padding-bottom: 6rem;
}
</style>



<script>
import ContactForm from "./ContactForm.vue"
import ContactIcons from "./ContactIcons.vue"

export default {
	components: {
		ContactForm,
		ContactIcons
	}
}
</script>