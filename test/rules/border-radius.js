'use strict';

var process = require('../../process');

module.exports = function (t, a) {
	a(process('body div { border-radius: 20px 30%; }', [t]), 'body div { ' +
		t.replacement.replace(/\$2/g, '20px 30%') + '; }');
};
