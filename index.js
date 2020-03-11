/**
 * @overview minimalist notation standalone example
 * @author Amir Absalyamov <mr.amirka@ya.ru>
 */

const g = window;
const mn = g.mn = require('minimalist-notation')();
mn.emitter.on(
    require('mn-utils/browser/stylesRenderProvider')(document, 'mn.'),
);
require('mn-utils/browser/ready')(() => {
  const presets = [
    require('mn-presets/medias'),
    require('mn-presets/runtimePrefixes'),
    require('mn-presets/styles'),
    require('mn-presets/states'),
    require('mn-presets/main'),
  ];
  presets.push(...(g.mnPresets || []));
  mn.setPresets(presets);
  const {getCompiler} = mn;
  getCompiler('m-n').recursiveCheck(document);
  mn.compile();

  console.log('Minimalist Notation:', mn.data);
});
