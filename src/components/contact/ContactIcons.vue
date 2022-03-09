<template>
<section id="ContactIcons" aria-label="Contact Links">
	<div class="container">
		<address class="row icons">
			<div class="col col-12 col-md-4">
				<a class="call" target="_blank" href="tel:+961-71-283-701">
					<font-awesome-icon class="icon" size="2x" title="Call"     :icon="['fa', 'phone']"/>
					<p class="icon">+961 71 283 701</p>
				</a>
			</div>

			<div class="col col-12 col-md-4">
				<a class="mail" target="_blank" href="mailto:chrisrahme.dev@gmail.com">
					<font-awesome-icon class="icon" size="2x" title="Mail"     :icon="['fa', 'envelope']"/>
					<p class="icon">chrisrahme.dev@gmail.com</p>
				</a>
			</div>

			<div class="col col-12 col-md-4">
				<a class="wapp" target="_blank" href="https://wa.me/96171283701">
					<font-awesome-icon class="icon" size="2x" title="WhatsApp" :icon="['fab', 'whatsapp']"/>
					<p class="icon">+961 71 283 701</p>
				</a>
			</div>
		</address>
	</div>
</section>
</template>



<style scoped>
#ContactIcons .icons {
	margin: 0 auto;
}

#ContactIcons .icons a > .icon {
	margin: 0.75rem;
	color: var(--color-dark);
	text-align: center;
	transition: var(--transition-ease);
}

#ContactIcons .icons a > svg.icon {
	margin-bottom: 0;
}

#ContactIcons .icons a > p.icon {
	margin-top: 0;
}


#ContactIcons .icons a.call > svg.icon {
	font-size: 1.75rem;
}


#ContactIcons .icons a:hover > .icon {
	color: var(--color-primary);
	cursor: pointer;
	transform: scale(1.05);
}


#ContactIcons .icons a.call:hover > .icon {
	color: #D36525;
}

#ContactIcons .icons a.wapp:hover > .icon {
	color: #25D366;
}

#ContactIcons .icons a.mail:hover > .icon {
	color: #6525D3;
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
		isValid() {
			return true

			const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

			return (this.name.trim().length > 0 && this.email.match(emailRegex) && this.message.trim().length > 10)
		},

		/*mailCallback(error, info) {
			var response = document.getElementById('form-response')

			if (error) {
				response.classList.remove('error')
				response.classList.add('success')
				response.innerText = 'Error: ' + error

				this.submitted = false
				console.error(error)
			} else {
				response.classList.add('error')
				response.classList.remove('success')
				response.innerText = 'Email sent: ' + error

				this.name = ''
				this.email = ''
				this.subject = ''
				this.message = ''

				this.submitted = true
				console.log(info.response)
			}
		},

		sendMail() {
			const auth = {
				user: 'web.chrisrahme@gmail.com',
				pass: '4%lNE%$uq%aNdWTEoSfE4u2y59Js83rX'
			}

			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: auth
			})

			var mailOptions = {
				from: auth.user,
				to: 'christopher.rahme@gmail.com',
				subject: (this.subject.trim() == '')
					? (this.name.trim())
					: (this.name.trim() + ' || ' + this.subject.trim()),
				text: this.email.trim() + '\n\n==========\n\n' + this.message.trim()
			}

			transporter.sendMail(mailOptions, this.mailCallback)
		},*/

		submit() {
			var response = document.getElementById('form-response')

			if (this.isValid()) {
				response.classList.remove('error')
				response.classList.add('success')

				const sub =  this.subject.trim()
				const bod = this.message.trim()

				window.open(`mailto:web.chrisrahme@gmail.com?subject=${sub}&body=${bod}`)
				this.submitted = true
			} else {
				response.classList.remove('success')
				response.classList.add('error')

				this.submitted = false
			}
		}
  	}
}
</script>