"use strict";

const webshotjs = require('webshot');
const fs = require('./fsAsync');
const tmp = require('tmp-promise');
const settings = require('../settings').names.webshot;
let wbs = {};

const webshotP = function(html, outoutPng = null, options = { siteType: 'html' }) {
	return new Promise((resolve, reject) => {
		webshotjs(html, outoutPng, options, (err) => {
			return err ? reject(err) : resolve(outoutPng);
		});
	});
};

wbs.webshot = function(html) {
	return tmp.tmpName({ prefix: settings.tmpPrefix, postfix: settings.tmpPostfix })
		.then((tmpFile) => {
			return webshotP(html, tmpFile)
				.then((res) => fs.readFileAsync(res))
				.then((content) => {
					return fs.unlinkAsync(tmpFile).then(() => { return content; });
				});
		});
};

module.exports = wbs;
