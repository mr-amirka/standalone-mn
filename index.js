/**
 * @overview minimalist notation standalone example
 * @author Absolutely Amir <mr.amirka@ya.ru>
 */

const mn = require("mn-services/mn").setPresets([
	require('mn-presets/medias'),
	require('mn-presets/runtime-prefixes'),
	require('mn-presets/styles'),
	require('mn-presets/states'),
	require('mn-presets/theme')
]);
require('mn-services/ready')(() => {

	mn.getCompiler('m').recursiveCheck(document);
	mn.compile();

	console.log('minimalistNotation', mn.data);
});
