<template>
<div id="Solar">
	<section id="Solar1">
		<div class="container">
			<div id="calculator-inputs" class="row">
				<div class="col-12 col-md-6 col-lg-4 col-xl-4 form-group">
					<label for="panel-rows">
						<p>Number of panel rows</p>
					</label>
					<input id="panel-rows" type="number" class="form-control" min="0" placeholder="3" v-model="panel_rows" @change="calculate">
				</div>

				<div class="col-12 col-md-6 col-lg-4 col-xl-4 form-group">
					<label for="panel-length">
						<p>Solar panel length</p>
					</label>
					<input id="panel-length" type="number" class="form-control" min="0" placeholder="2.23" v-model="panel_length" @change="calculate">
				</div>

				<div class="col-12 col-md-6 col-lg-4 col-xl-4 form-group">
					<label for="panel-angle">
						<p>Solar panel angle</p>
						<p>0&deg; to 90&deg;</p>
					</label>
					<input id="panel-angle" type="number" class="form-control" min="0" max="90" placeholder="30" v-model="panel_angle" @input="calculate">
					<!-- <input id="panel-angle" type="range" class="form-range" min="0" max="90" step="0.5" placeholder="30" v-model="panel_angle" @input="calculate"> -->
				</div>

				<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
					<label for="sun-time">
						<p>Time of lowest Sun angle</p>
					</label>
					<input id="sun-time" type="time" class="form-control" placeholder="07:30" v-model="sun_time" @input="calculate">
				</div>

				<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
					<label for="latitude">
						<p>Latitude</p>
						<p>-80&deg; to 80&deg;</p>
					</label>
					<input id="latitude" type="number" class="form-control" min="-80" max="80" placeholder="35.5" v-model="latitude" @input="calculate">
					<!-- <input id="latitude" type="range" class="form-range" min="-80" max="80" step="0.1" placeholder="35.5" v-model="latitude" @input="calculate"> -->
				</div>

				<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
					<label for="longitude">
						<p>Longitude</p>
						<p>-180&deg; to 180&deg;</p>
					</label>
					<input id="longitude" type="number" class="form-control"  min="-180" max="180" placeholder="53.3" v-model="longitude" @input="calculate">
					<!-- <input id="longitude" type="range" class="form-range" min="-180" max="180" step="0.1" placeholder="53.3" v-model="longitude" @input="calculate"> -->
				</div>

				<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
					<label for="set-location">
						<p>&nbsp;</p>
					</label>
					<button id="set-location" type="button" class="btn btn-primary" placeholder="0" style="width: 100%" @click="setLocation" @input="calculate">Set to current location</button>
				</div>
			</div>

			<div id="calculator-outputs" class="row">
				<div class="col-6 col-md-4 col-lg-3 col-xl-2 form-group">
					<label for="panel-height">
						<p>Panel height</p>
					</label>
					<input id="panel-height" type="number" class="form-control" v-model="panel_height" disabled>
				</div>

				<div class="col-6 col-md-4 col-lg-3 col-xl-2 form-group">
					<label for="panel-width">
						<p>Panel width</p>
					</label>
					<input id="panel-width" type="number" class="form-control" v-model="panel_width" disabled>
				</div>

				<div class="col-6 col-md-4 col-lg-3 col-xl-2 form-group">
					<label for="sun-angle">
						<p>Sun angle</p>
					</label>
					<input id="sun-angle" type="text" class="form-control" v-model="sun_angle_str" disabled>
				</div>

				<div class="col-6 col-md-4 col-lg-3 col-xl-2 form-group">
					<label for="head-to-feet">
						<p>Head to feet</p>
					</label>
					<input id="head-to-feet" type="number" class="form-control" v-model="head_to_feet" disabled>
				</div>

				<div class="col-6 col-md-4 col-lg-3 col-xl-2 form-group">
					<label for="feet-to-feet">
						<p>Feet to feet</p>
					</label>
					<input id="feet-to-feet" type="number" class="form-control" v-model="feet_to_feet" disabled>
				</div>

				<div class="col-6 col-md-4 col-lg-3 col-xl-2 form-group">
					<label for="total-length">
						<p>Total Length</p>
					</label>
					<input id="total-length" type="number" class="form-control" v-model="total_length" disabled>
				</div>
			</div>

			<div id="drawing" class="row">
				<div class="col">
					<div id="canvas"></div>
				</div>
			</div>
		</div>
	</section>
</div>
</template>



