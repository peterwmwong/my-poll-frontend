define ['require','./GENERATED_all-specs'], (require,allSpecs)->
  require allSpecs, (specs...)->
    spec() for spec in specs

    jasmineEnv = jasmine.getEnv()
    jasmineEnv.updateInterval = 5000

    # Running in Karma
    if window.__karma__?
      window.__karma__.start()
    else
      trivialReporter = new jasmine.TrivialReporter()
      jasmineEnv.addReporter trivialReporter
      jasmineEnv.specFilter = (spec)-> trivialReporter.specFilter spec
      jasmineEnv.execute()