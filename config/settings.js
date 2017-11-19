'use strict';

module.exports = {
	htmlTemplate: {
		content: '<head>__INSERT_STYLE_HERE</head><body>' +
			'<pre class="hljs"><code>__INSERT_CODE_HERE</code></pre></body>',
		styleReplacement: '__INSERT_STYLE_HERE',
		codeReplacement: '__INSERT_CODE_HERE'
	},
	styleTemplate: {
		content: 'node_modules/highlight.js/styles/__STYLE_NAME.css',
		nameReplacement: '__STYLE_NAME'
	},
	defaults: {
		style: 'monokai'
	},
	names: {
		webshot: {
			tmpPostfix: '.png',
			tmpPrefix: 'hljs-webshot-'
		}
	}
};
