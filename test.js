import path from 'path';
import test from 'ava';
import gutil from 'gulp-util';
import newlineBr from './';

test(t => {
	t.plan(1);

	const stream = newlineBr();

	stream.on('data', file => {
		t.is(file.contents.toString(), '<br>\n<br>\n');
		t.end();
	});

	stream.write(new gutil.File({
		base: __dirname,
		path: path.join(__dirname, '/file.ext'),
		contents: new Buffer('\n\n')
	}));

	stream.end();
});
