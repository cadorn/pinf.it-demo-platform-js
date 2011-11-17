
var GREETING = require("./lib/greeting");

exports.main = function()
{
	module.print(GREETING.getGreeting() + "\n");
}
