/**
 * @overview minimalist notation standalone example
 * @author Amir Absalyamov <mr.amirka@ya.ru>
 */

const g = window;
const document = g.document;
const mn = g.mn = require('minimalist-notation')({
  selectorPrefix: '',
});
mn.emitter.on(
    require('mn-utils/stylesRenderProvider')(document, 'mn.'),
);
require('mn-utils/browser/ready')(() => {
  const presets = [
    require('minimalist-notation/presets/runtimePrefixes'),
    require('minimalist-notation/presets/styles'),
    require('minimalist-notation/presets/medias'),
    require('minimalist-notation/presets/synonyms'),
    require('minimalist-notation/presets/main'),
  ];
  presets.push(...(g.mnPresets || []));
  mn.setPresets(presets);
  const {getCompiler} = mn;
  getCompiler('class').recursiveCheck(document);
  getCompiler('m-n').recursiveCheck(document);
  mn.compile();

  console.log('Minimalist Notation:', mn.data);
});

mn.error$.on((error) => {
  console.error(error);
});
