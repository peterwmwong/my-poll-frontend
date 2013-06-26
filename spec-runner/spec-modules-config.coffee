requirejs.config
  context: 'specRunner'
  baseUrl: 
    # Karma serves files from '/base'
    if window.__karma__ then '/base/specs'
    else '../specs/'

  paths:
    'SpecHelpers': '../spec-runner/SpecHelpers'
    'spec': '../spec-runner/spec'
    'cell': '../vendor/cell/src'
    'GENERATED_es-server-host': '../spec-runner/GENERATED_es-server-host'

  # ask Require.js to load these files (all our tests)
  deps: [
    '../spec-runner/SpecRunner'
  ]