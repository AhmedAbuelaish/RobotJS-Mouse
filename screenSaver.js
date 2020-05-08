// Move the mouse across the screen as a sine wave.
var robot = require('robotjs')

// Speed up the mouse.
robot.setMouseDelay(1)

var twoPI = Math.PI * 2.0
var screenSize = robot.getScreenSize()
var height = screenSize.height / 2 - 10
var width = screenSize.width
var radius = Math.min(height/10 - 50,width/10 - 50)
const startTime = new Date()
var currentTime, runTime , hours, mins, secs
var counter=0

sineWaveCycle()
// seedOfLifeCycle()

function print(){
	// Timer:
	currentTime = new Date()
	runTime = Math.round((currentTime - startTime)/1000) //in secs
	hours = Math.floor(runTime /3600 % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
	mins = Math.floor(runTime /60 % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
	secs = (runTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
	// Message:
	console.clear()
	console.log('')
	console.log('---------------screenSaver.js is running---------------')
	console.log ('start time:', startTime.toLocaleString())
	console.log ('run time:', hours+':'+mins+':'+secs)
	console.log('')
	console.log('hit ctrl+c at any time to stop')
}

function sineWaveCycle() {
	print()

	for (var x = 0; x < width; x++) {
		y = height * Math.sin((twoPI * x) / width) + height
		robot.moveMouse(x, y)
	}

	print()

	for (var x = width; x > 0; x--) {
		y = -height * Math.sin((twoPI * x) / width) + height
		robot.moveMouse(x, y)
	}
	sineWaveCycle()
}

// function circleCycle() {
// 	var x = width/2
// 	var y = height/2
// 	for (var i = 0; i <= twoPI; i += 0.01) {
// 		// Convert polar coordinates to cartesian
// 		x = x + radius * Math.cos(i)
// 		y = y + radius * Math.sin(i)
// 		robot.moveMouse(x, y)
// 	}
// 	circleCycle()
// }
