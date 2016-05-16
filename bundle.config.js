var paths = {
  dest: './dist'
}

var defaultConfig = {
  formats: ['es6', 'umd'],
  outputFolder: paths.dest,
  moduleNameJS: 'RedsiftD3',
  mapsDest: '.',
  externalMappings: {}
}

var bundleConfig = {
  mainJS: {
    name: 'd3-rs-core',
    indexFile: './src/index.js'
  },
  styles: [{
    name: 'd3-rs-core',
    indexFile: './src/index.import.style'
  }],
  externalMappings: {
    'd3-selection': 'd3',
    'd3-scale': 'd3',
    'd3-axis': 'd3',
    'd3-time-format': 'd3',
    'd3-time': 'd3'
  }
};

var bundles = [
  merge(defaultConfig, bundleConfig)
];

module.exports = bundles;

function merge(obj1, obj2) {
  var newObj = JSON.parse(JSON.stringify(obj1));
  Object.keys(obj1).forEach(function(key) { newObj[key] = obj1[key]; });
  Object.keys(obj2).forEach(function(key) { newObj[key] = obj2[key]; });
  return newObj;
}
