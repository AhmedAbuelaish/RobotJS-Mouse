// Kick the ball on: http://game4.baifumeiba.com/minigame/ydygdy/
var robot = require('robotjs')

// Speed up the mouse.
// robot.setMouseDelay(2)

var screenSize = robot.getScreenSize()
var height = screenSize.height
var width = screenSize.width
var x = width / 2
var y = 200 + (3 * height) / 4

var initialStep = 3 // 3 = 280940m
var finalPosition = 0 // if finalPosition is -ve, the game takes that as zero. (all -ve values = 0)

holdBall()
setTimeout(kickBall, 1000)

function holdBall() {
	console.log('position mouse on ball x:', x, 'y:', y)
	robot.moveMouse(x, y)
	console.log('mouse down')
	robot.mouseToggle('down')
}

function kickBall() {
	y -= initialStep
	robot.dragMouse(x, y)
	y = finalPosition
	robot.dragMouse(x, y)
	console.log('mouse up x:', x, 'y:', y)
	robot.mouseToggle('up')
}
