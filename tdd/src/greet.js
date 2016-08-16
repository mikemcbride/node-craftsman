'use strict';

const greet = function (name) {
	if (name === undefined) {
		name = 'world';
	}
	return `Hello ${name}!`;
};

module.exports = greet;
