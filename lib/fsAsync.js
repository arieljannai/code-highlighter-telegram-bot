let fs = require('fs');

fs.readFileAsync = function(filename, options = {}) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, options, (err, data) => err ? reject(err) : resolve(data));
	});
};

fs.unlinkAsync = function(filename) {
	return new Promise((resolve, reject) => {
		fs.unlink(filename, (err, data) => err ? reject(err) : resolve(data));
	});
};

module.exports = fs;
