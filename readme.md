# gulp-newline-br [![Build Status](https://travis-ci.org/arthurvr/gulp-newline-br.svg?branch=master)](https://travis-ci.org/arthurvr/gulp-newline-br)

> Gulp plugin to prepend newlines with html `<br>` tags using [newline-br](http://github.com/sindresorhus/newline-br)


## Install

```
$ npm install --save-dev gulp-newline-br
```


## Usage

```js
var gulp = require('gulp');
var newlineBr = require('gulp-newline-br');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(newlineBr())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Arthur Verschaeve](https://github.com/arthurvr)
