const cheerio = require('cheerio');

/**
 *
 * @param svg
 * @param path
 * @param colors
 * @param getName
 * @return {{svg: string, name: *}[]}
 */
const modifySVG = (svg, { path, colors, getName }) => {
  const header = svg.split('\n')[0];
  const $ = cheerio.load(svg);
  const $svg = $('svg');
  const versions = colors.map((color, index) => {
    const $node = $svg.find(path);

    $node.attr('fill', color);
    const body = $('body').html();

    return {
      svg: header + body,
      name: getName(color, index)
    };
  });
  return versions;
};

module.exports = modifySVG;
