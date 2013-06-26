cell-starter-project
====================

Hit the ground running by starting out with this project.
Develop, test, and build. It's all here.


Developing
----------

### 1 - [Installing node.js and NPM](http://nodejs.org/#download)

### 2 - Get dependencies

    > make deps

### 3 - Start the compilers

    # In another terminal
    > script/stylus-compiler --watch

    # In another terminal
    > script/coffee-compiler --watch

This will compile `.styl` *to* `.css` and `.coffee` *to* `.js`.
File changes will **automatically** be recompiled.

### 4 - Start the dev server

    # In another terminal
    > script/server

In a browser, visit [http://localhost:3000/index-dev.html](http://localhost:3000/index-dev.html)

### 5 - Develop the next big thing


Running Specs from the browser
------------------------------

    > make browser-specs

    # If the server isn't running...
    > script/server

Visit [http://localhost:3000/spec-runner/](http://localhost:3000/spec-runner/)


Running Specs from the command line
-----------------------------------

    > make specs


Building for production
-----------------------

    > make clean; make

In a browser, go to [http://localhost:3000/index.html](http://localhost:3000/index.html).


The Stack
---------

- [cell](https://github.com/peterwmwong/cell)
- [coffee-script](http://coffeescript.org/)
- [jasmine](http://pivotal.github.io/jasmine/)
- [require.js](http://requirejs.org/)
- [stylus](http://learnboost.github.io/stylus/)


`index.html` vs `index-dev.html`
--------------------------------

`index-dev.html` is for development time (and fast prototyping).  To avoid a time consuming concatenation and minification steps (on top of compiling Coffee and Styl to JS and CSS) everytime a change is made, JS Modules and CSS are loaded individually.  Also, it is easier to navigate and debug the code in browser developer tools.  Unfortunately, loading each JS and CSS file individually is not suitable for production for a performance reasons...

`index.html` is for production.  It references `src/bootstrap.js` and `src/bootstrap.css` which is the concatenation and minification of all the necessary JS modules and CSS files.

Having these 2 files may go away as advancements in tooling and browser support of sourcemaps develops.