<style scoped>
#Solar1 {
	text-align: left;
}

#Solar1 > .container > .row:not(:last-child) {
	margin: 0 0 2.5rem 0;
}

#Solar1 #calculator-inputs .form-group,
#Solar1 #calculator-outputs .form-group {
	margin-bottom: 1rem;
}

#Solar1 #calculator-inputs label,
#Solar1 #calculator-outputs label {
	color: var(--color-primary);
	display: block;
}

#Solar1 #calculator-inputs label > p:nth-child(1),
#Solar1 #calculator-outputs label > p:nth-child(1) {
	float: left;
	margin: 0 auto 0 0;
	font-weight: bold;
}

#Solar1 #calculator-inputs label > p:nth-child(2),
#Solar1 #calculator-outputs label > p:nth-child(2) {
	float: right;
	margin: 0 0 0 auto;
	color: var(--color-black);
}

#Solar1 #calculator-inputs label {
	margin: 0 0 0.5rem 0;
}

#Solar1 #calculator-outputs label {
	margin: 0 0 0 0;
}

#Solar1 #calculator-inputs input,
#Solar1 #calculator-outputs input {
	border: none;
}

#Solar1 #calculator-outputs input {
	color: var(--color-dark);
    background: transparent;
}

/* MEDIUM SCREENS - */
@media (max-width: 768px) {
	#Solar1 #drawing {
		display: none;
	}
}

#Solar1 #drawing #canvas {
	display: flex;
    align-items: center;
    justify-content: center;
	background-color: white;
	padding: 1rem;
	border: none;
	border-radius: 5px;
}
</style>



<script>
import P5 from 'p5'

