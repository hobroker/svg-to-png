const path = require('path');
const modifyAndConvert = require('../src');

const svgPath = path.resolve('./avatar.svg');
const options = {
  path: 'path',
  colors: ['red', 'blue'],
  getName: color => `out/${ color }`,
  size: 512
};

modifyAndConvert(svgPath, options)
  .then(console.log)
  .catch(console.log);
