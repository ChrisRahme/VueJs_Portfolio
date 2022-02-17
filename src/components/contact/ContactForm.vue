<template>
<section id="ContactForm">
	<div class="container">
		<form @submit.prevent="submit">
			<fieldset>
				<legend>Contact Me</legend>

				<div class="form-group">
					<label class="form-label" for="name" required>Name</label>
					<input class="form-control" type="text" name="name" id="name" v-model="name" required>
				</div>

				<!-- <div class="form-group">
					<label class="form-label" for="email" required>Email</label>
					<input class="form-control" type="email" name="email" id="email" v-model="email" required>
				</div> -->

				<div class="form-group">
					<label class="form-label" for="subject">Subject</label>
					<input class="form-control" type="text" name="subject" id="subject" v-model="subject">
				</div>

				<div class="form-group">
					<label class="form-label" for="message" required>Message</label>
					<textarea class="form-control" name="message" id="message" v-model="message" required></textarea>
				</div>

				<div class="form-group">
					<input class="btn btn-lg btn-primary" type="submit" name="send" id="send" value="Send" @submit="submit">
					<p id="form-response" class="response"></p>
				</div>
			</fieldset>
		</form>
	</div>
</section>
</template>



<style scoped>
#ContactForm form {
	min-width: 50vw;
	max-width: 50%;
	margin: 0 auto;
}

#ContactForm legend {
	color: var(--color-primary);
	font-size: 3rem;
    font-weight: 400;
	line-height: 1.2;
    margin-bottom: 2rem;
}

#ContactForm .form-label {
	display: block;
	font-size: 1.1rem;
	font-weight: 500;
	text-align: left;
	color: var(--color-dark);
	margin: 1rem 0 0.25rem 0;
}

#ContactForm .form-label[required]:after {
	content: ' *';
	color: red;
}

#ContactForm .form-control {
	padding: 0.75rem;
	border: 1px solid var(--color-lighter-gray);
	background-color: var(--color-white);
	border-radius: 0.25em;
	box-shadow: inset 0 0 0 var(--color-dark);
}

#ContactForm .form-control:focus {
	outline: none;
	border-color: var(--color-primary);
}

#ContactForm textarea {
	min-height: 9.25rem;
	resize: vertical;
	overflow: auto;
}

#ContactForm .btn {
	cursor: pointer;
	margin: 1.5rem 0 0 0;
	width: 100%;
	background-color: var(--color-primary);
	border-color: var(--color-primary);
	box-shadow: inset 0 0 0 var(--color-dark);
}

#ContactForm .btn:focus {
	outline: none;
}

#ContactForm .response {
	text-align: left;
	size: 1.1rem;
	font-weight: bold;
	margin-top: 1rem;
}

#ContactForm .response.success {
	color: var(--color-primary);
}

#ContactForm .response.error {
	color: red;
}
</style>



<script>
// import nodemailer from 'nodemailer'

export default {
	data() {
		return {
			name: '',
			email: '',
			subject: '',
			message: '',
			submitted: false
		}
  	},

	computed: {
		response: function() {
			if (this.submitted) {
				return 'Email sent!'
			} else {
				return ''
			}
		}
	},

	methods: {
		submit() {
			var response = document.getElementById('form-response')

			response.classList.remove('error')
			response.classList.add('success')

			const sub = encodeURIComponent(
				this.subject.trim()
			)

			const bod = encodeURIComponent(
				this.message.trim() +
				'\n\n' + '='.repeat(30) + '\n\n' +
				'From: ' + this.name.trim() + '\n'
			)

			window.open(`mailto:web.chrisrahme.dev@gmail.com?subject=${sub}&body=${bod}`)
			this.submitted = true
		}
  	}
}
</script>