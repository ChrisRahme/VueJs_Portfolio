import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import App from './App.vue'

// import 'jquery/dist/jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt, faEnvelope, faHouseUser, faMoon, faPhone, faSun } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV, faGripLinesVertical, faBars, faShareSquare } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faAndroid, faCss3, faDocker, faDrupal, faHtml5, faJava, faJsSquare, faLaravel, faPhp, faPython, faReact, faUnity, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDiscord, faFacebookF, faGithub, faGoogle, faGooglePlay, faInstagram, faLinkedinIn, faQuora, faRedditAlien, faSnapchat, faStackOverflow, faSteam, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'



library.add( // Contact
	faHouseUser, faEnvelope, faPhone
)
library.add( // Icons
	faMoon, faSun
)
library.add( // Design
	faAt, faBars, faEllipsisV, faGripLinesVertical, faShareSquare
)
library.add( // Brands - Programming
	faAndroid, faCss3, faDocker, faDrupal, faHtml5, faJava, faJsSquare, faLaravel, faPhp, faPython,
	faReact, faUnity, faVuejs
)
library.add( // Brands - Social Media
	faDiscord, faFacebookF, faGithub, faGoogle, faGooglePlay, faInstagram, faLinkedinIn, faQuora,
	faRedditAlien, faSnapchat, faStackOverflow, faSteam, faTwitter, faWhatsapp, faYoutube
)


const routes = [

]

createApp(App)
	// .mixin(mixin_theme)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')