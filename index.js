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
    require('minimalist-notation/presets/medias'),
    require('minimalist-notation/presets/runtimePrefixes'),
    require('minimalist-notation/presets/styles'),
    require('minimalist-notation/presets/states'),
    require('minimalist-notation/presets/main'),
  ];
  presets.push(...(g.mnPresets || []));
  mn.setPresets(presets);
  const {getCompiler} = mn;
  getCompiler('m-n').recursiveCheck(document);
  mn.compile();

  console.log('Minimalist Notation:', mn.data);
});
