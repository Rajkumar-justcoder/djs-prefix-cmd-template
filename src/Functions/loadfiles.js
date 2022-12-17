const { promisify } = require('util');
const glob = promisify(require('glob'));


async function loadfiles(dirname) {
	const Files = await glob(`${process.cwd().replace(/\\/g, '/')}/src/${dirname}/**/*.js`);

	Files.forEach((file) => {
		delete require.cache[require.resolve(file)];
	});

	return Files;
}

module.exports = { loadfiles };
