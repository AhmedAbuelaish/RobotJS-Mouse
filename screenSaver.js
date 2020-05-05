// Move the mouse across the screen as a sine wave.
var robot = require('robotjs')

// Speed up the mouse.
robot.setMouseDelay(1)

var twoPI = Math.PI * 2.0
var screenSize = robot.getScreenSize()
var height = screenSize.height / 2 - 10
var width = screenSize.width
var radius = Math.min(height/10 - 50,width/10 - 50)

sineWaveCycle()
// seedOfLifeCycle()

function sineWaveCycle() {
	for (var x = 0; x < width; x++) {
		y = height * Math.sin((twoPI * x) / width) + height
		robot.moveMouse(x, y)
	}

	for (var x = width; x > 0; x--) {
		y = -height * Math.sin((twoPI * x) / width) + height
		robot.moveMouse(x, y)
	}
	sineWaveCycle()
}

function circleCycle() {
	var x = width/2
	var y = height/2
	for (var i = 0; i <= twoPI; i += 0.01) {
		// Convert polar coordinates to cartesian
		x = x + radius * Math.cos(i)
		y = y + radius * Math.sin(i)
		robot.moveMouse(x, y)
	}
	circleCycle()
}
