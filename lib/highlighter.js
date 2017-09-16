const fs = require('./fsAsync');
const hljs = require('highlight.js');

const settings = require('../settings');
const template = settings.htmlTemplate.content;

class Highlighter {
	constructor(code, style = settings.defaults.style) {
		this.stylesheet = settings.styleTemplate.content.replace(settings.styleTemplate.nameReplacement, style);
		if (typeof code !== 'string') throw 'Unsupported code type (should be string)';
		this.code = code;
	}

	async createHtml() {
		let data = hljs.highlightAuto(this.code);
		// console.log(data);
		let formattedCode = data.value;
		let html = template.replace(settings.htmlTemplate.codeReplacement, formattedCode);

		return fs.readFileAsync(this.stylesheet, 'utf8')
			.then((css) => {
				let replacementText = '<style>' + css + '</style>';
				return html.replace(settings.htmlTemplate.styleReplacement, replacementText);
			});
	}
}

module.exports = Highlighter;
