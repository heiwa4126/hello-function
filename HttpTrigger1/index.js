'use strict'
const util = require('util')
const decimal = require('decimal')
const foo1 = require('../foo1')

module.exports = async function (context, req) {
	let x = new decimal(10000)
	let y = 3

	context.res = {
		// status: 200, /* Defaults to 200 */
		body: util.format("Hello, world! 1+2=%s, %s/%s=%s", foo1.add1(1, 2), x, y, x.div(y))
	}
}