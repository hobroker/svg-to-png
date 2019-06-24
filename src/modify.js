const cheerio = require('cheerio');
const debug = require('debug')('modify');

/**
 *
 * @param svg
 * @param path
 * @param colors
 * @param getName
 * @return {{svg: string, name: *}[]}
 */
const modifySVG = (svg, { path, increment = 16, getName }) => {
  const header = svg.split('\n')[0];
  const $ = cheerio.load(svg);
  const $svg = $('svg');
  const $node = $svg.find(path);
  const versions = [];
  let red;
  let green;
  let blue;

  for (red = 0; red <= 255; red += increment) {
    for (green = 0; green <= 255; green += increment) {
      for (blue = 0; blue <= 255; blue += increment) {
        const color = `rgb(${ red }, ${ green }, ${ blue })`;
        $node.attr('fill', color);
        const body = $('body').html();

        versions.push({
          svg: header + body,
          name: getName(color)
        });
      }
    }
  }
  debug('modified svgs');
  return versions;
};

module.exports = modifySVG;
