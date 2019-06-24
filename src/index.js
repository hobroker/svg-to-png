const debug = require('debug')('index');
const convert = require('./convert');
const modify = require('./modify');
const read = require('./read');
/**
 *
 * @param pathToFile
 * @param options
 * @return {Promise<number>}
 */
const run = async (pathToFile, options) => {
  const svg = await read(pathToFile);
  debug('read file');
  const versions = modify(svg, options);
  const converted = await convert(versions, options);
  debug('converted to pngs', converted.length);

  return converted.length;
};

module.exports = run;
