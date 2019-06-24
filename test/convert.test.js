const path = require('path');
const debug = require('debug')('test');
const modifyAndConvert = require('../src');

const svgPath = path.resolve('./avatar.svg');
const options = {
  path: 'path',
  increment: 8,
  size: 512,
  getName: number => `out/${ number }`
};

debug('start');
modifyAndConvert(svgPath, options)
  .then(console.log)
  .catch(console.log)
  .then(() => {
    debug('end');
  });
