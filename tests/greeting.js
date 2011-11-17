
var GREETING = require("../lib/greeting");

exports.run = function(ASSERT, harness)
{
	return harness.runAll(exports);
}

exports["test getGreeting"] = function(ASSERT)
{
    ASSERT.strictEqual(GREETING.getGreeting(), "Hello World");
}
