define (require)->
  PollResults = require 'resources/PollResults'

  # Define a new View
  require('cell/defineView!')

    beforeRender: ->
      @pollResults = PollResults.query q: JSON.stringify {pollId:@options.pollId}
      @watch (->@pollResults.status()), (status)->
        if status is 'ok'
          resultMap = {}
          @pollResults.map (result)->
            choice = result.get('choice').text
            resultMap[choice] ?= {count:0}
            ++resultMap[choice].count


          for result,{count} of resultMap
            resultMap[result].pct = 100 * (count / @pollResults.length())

          @set 'resultMap', resultMap


    render: (_)-> [
      _ 'h2',
        'Results'

      _ '.content',
        _ '.results',
          # _.map @pollResults, (result, i)->
          #   _ '.result', result.get('choice').text
          ->if resultMap = @get 'resultMap'
              for choice,{count,pct} of resultMap
                _ '.result',
                  choice
                  _ '.count',
                    count
                  _ '.bar', style:"width:#{pct}%"


        _ 'a.done', href:'#/',
          'Go back to polls...'
    ]
