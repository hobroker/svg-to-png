const sharp = require('sharp');
const path = require('path');
const debug = require('debug')('convert');
const asyncPool = require('tiny-async-pool');

/**
 *
 * @param svgs
 * @param size
 * @return {Promise<string[]>}
 */
const convertToPNG = async (svgs, { size }) => {
  await asyncPool(5, svgs, ({ svg, name }) => {
    const buffer = Buffer.from(svg);
    const out = `./${ name }.png`;
    debug('converting', name);
    return sharp(buffer)
      .resize(size, size)
      .png()
      .toFile(path.resolve(out));
  });

  return svgs.map(({ name }) => name);
};

module.exports = convertToPNG;
