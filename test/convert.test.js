const path = require('path');
const modifyAndConvert = require('../src');

const svgPath = path.resolve('./avatar.svg');
const colors = {
  '#FFEBEE': 'red-50-FFEBEE',
  '#FFCDD2': 'red-100-FFCDD2',
  '#EF9A9A': 'red-200-EF9A9A',
  '#E57373': 'red-300-E57373',
  '#EF5350': 'red-400-EF5350',
  '#F44336': 'red-500-F44336',
  '#E53935': 'red-600-E53935',
  '#D32F2F': 'red-700-D32F2F',
  '#C62828': 'red-800-C62828',
  '#B71C1C': 'red-900-B71C1C',
  '#FF8A80': 'red-a100-FF8A80',
  '#FF5252': 'red-a200-FF5252',
  '#FF1744': 'red-a400-FF1744',
  '#D50000': 'red-a700-D50000',
  '#FCE4EC': 'pink-50-FCE4EC',
  '#F8BBD0': 'pink-100-F8BBD0',
  '#F48FB1': 'pink-200-F48FB1',
  '#F06292': 'pink-300-F06292',
  '#EC407A': 'pink-400-EC407A',
  '#E91E63': 'pink-500-E91E63',
  '#D81B60': 'pink-600-D81B60',
  '#C2185B': 'pink-700-C2185B',
  '#AD1457': 'pink-800-AD1457',
  '#880E4F': 'pink-900-880E4F',
  '#FF80AB': 'pink-a100-FF80AB',
  '#FF4081': 'pink-a200-FF4081',
  '#F50057': 'pink-a400-F50057',
  '#C51162': 'pink-a700-C51162',
  '#F3E5F5': 'purple-50-F3E5F5',
  '#E1BEE7': 'purple-100-E1BEE7',
  '#CE93D8': 'purple-200-CE93D8',
  '#BA68C8': 'purple-300-BA68C8',
  '#AB47BC': 'purple-400-AB47BC',
  '#9C27B0': 'purple-500-9C27B0',
  '#8E24AA': 'purple-600-8E24AA',
  '#7B1FA2': 'purple-700-7B1FA2',
  '#6A1B9A': 'purple-800-6A1B9A',
  '#4A148C': 'purple-900-4A148C',
  '#EA80FC': 'purple-a100-EA80FC',
  '#E040FB': 'purple-a200-E040FB',
  '#D500F9': 'purple-a400-D500F9',
  '#AA00FF': 'purple-a700-AA00FF',
  '#EDE7F6': 'deeppurple-50-EDE7F6',
  '#D1C4E9': 'deeppurple-100-D1C4E9',
  '#B39DDB': 'deeppurple-200-B39DDB',
  '#9575CD': 'deeppurple-300-9575CD',
  '#7E57C2': 'deeppurple-400-7E57C2',
  '#673AB7': 'deeppurple-500-673AB7',
  '#5E35B1': 'deeppurple-600-5E35B1',
  '#512DA8': 'deeppurple-700-512DA8',
  '#4527A0': 'deeppurple-800-4527A0',
  '#311B92': 'deeppurple-900-311B92',
  '#B388FF': 'deeppurple-a100-B388FF',
  '#7C4DFF': 'deeppurple-a200-7C4DFF',
  '#651FFF': 'deeppurple-a400-651FFF',
  '#6200EA': 'deeppurple-a700-6200EA',
  '#E8EAF6': 'indigo-50-E8EAF6',
  '#C5CAE9': 'indigo-100-C5CAE9',
  '#9FA8DA': 'indigo-200-9FA8DA',
  '#7986CB': 'indigo-300-7986CB',
  '#5C6BC0': 'indigo-400-5C6BC0',
  '#3F51B5': 'indigo-500-3F51B5',
  '#3949AB': 'indigo-600-3949AB',
  '#303F9F': 'indigo-700-303F9F',
  '#283593': 'indigo-800-283593',
  '#1A237E': 'indigo-900-1A237E',
  '#8C9EFF': 'indigo-a100-8C9EFF',
  '#536DFE': 'indigo-a200-536DFE',
  '#3D5AFE': 'indigo-a400-3D5AFE',
  '#304FFE': 'indigo-a700-304FFE',
  '#E3F2FD': 'blue-50-E3F2FD',
  '#BBDEFB': 'blue-100-BBDEFB',
  '#90CAF9': 'blue-200-90CAF9',
  '#64B5F6': 'blue-300-64B5F6',
  '#42A5F5': 'blue-400-42A5F5',
  '#2196F3': 'blue-500-2196F3',
  '#1E88E5': 'blue-600-1E88E5',
  '#1976D2': 'blue-700-1976D2',
  '#1565C0': 'blue-800-1565C0',
  '#0D47A1': 'blue-900-0D47A1',
  '#82B1FF': 'blue-a100-82B1FF',
  '#448AFF': 'blue-a200-448AFF',
  '#2979FF': 'blue-a400-2979FF',
  '#2962FF': 'blue-a700-2962FF',
  '#E1F5FE': 'lightblue-50-E1F5FE',
  '#B3E5FC': 'lightblue-100-B3E5FC',
  '#81D4FA': 'lightblue-200-81D4FA',
  '#4FC3F7': 'lightblue-300-4FC3F7',
  '#29B6F6': 'lightblue-400-29B6F6',
  '#03A9F4': 'lightblue-500-03A9F4',
  '#039BE5': 'lightblue-600-039BE5',
  '#0288D1': 'lightblue-700-0288D1',
  '#0277BD': 'lightblue-800-0277BD',
  '#01579B': 'lightblue-900-01579B',
  '#80D8FF': 'lightblue-a100-80D8FF',
  '#40C4FF': 'lightblue-a200-40C4FF',
  '#00B0FF': 'lightblue-a400-00B0FF',
  '#0091EA': 'lightblue-a700-0091EA',
  '#E0F7FA': 'cyan-50-E0F7FA',
  '#B2EBF2': 'cyan-100-B2EBF2',
  '#80DEEA': 'cyan-200-80DEEA',
  '#4DD0E1': 'cyan-300-4DD0E1',
  '#26C6DA': 'cyan-400-26C6DA',
  '#00BCD4': 'cyan-500-00BCD4',
  '#00ACC1': 'cyan-600-00ACC1',
  '#0097A7': 'cyan-700-0097A7',
  '#00838F': 'cyan-800-00838F',
  '#006064': 'cyan-900-006064',
  '#84FFFF': 'cyan-a100-84FFFF',
  '#18FFFF': 'cyan-a200-18FFFF',
  '#00E5FF': 'cyan-a400-00E5FF',
  '#00B8D4': 'cyan-a700-00B8D4',
  '#E0F2F1': 'teal-50-E0F2F1',
  '#B2DFDB': 'teal-100-B2DFDB',
  '#80CBC4': 'teal-200-80CBC4',
  '#4DB6AC': 'teal-300-4DB6AC',
  '#26A69A': 'teal-400-26A69A',
  '#009688': 'teal-500-009688',
  '#00897B': 'teal-600-00897B',
  '#00796B': 'teal-700-00796B',
  '#00695C': 'teal-800-00695C',
  '#004D40': 'teal-900-004D40',
  '#A7FFEB': 'teal-a100-A7FFEB',
  '#64FFDA': 'teal-a200-64FFDA',
  '#1DE9B6': 'teal-a400-1DE9B6',
  '#00BFA5': 'teal-a700-00BFA5',
  '#E8F5E9': 'green-50-E8F5E9',
  '#C8E6C9': 'green-100-C8E6C9',
  '#A5D6A7': 'green-200-A5D6A7',
  '#81C784': 'green-300-81C784',
  '#66BB6A': 'green-400-66BB6A',
  '#4CAF50': 'green-500-4CAF50',
  '#43A047': 'green-600-43A047',
  '#388E3C': 'green-700-388E3C',
  '#2E7D32': 'green-800-2E7D32',
  '#1B5E20': 'green-900-1B5E20',
  '#B9F6CA': 'green-a100-B9F6CA',
  '#69F0AE': 'green-a200-69F0AE',
  '#00E676': 'green-a400-00E676',
  '#00C853': 'green-a700-00C853',
  '#F1F8E9': 'lightgreen-50-F1F8E9',
  '#DCEDC8': 'lightgreen-100-DCEDC8',
  '#C5E1A5': 'lightgreen-200-C5E1A5',
  '#AED581': 'lightgreen-300-AED581',
  '#9CCC65': 'lightgreen-400-9CCC65',
  '#8BC34A': 'lightgreen-500-8BC34A',
  '#7CB342': 'lightgreen-600-7CB342',
  '#689F38': 'lightgreen-700-689F38',
  '#558B2F': 'lightgreen-800-558B2F',
  '#33691E': 'lightgreen-900-33691E',
  '#CCFF90': 'lightgreen-a100-CCFF90',
  '#B2FF59': 'lightgreen-a200-B2FF59',
  '#76FF03': 'lightgreen-a400-76FF03',
  '#64DD17': 'lightgreen-a700-64DD17',
  '#F9FBE7': 'lime-50-F9FBE7',
  '#F0F4C3': 'lime-100-F0F4C3',
  '#E6EE9C': 'lime-200-E6EE9C',
  '#DCE775': 'lime-300-DCE775',
  '#D4E157': 'lime-400-D4E157',
  '#CDDC39': 'lime-500-CDDC39',
  '#C0CA33': 'lime-600-C0CA33',
  '#AFB42B': 'lime-700-AFB42B',
  '#9E9D24': 'lime-800-9E9D24',
  '#827717': 'lime-900-827717',
  '#F4FF81': 'lime-a100-F4FF81',
  '#EEFF41': 'lime-a200-EEFF41',
  '#C6FF00': 'lime-a400-C6FF00',
  '#AEEA00': 'lime-a700-AEEA00',
  '#FFFDE7': 'yellow-50-FFFDE7',
  '#FFF9C4': 'yellow-100-FFF9C4',
  '#FFF59D': 'yellow-200-FFF59D',
  '#FFF176': 'yellow-300-FFF176',
  '#FFEE58': 'yellow-400-FFEE58',
  '#FFEB3B': 'yellow-500-FFEB3B',
  '#FDD835': 'yellow-600-FDD835',
  '#FBC02D': 'yellow-700-FBC02D',
  '#F9A825': 'yellow-800-F9A825',
  '#F57F17': 'yellow-900-F57F17',
  '#FFFF8D': 'yellow-a100-FFFF8D',
  '#FFFF00': 'yellow-a200-FFFF00',
  '#FFEA00': 'yellow-a400-FFEA00',
  '#FFD600': 'yellow-a700-FFD600',
  '#FFF8E1': 'amber-50-FFF8E1',
  '#FFECB3': 'amber-100-FFECB3',
  '#FFE082': 'amber-200-FFE082',
  '#FFD54F': 'amber-300-FFD54F',
  '#FFCA28': 'amber-400-FFCA28',
  '#FFC107': 'amber-500-FFC107',
  '#FFB300': 'amber-600-FFB300',
  '#FFA000': 'amber-700-FFA000',
  '#FF8F00': 'amber-800-FF8F00',
  '#FF6F00': 'amber-900-FF6F00',
  '#FFE57F': 'amber-a100-FFE57F',
  '#FFD740': 'amber-a200-FFD740',
  '#FFC400': 'amber-a400-FFC400',
  '#FFAB00': 'amber-a700-FFAB00',
  '#FFF3E0': 'orange-50-FFF3E0',
  '#FFE0B2': 'orange-100-FFE0B2',
  '#FFCC80': 'orange-200-FFCC80',
  '#FFB74D': 'orange-300-FFB74D',
  '#FFA726': 'orange-400-FFA726',
  '#FF9800': 'orange-500-FF9800',
  '#FB8C00': 'orange-600-FB8C00',
  '#F57C00': 'orange-700-F57C00',
  '#EF6C00': 'orange-800-EF6C00',
  '#E65100': 'orange-900-E65100',
  '#FFD180': 'orange-a100-FFD180',
  '#FFAB40': 'orange-a200-FFAB40',
  '#FF9100': 'orange-a400-FF9100',
  '#FF6D00': 'orange-a700-FF6D00',
  '#FBE9E7': 'deeporange-50-FBE9E7',
  '#FFCCBC': 'deeporange-100-FFCCBC',
  '#FFAB91': 'deeporange-200-FFAB91',
  '#FF8A65': 'deeporange-300-FF8A65',
  '#FF7043': 'deeporange-400-FF7043',
  '#FF5722': 'deeporange-500-FF5722',
  '#F4511E': 'deeporange-600-F4511E',
  '#E64A19': 'deeporange-700-E64A19',
  '#D84315': 'deeporange-800-D84315',
  '#BF360C': 'deeporange-900-BF360C',
  '#FF9E80': 'deeporange-a100-FF9E80',
  '#FF6E40': 'deeporange-a200-FF6E40',
  '#FF3D00': 'deeporange-a400-FF3D00',
  '#DD2C00': 'deeporange-a700-DD2C00',
  '#EFEBE9': 'brown-50-EFEBE9',
  '#D7CCC8': 'brown-100-D7CCC8',
  '#BCAAA4': 'brown-200-BCAAA4',
  '#A1887F': 'brown-300-A1887F',
  '#8D6E63': 'brown-400-8D6E63',
  '#795548': 'brown-500-795548',
  '#6D4C41': 'brown-600-6D4C41',
  '#5D4037': 'brown-700-5D4037',
  '#4E342E': 'brown-800-4E342E',
  '#3E2723': 'brown-900-3E2723',
  '#FAFAFA': 'grey-50-FAFAFA',
  '#F5F5F5': 'grey-100-F5F5F5',
  '#EEEEEE': 'grey-200-EEEEEE',
  '#E0E0E0': 'grey-300-E0E0E0',
  '#BDBDBD': 'grey-400-BDBDBD',
  '#9E9E9E': 'grey-500-9E9E9E',
  '#757575': 'grey-600-757575',
  '#616161': 'grey-700-616161',
  '#424242': 'grey-800-424242',
  '#212121': 'grey-900-212121',
  '#ECEFF1': 'bluegrey-50-ECEFF1',
  '#CFD8DC': 'bluegrey-100-CFD8DC',
  '#B0BEC5': 'bluegrey-200-B0BEC5',
  '#90A4AE': 'bluegrey-300-90A4AE',
  '#78909C': 'bluegrey-400-78909C',
  '#607D8B': 'bluegrey-500-607D8B',
  '#546E7A': 'bluegrey-600-546E7A',
  '#455A64': 'bluegrey-700-455A64',
  '#37474F': 'bluegrey-800-37474F',
  '#263238': 'bluegrey-900-263238'
};
const options = {
  path: 'path',
  colors: Object.keys(colors),
  getName: color => `out/${ colors[color] }`,
  size: 512
};

modifyAndConvert(svgPath, options)
  .then(console.log)
  .catch(console.log);
