const fs = require('fs');
const debug = require('./debug');

/**
 *
 * @param {string} path
 * @return {Promise<any>}
 */
const read = (path) => {
  debug('read', path);
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = read;
