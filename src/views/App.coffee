define (require)->
  Polls = require 'views/Polls'
  Poll = require 'views/Poll'
  events = require 'cell/dom/events'

  App = require('cell/defineView!')
    beforeRender: ->
      @set 'selectedPoll', ''
      events.on window, 'hashchange',
        @updatedSelectedPoll
        @
      @updatedSelectedPoll()

    renderEl: -> document.body
    render: (_)-> [
      ->if pollid = @get 'selectedPoll'
          _ Poll, pollId:pollid
        else
          _ Polls
    ]

    updatedSelectedPoll: ->
      @set 'selectedPoll', /^\/?#\/(.*)/.exec(window.location.hash)?[1]
      return

  new App()
