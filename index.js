'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var newlineBr = require('newline-br');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-newline-br', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(newlineBr(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-newline-br', err));
		}

		cb();
	});
};
