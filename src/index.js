const convert = require('./convert');
const modify = require('./modify');
const read = require('./read');

/**
 *
 * @param pathToFile
 * @param options
 * @return {Promise<string[]>}
 */
const run = async (pathToFile, options) => {
  const svg = await read(pathToFile);
  const versions = modify(svg, options);
  const converted = await convert(versions, options);
  return converted;
};

module.exports = run;
