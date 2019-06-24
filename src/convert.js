const sharp = require('sharp');
const debug = require('./debug');

/**
 *
 * @param svgs
 * @param size
 * @return {Promise<string[]>}
 */
const convertToPNG = async (svgs, { size }) => {
  for (let index = 0; index < svgs.length; index += 1) {
    const { svg, name } = svgs[index];
    const buffer = Buffer.from(svg);
    const out = `./${ name }.png`;
    debug('converting', name);
    await sharp(buffer) // eslint-disable-line no-await-in-loop
      .resize(size, size)
      .png()
      .toFile(out);
  }

  return svgs.map(({ name }) => name);
};

module.exports = convertToPNG;
