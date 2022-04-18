<template>
<div id="Solar">
	<section id="Solar1">
		<div class="container">
			<div id="calculator">
				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="panel-rows">Number of panel rows</label>
						<input id="panel-rows" type="number" class="form-control" placeholder="3" v-model="panelRows" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="panel-length">Solar panel length</label>
						<input id="panel-length" type="number" class="form-control" placeholder="2.23" v-model="panelLength" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="panel-angle">Solar panel angle</label>
						<input id="panel-angle" type="number" class="form-control" placeholder="30" v-model="panelAngle" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="sun-time">Time of lowest Sun angle</label>
						<input id="sun-time" type="time" class="form-control" placeholder="07:30" v-model="sunTime">
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="latitude">Latitude</label>
						<input id="latitude" type="number" class="form-control" placeholder="33.9214" v-model="latitude" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="longitude">Longitude</label>
						<input id="longitude" type="number" class="form-control" placeholder="35.8934" v-model="longitude" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 form-group">
						<label for="set-location">&nbsp;</label>
						<button id="set-location" type="button" class="btn btn-primary" placeholder="0" style="width: 100%" @click="setLocation">Set to my location</button>
					</div>
				</div>
			</div>

			<table id="results">
				<tr id="panel-height">
					<th>Panel height</th>
					<td><input disabled v-model="panelHeight"></td>
				</tr>
				<tr id="panel-width">
					<th>Panel width</th>
					<td><input disabled v-model="panelWidth"></td>
				</tr>
				<tr id="sun-angle">
					<th>Lowest Sun angle</th>
					<td><input disabled v-model="sunAngle"></td>
				</tr>
				<tr id="head-to-feet">
					<th>Head to feet</th>
					<td><input disabled v-model="headToFeet"></td>
				</tr>
				<tr id="feet-to-feet">
					<th>Feet to feet</th>
					<td><input disabled v-model="feetToFeet"></td>
				</tr>
				<tr id="total-length">
					<th>Total length</th>
					<td><input disabled v-model="totalLength"></td>
				</tr>
			</table>
		</div>
	</section>
</div>
</template>



<style scoped>
#Solar #calculator > .row > div.form-group {
	margin-bottom: 2rem;
}
</style>



<script>
export default {
	data() {
		return {
			// User inputs
			panelRows: 3,
			panelLength: 2.23,
			panelAngle: 30,
			latitude: 33.9214,
			longitude: 35.8934,
			sunTime: '07:30',

			// Calculated values
			panelHeight: 0,
			panelWidth: 0,
			sunAngle: 0,
			headToFeet: 0,
			feetToFeet: 0,
			totalLength: 0,
		}
	},


	mounted() {
		// calculate()
	},

	computed: {
		suncalc_url: function() {
			return 'https://suncalc.org/'
		}
	},

	methods: {
		getSunCalcUrl: function(latitude, longitude, date, time) {
			return `https://suncalc.org/#/${latitude},${longitude},12/${date}/${time}/1/3`
		},

		setLocation: function() {
			var _this = this

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
				alert('Geolocation is not supported by this browser.')
				document.getElementById('set-location').parentNode.remove()
			}
		},

		getSunAngle: function(date, lat, lng) {
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
			const panel_rows   = this.panelRows
			const panel_length = this.panelLength                // l
			const panel_angle  = this.panelAngle * Math.PI / 180 // phi

			const latitude     = this.latitude
			const longitude    = this.longitude
			const sun_time     = this.sunTime

			const date_today   = new Date().toISOString().slice(0, 10).replace(/-/g, '.')
			const suncalc_url  = this.getSunCalcUrl(latitude, longitude, date_today, sun_time)

			const date_time = new Date(`${date_today} ${sun_time}`)
			const sun_angle = this.getSunAngle(date_time, latitude, longitude)

			const panel_height = panel_length * Math.sin(panel_angle) // h = l * sin(phi)
			const panel_width  = panel_length * Math.cos(panel_angle) // x = l * cos(phi)
			const head_to_feet = panel_height / Math.tan(sun_angle)   // v = h / tan(theta)
			const feet_to_feet = head_to_feet + panel_width           // d = v + x
			console.log(head_to_feet, feet_to_feet)

			const total_length = Math.max(0, (panel_rows - 1) * feet_to_feet + panel_width)

			this.panelHeight = panel_height.toFixed(2)
			this.panelWidth  = panel_width.toFixed(2)
			this.sunAngle    = sun_angle.toFixed(2)
			this.headToFeet  = head_to_feet.toFixed(2)
			this.feetToFeet  = feet_to_feet.toFixed(2)
			this.totalLength = total_length.toFixed(2)
		}
	}
}
</script>