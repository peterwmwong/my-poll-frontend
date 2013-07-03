({
  mainConfigFile: 'modules_config.js',
  name: '../vendor/cell/src/almond',
  out: 'src/bootstrap-tmp.js',
  wrap: {
    end: 'require("views/App");'
  }
})