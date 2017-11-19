'use strict';

const Highlighter = require('./lib/highlighter');
const wbs = require('./lib/webshot');

const codeData = 'function yo(thing) {\n' +
	'    console.log(thing);\n' +
	'};\n';

let hl = new Highlighter(codeData);

main();

function main() {
	hl.createHtml()
		.then((html) => {
			return wbs.webshot(html);
		})
		.then((content) => {
			console.log(content);
			return require('fs').writeFileSync('img.png', content);
		})
		.then(() => console.log('done'))
		.catch((err) => console.error('oh no', err));
}