export default {
	data() {
		return {
			// User inputs
			panel_rows   : 3,
			panel_length : 2.23,
			panel_angle  : 30,
			latitude     : 33.9214,
			longitude    : 35.8934,
			sun_time     : '07:30',

			// Calculated values
			panel_height  : 0,
			panel_width   : 0,
			sun_angle     : 0,
			sun_angle_str : '',
			head_to_feet  : 0,
			feet_to_feet  : 0,
			total_length  : 0,

			// Graph
			canvas 	     : null,
		}
	},

	created() {
		window.addEventListener('resize', this.draw)
	},

	mounted() {
		this.calculate()
	},

	destroyed() {
		window.removeEventListener('resize', this.draw)
	},

	computed: {
		suncalc_url: function() {
			const date = this.getDate()
			const url  = `https://suncalc.org/#/${this.latitude},${this.longitude},12/${date}/${this.sun_time}/1/3`

			return url
		}
	},

	methods: {
		getDate: function() {
			return new Date().toISOString().split('T')[0].replace(/-/g, '.')
		},

		getSunCalcUrl: function() {
			return this.suncalc_url
		},

		setLocation: function() {
			const _this = this

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					function (position) {
						_this.latitude  = position.coords.latitude
						_this.longitude = position.coords.longitude
					}),

					function (error) {
						switch(error.code) {
							case error.PERMISSION_DENIED:
								alert('Geolocation request denied')
								break
							case error.POSITION_UNAVAILABLE:
								alert('Location is unavailable')
								break
							case error.TIMEOUT:
								alert('Request timed out')
								break
							case error.UNKNOWN_ERROR:
								alert('Unknown error occurred')
								break
						}
					},

					{
						enableHighAccuracy: true,
						timeout: 10000,
						maximumAge: 0
					}
			} else {
				alert('Geolocation is not supported by this browser')
				document.getElementById('set-location').parentNode.remove()
			}

			this.calculate()
		},

		getSunAngle: function(date, lat, lng) {
			// https://github.com/mourner/suncalc/

			const dayMs = 1000 * 60 * 60 * 24 // 1 day in milliseconds
			const J1970 = 2440588             // Julian day at 1970-01-01
			const J2000 = 2451545             // Julian day at 2000-01-01

			const rad   = Math.PI / 180 // degree to radians
			const deg   = 180 / Math.PI // radians to degrees

			const lw  = -lng * rad
			const phi = +lat * rad

			const days = date.valueOf() / dayMs - 0.5 + J1970 - J2000

			const solar_mean_anomaly = (357.5291 + 0.98560028 * days) * rad
			const center             = (1.9148 * Math.sin(solar_mean_anomaly) + 0.02 * Math.sin(2*solar_mean_anomaly) + 0.0003 * Math.sin(3*solar_mean_anomaly)) * rad
			const perihelion         = 102.9372 * rad
			const ecliptic_longitude = solar_mean_anomaly + center + perihelion + Math.PI

			const obliquity       = 23.4397 * rad
			const declination     = Math.asin(Math.sin(obliquity) * Math.sin(ecliptic_longitude))
			const right_ascension = Math.atan(Math.cos(obliquity) * Math.sin(ecliptic_longitude))

			const sidereal_time = (280.16 + 360.9856235 * days) * rad - lw
			const H             = sidereal_time - right_ascension
			const altitude      = Math.asin(Math.sin(phi) * Math.sin(declination) + Math.cos(phi) * Math.cos(declination) * Math.cos(H))

			return altitude * deg
		},

		calculate: function() {
			this.validateInputs()

			const rad = Math.PI / 180 // degree to radians

			const date_time      = new Date(`${this.getDate()} ${this.sun_time}`)
			const true_sun_angle = this.getSunAngle(date_time, this.latitude, this.longitude)
			const sun_angle      = Math.max(10, true_sun_angle)

			const panel_rad = this.panel_angle * rad // φ
			const sun_rad   = sun_angle        * rad // θ

			const panel_height = this.panel_length * Math.sin(panel_rad) // h = l * sin(φ)
			const panel_width  = this.panel_length * Math.cos(panel_rad) // w = l * cos(φ)

			const head_to_feet = panel_height / Math.tan(sun_rad) // v = h / tan(θ)
			const feet_to_feet = head_to_feet + panel_width       // d = v + w
			const total_length = Math.max(0, (this.panel_rows - 1) * feet_to_feet + panel_width)

			this.panel_height  = panel_height.toFixed(2)
			this.panel_width   = panel_width.toFixed(2)
			this.sun_angle     = sun_angle.toFixed(2)
			this.sun_angle_str = (sun_angle == true_sun_angle ? '' : '<') + this.sun_angle
			this.head_to_feet  = head_to_feet.toFixed(2)
			this.feet_to_feet  = feet_to_feet.toFixed(2)
			this.total_length  = total_length.toFixed(2)

			this.validateOutputs()

			this.draw()
		},

		draw: function() {
			const _this = this

			// Variables
			const n = this.panel_rows
			const l = this.panel_length
			const scale = 200 / l

			const w = this.panel_width  * scale
			const h = this.panel_height * scale
			const v = this.head_to_feet * scale
			const d = this.feet_to_feet * scale

			const t = this.sun_angle
			const f = this.panel_angle

			// Canvas
			const canvas    = document.getElementById('canvas')
			const container = canvas.parentNode
			const width  = d+w //container.offsetWidth
			const height = scale * l

			// Drawing
			const script = p5 => {
				p5.setup = function () {
					p5.createCanvas(width, height)
				}

				p5.draw = function () {
					p5.clear()
					p5.background(255, 255, 255)

					// https://forum.processing.org/one/topic/move-window-origin-to-lower-left.html
					p5.scale(1, -1)
  					p5.translate(0, -height)

					// Panels
					p5.stroke(0, 0, 200)
					p5.strokeWeight(4)
					p5.line(0, 0, w,   h)
					p5.line(d, 0, d+w, h)

					// Sunlight
					p5.stroke(220, 220, 0)
					p5.strokeWeight(1)
					p5.line(w-scale*v, h+scale*h, d, 0) // line(w-kv, h+kh, d, 0)
				}
			}

			canvas.innerHTML = ''
			this.canvas = new P5(script, 'canvas')
		},

		validateInputs: function() {
			this.panel_rows   = Math.max(0, parseInt(this.panel_rows))
			this.panel_length = Math.max(0, parseFloat(this.panel_length))
			this.panel_angle  = Math.max(0, Math.min(90, parseFloat(this.panel_angle)))
			this.latitude     = Math.max(-90, Math.min(90, parseFloat(this.latitude)))
			this.longitude    = Math.max(-180, Math.min(180, parseFloat(this.longitude)))
		},

		validateOutputs: function() {
			this.panel_height = Math.max(0, parseFloat(this.panel_height))
			this.panel_width  = Math.max(0, parseFloat(this.panel_width))
			this.sun_angle    = Math.max(0, parseFloat(this.sun_angle))
			this.head_to_feet = Math.max(0, parseFloat(this.head_to_feet))
			this.feet_to_feet = Math.max(0, parseFloat(this.feet_to_feet))
			this.total_length = Math.max(0, parseFloat(this.total_length))
		}
	}
}
</script>