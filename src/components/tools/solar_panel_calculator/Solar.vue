<template>
<div id="Solar">
	<section id="Solar1">
		<div class="container">
			<p class="mb-4">
				To get the lowest angle of the Sun in your location, go to
				<a
					href="https://www.suncalc.org/#/34.2573,35.997,12/2022.04.17/08:00/1/3"
					target="_blank"
				>SunCalc.org</a>.
				<br><br>
				Place your cursor on the location on the map, and enter the time where the Sun is
				at the lowest angle, but still in front of the solar panels.
				<br><br>
				Then, check the value for "Altitude" in the left panel and enter it in the "Lowest
				Sun angle" input field below.
				<br><br>
			</p>

			<div id="calculator">
				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="panel-rows">Number of panel rows</label>
						<input id="panel-rows" type="number" class="form-control" placeholder="3" v-model="panelRows" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="panel-length">Solar panel length</label>
						<input id="panel-length" type="number" class="form-control" placeholder="2.23" v-model="panelLength" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="panel-angle">Solar panel angle</label>
						<input id="panel-angle" type="number" class="form-control" placeholder="30" v-model="panelAngle" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="latitude">Latitude</label>
						<input id="latitude" type="number" class="form-control" placeholder="33.9214" v-model="latitude" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="longitude">Longitude</label>
						<input id="longitude" type="number" class="form-control" placeholder="35.8934" v-model="longitude" @change="calculate">
					</div>

					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="set-location">&nbsp;</label><br>
						<button id="set-location" type="button" class="btn btn-primary" placeholder="0" style="width: 100%" @click="setLocation">Set to my location</button>
					</div>

					<div class="col-12 col-md-6 col-lg-4 form-group">
						<label for="sun-time">Time of lowest Sun angle</label>
						<input id="sun-time" type="time" class="form-control" placeholder="07:30" v-model="sunTime">
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
								alert('User denied the request for Geolocation.')
								break
							case error.POSITION_UNAVAILABLE:
								alert('Location information is unavailable.')
								break
							case error.TIMEOUT:
								alert('The request to get user location timed out.')
								break
							case error.UNKNOWN_ERROR:
								alert('An unknown error occurred.')
								break
						}
					}
			} else {
				alert('Geolocation is not supported by this browser.')
				document.getElementById('set-location').parentNode.remove()
			}
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

			console.log(suncalc_url)
			this.axios({
				method: 'get',
				url: 'https://www.suncalc.org/#/33.9214,35.8934,11/2022.04.18/07:30/1000/3',
				headers: { }
			}).then((response) => {
				alert('yay')
				console.log(response.data)
			}).catch((error) => {
				alert('boo')
				console.log(error)
			})

			const sun_angle = 20 // TODO try to scrape suncalc for altitude field

			const panel_height = panel_length * Math.sin(panel_angle) // h = l * sin(phi)
			const panel_width  = panel_length * Math.cos(panel_angle) // x = l * cos(phi)
			const head_to_feet = panel_height / Math.tan(sun_angle)   // v = h / tan(theta)
			const feet_to_feet = head_to_feet + panel_width           // d = v + x

			const total_length = (panel_rows - 1) * feet_to_feet + panel_width

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