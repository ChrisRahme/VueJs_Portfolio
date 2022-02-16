<script setup>
</script>

<template>
<footer id="Footer">
	<div class="container">
		<h3><a href="https://chrisrahme.netlify.app">chrisrahme.netlify.app</a></h3>

		<address class="icons">
			<a class="in" target="_blank" href="https://linkedin.com/in/chris-rahme">
				<font-awesome-icon class="icon" size="2x" title="LinkedIn"       :icon="['fab', 'linkedin-in']"/>
			</a>
			<a class="gh" target="_blank" href="https://github.com/ChrisRahme">
				<font-awesome-icon class="icon" size="2x" title="GitHub"         :icon="['fab', 'github']"/>
			</a>
			<a class="so" target="_blank" href="https://stackoverflow.com/users/8978116/chris-rahmé">
				<font-awesome-icon class="icon" size="2x" title="Stack Overflow" :icon="['fab', 'stack-overflow']"/>
			</a>
			<a class="fb" target="_blank" href="https://facebook.com/Chris.Rahme.1998">
				<font-awesome-icon class="icon" size="2x" title="Facebook"       :icon="['fab', 'facebook-f']"/>
			</a>
			<a class="ig" target="_blank" href="https://instagram.com/chris.rahme.1998">
				<font-awesome-icon class="icon" size="2x" title="Instagram"      :icon="['fab', 'instagram']"/>
			</a>
			<a class="tw" target="_blank" href="https://twitter.com/ChrisRahme1998">
				<font-awesome-icon class="icon" size="2x" title="Twitter"        :icon="['fab', 'twitter']"/>
			</a>
			<a class="yt" target="_blank" href="https://youtube.com/channel/UC4RT-sfpBNT_H7tCPOMPiqw">
				<font-awesome-icon class="icon" size="2x" title="YouTube"        :icon="['fab', 'youtube']"/>
			</a>
			<a class="dc" target="_blank" href="https://discord.com/ChrisLuigiTails#8681">
				<font-awesome-icon class="icon" size="2x" title="Discord"        :icon="['fab', 'discord']"/>
			</a>
		</address>

		<button type="button" @click="this.$root.switchMode" class="btn btn-primary">Switch to <span>{{ this.$root.other_theme }}</span> mode</button>

		<div id="credits">
			<p>
				Logos made by <a href="https://fontawesome.com">Font Awesome</a> using <a href="https://www.npmjs.com/package/@fortawesome/vue-fontawesome">vue-fontawesome</a>
			</p>
			<p>
				Icons made by <a href="https://freepik.com">Freepik</a> from <a href="https://flaticon.com">flaticon.com</a>
			</p>
			<p>
				Copyright &copy; 2022 <a href="/">Chris Rahmé</a>
			</p>
		</div>
	</div>
</footer>
</template>



<style scoped>
#Footer {
	padding-top: 8rem;
	padding-bottom: 4rem;
	background-color: var(--color-primary);
	color: var(--color-light);
}



#Footer h3 {
	margin: 0 0 2.25rem 0;
}

#Footer h3 > a {
	color: var(--color-light);
}

#Footer h3 > a:hover {
	color: var(--color-dark);
}



#Footer .icons {
	margin: 0 auto 3rem auto;
	padding: 0 25%;
}

#Footer .icons > a > .icon {
	margin: 0.75rem 0.75rem 0 0.75rem;
	color: var(--color-light);
	transition: var(--transition-ease);
}

#Footer .icons > a > .icon:hover {
	color: var(--color-primary);
	cursor: pointer;
	transform: scale(1.05);
}



#Footer .icons > a.dc > .icon:hover {
	color: #5865F2;
}

#Footer .icons > a.fb > .icon:hover {
	color: #3C64A6;
}

#Footer .icons > a.gh > .icon:hover {
	color: #6E5494;
}

#Footer .icons > a.ig > .icon:hover {
	color: #F00075;
}

#Footer .icons > a.in > .icon:hover {
	color: #2867B2;
}

#Footer .icons > a.so > .icon:hover {
	color: #F48024;
}

#Footer .icons > a.tw > .icon:hover {
	color: #009EF7;
}

#Footer .icons > a.yt > .icon:hover {
	color: #FF0000;
}



#Footer .btn {
	line-height: 1.5rem;
	height: 3rem;
	border-radius: 1.5rem;
	outline: none;
	margin: 0 auto 3rem auto;
}

#Footer .btn-primary {
	background-color: var(--color-light);
	border-color: var(--color-light);
	color: var(--color-primary);
}

#Footer .btn-primary:hover {
	background-color: var(--color-dark);
	border-color: var(--color-dark);
}

#Footer .btn-primary > span {
	color: var(--color-dark);
}

#Footer .btn-primary:hover > span {
	color: var(--color-light);
}



#Footer #credits p {
	margin: 0;
}

#Footer #credits a {
	color: var(--color-light);
	transition: var(--transition-cubic);
}

#Footer #credits a:hover {
	color: var(--color-light);
	text-decoration: underline;
}
</style>



<script>
export default {}
</script>