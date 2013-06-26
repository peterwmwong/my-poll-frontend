define (require)->
  MyView = require 'views/MyView'

  # Define a new View
  App = require('cell/defineView!')

    # Make the root DOM node <body>
    # Cell will automatically add @class and @cell attributes to the root node. Like so...
    # <body class="App" cell="App">
    renderEl: -> document.body

    ###
    HTML is verbose!
    Cell passes the Render Helper (in this case named `_`), to help you quickly and
    concisely render the contents of your view.

    The simplest method signature of the Render Helper is:
    
    _ CSS_SELECTOR_STRING,
      CHILDREN...

    Here's are some examples of using the Render Helper and DOM output
    
    _ '.myClass'    # <div class='myClass'></div>

    _ '.message',   # <div class='myOwnClass'>
      'Hello World' #   Hello World
                    # </div>

    _ 'a#one.two'   # <a id='one' class='two'></a>

    _ '.one',       # <div class='one'>
      _ '.two',     #   <div class='two'>
        _ '.three'  #     <div class='three'>
                    #     </div> <!-- three -->
                    #   <div> <!-- two -->
                    # <div> <!-- one -->
    ###
    ###
    Render the contents 

    <div class='msg'>
      Hello from App!
      <div class='MyView'>
        <!-- Whatever MyView is. See `views/MyView`. -->
      </div>
    </div>
    ###
    render: (_)-> [
      _ '.msg',
        'Hello from App!'
      _ MyView
    ]

  # Bootstrap the first View (App).
  # Other than the first View, you'll likely never need to instantiate View by hand.
  # Views are normally created and added to the DOM in a `@render()` function.
  # See the above `@render()` function on how MyView is used.
  new App()
