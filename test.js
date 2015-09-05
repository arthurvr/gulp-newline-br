'use strict';
var path = require('path');
var test = require('ava');
var gutil = require('gulp-util');
var newlineBr = require('./');

test(function (t) {
	t.plan(1);
	var stream = newlineBr();

	stream.on('data', function (file) {
		t.assert(file.contents.toString() === '<br>\n<br>\n');
	});

	stream.write(new gutil.File({
		base: __dirname,
		path: path.join(__dirname, '/file.ext'),
		contents: new Buffer('\n\n')
	}));

	stream.end();
});
