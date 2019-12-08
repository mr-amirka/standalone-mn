/**
 * @overview minimalist notation standalone example
 * @author Amir Absolutely <mr.amirka@ya.ru>
 */

const g = window;
const mn = g.mn = require("minimalist-notation/browser");
require('mn-utils/browser/ready')(() => {
  const presets = [
    require('mn-presets/medias'),
    require('mn-presets/runtimePrefixes'),
    require('mn-presets/styles'),
    require('mn-presets/states'),
    require('mn-presets/theme'),
  ];
  presets.push.apply(presets, g.mnPresets || []);
  mn.setPresets(presets);
  const {getCompiler} = mn;
  getCompiler('class').recursiveCheck(document);
  getCompiler('m').recursiveCheck(document);
  mn.compile();

  console.log('Minimalist Notation:', mn.data);
});
