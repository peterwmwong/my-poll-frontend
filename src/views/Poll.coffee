define (require)->
  Polls = require 'resources/Polls'
  PollResults = require 'resources/PollResults'
  PollResult = require 'views/PollResult'

  # Define a new View
  require('cell/defineView!')

    beforeRender: ->
      @poll = Polls.get id: @options.pollId

    render: (_)-> [
      _ 'h1',
        -> @poll.get 'title'

      ->if @get('showResults')
          _ PollResult, pollId: @options.pollId

        else if @poll.status() is 'ok'
          _ '.content',
            _.map @poll.get('choices'), (choice, i)->
              choiceId = "choice#{i}"
              _ '.choice',
                _ "input##{choiceId}", type:'radio', name:'pollGroup', onclick:->@set 'choice', i
                _ 'label', for:choiceId,
                  choice.get 'text'

            _ 'button', type:'submit', onclick:@onsubmit,
              'Submit'
    ]

    onsubmit: ->
      if (choiceId = @get('choice'))?
        result = PollResults.create
          pollId: @poll.get('_id').$oid
          choice: @poll.get('choices').at(choiceId).attributes()

        result.$save undefined, =>
          @set 'showResults', true
      return
