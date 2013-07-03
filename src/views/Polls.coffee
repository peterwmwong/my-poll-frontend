define (require)->
  Polls = require 'resources/Polls'

  # Define a new View
  require('cell/defineView!')

    beforeRender: ->
      @polls = Polls.query()

    render: (_)-> [
      _ 'h1',
        'Polls'

      _ '.content',
        _.map @polls, (poll)->
          _ 'a.title', href:"#/#{poll.get('_id').$oid}",
            poll.get 'title'
    ]