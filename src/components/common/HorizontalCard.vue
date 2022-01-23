<template>
<div class="HorizontalCard card">
	<div class="row">
		<div class="first col-md-2">
			<a :href="this.href"><i :class="'icon ' + this.icon"/></a>
		</div>

		<div class="second col-md-10">
			<div class="card-body">
				<a :href="this.href"><h3 class="card-title">{{this.title}}</h3></a>
				<br><!-- <hr/> -->
				<div class="content" v-for="(content, c_idx) in this.contents" :key="c_idx">
					<h4>{{content.title}}</h4>
					<ul>
						<li v-for="(text, t_idx) in content.text" :key="t_idx">
							{{text}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</template>



<style scoped>
.HorizontalCard {
	padding: 2rem;
	background-color: var(--color-white);
	border-color: var(--color-lighter-gray);
	border-radius: 0.5rem;
	transition: var(--transition-ease);
}

.HorizontalCard:hover {
	box-shadow: 0px 0px 10px 0px var(--color-dark);
	transform: scale(1.005);
}



.HorizontalCard .row > .first {
	text-align: center;
}

.HorizontalCard .row > .second {
	text-align: left;
	padding: 0;
}



.HorizontalCard .icon {
	color: var(--color-primary);
	transition: var(--transition-ease);
}

.HorizontalCard .icon:before {
	font-size: 8rem;
	margin: 0 auto 2rem auto;
}



.HorizontalCard .card-body {
	padding: 0;
	text-align: center;
}

.HorizontalCard .card-body h3 {
	color: var(--color-primary);
	margin: 0;
	font-weight: bolder;
	transition: var(--transition-ease);
}

.HorizontalCard .card-body h4 {
	color: var(--color-primary);
	font-weight: normal;
	margin-bottom: 0.5rem;
	transition: var(--transition-ease);
}

.HorizontalCard .card-body .content:not(:first-of-type) h4 {
	margin-top: 1rem;
}

.HorizontalCard .card-body hr {
	color: var(--color-gray);
}

.HorizontalCard .card-body p {
	margin-bottom: 0;
	transition: var(--transition-ease);
}

.HorizontalCard .card-body ul {
	list-style-type: none;
  	padding: 0;
	transition: var(--transition-ease);
}

.HorizontalCard .card-body li:not(:last-of-type) {
	margin-bottom: 0.5rem;
}



/* MEDIUM SCREENS */
@media (min-width: 768px) {
	.HorizontalCard {
		padding: 1rem 2rem;
	}

	.HorizontalCard:hover {
		box-shadow: none;
		transform: none;
	}

	.HorizontalCard .icon:before {
		position: absolute;
		transform: translate(-50%, 0%);
	}

	.HorizontalCard .card-body {
		padding: 0 0 0 1rem;
		text-align: left;
	}

	.HorizontalCard .card-body ul {
		list-style-type: square;
		padding: 0 0 0 2rem;
	}

	.HorizontalCard .card-body li:not(:last-of-type) {
		margin-bottom: 0;
	}
}
</style>



<script>
export default {
	props: {
		'href': String,
		'icon': String,
		'title': String,
		'contents': Array
	},

	methods: {
		parseHTML(html) {
			var t = document.createElement('span');
			t.innerHTML = html;
			return t.content;
		}
	}
}
</script>