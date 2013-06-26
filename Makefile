coffee = node_modules/.bin/coffee

.PHONY : clean deps


#-------------------------------------------------------------------
# Build Production Files
#-------------------------------------------------------------------

src/bootstrap.js, src/bootstrap.css: deps
	# Build JS from Coffee
	script/coffee-compiler

	# Build CSS from Stylus
	script/stylus-compiler

	# Build production concatented/minified JS
	node vendor/cell/src/r.js -o build_config.js
	mv src/bootstrap-tmp.js src/bootstrap.js

	# Build production concatented/minified CSS
	node_modules/.bin/cleancss -o src/bootstrap.css src/bootstrap-tmp.css

	# Remove tmp files
	rm src/bootstrap-tmp.*


#-------------------------------------------------------------------
# Dependencies
#-------------------------------------------------------------------

deps:
	git submodule init
	git submodule update
	npm install


#-------------------------------------------------------------------
# TEST
#-------------------------------------------------------------------

# Creates the GENERATED_all-specs AMD Module that is a list of all specs
spec-runner/GENERATED_all-specs.js: deps
	script/coffee-compiler
	script/stylus-compiler
	find specs -name '*.spec.coffee' | xargs $(coffee) -e 'console.log """define([],#{JSON.stringify process.argv[4..].map (e)->"spec!"+/^specs\/(.*?)\.spec\.coffee/.exec(e)[1]});"""' > spec-runner/GENERATED_all-specs.js

browser-specs: spec-runner/GENERATED_all-specs.js

# Runs the specs using Karma and PhantomJS
specs: spec-runner/GENERATED_all-specs.js
	script/coffee-compiler
	script/stylus-compiler
	export PHANTOMJS_BIN=`pwd`/node_modules/phantomjs/bin/phantomjs
	./node_modules/.bin/karma start spec-runner/karma.conf.js --browsers PhantomJS --single-run

clean:
	@@rm src/bootstrap*