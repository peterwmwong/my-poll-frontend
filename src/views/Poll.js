// Generated by CoffeeScript 1.6.3
define(function(require) {
  var PollResult, PollResults, Polls;
  Polls = require('resources/Polls');
  PollResults = require('resources/PollResults');
  PollResult = require('views/PollResult');
  return require('cell/defineView!')({
    beforeRender: function() {
      return this.poll = Polls.get({
        id: this.options.pollId
      });
    },
    render: function(_) {
      return [
        _('h1', function() {
          return this.poll.get('title');
        }), function() {
          if (this.get('showResults')) {
            return _(PollResult, {
              pollId: this.options.pollId
            });
          } else if (this.poll.status() === 'ok') {
            return _('.content', _.map(this.poll.get('choices'), function(choice, i) {
              var choiceId;
              choiceId = "choice" + i;
              return _('.choice', _("input#" + choiceId, {
                type: 'radio',
                name: 'pollGroup',
                onclick: function() {
                  return this.set('choice', i);
                }
              }), _('label', {
                "for": choiceId
              }, choice.get('text')));
            }), _('button', {
              type: 'submit',
              onclick: this.onsubmit
            }, 'Submit'));
          }
        }
      ];
    },
    onsubmit: function() {
      var choiceId, result,
        _this = this;
      if ((choiceId = this.get('choice')) != null) {
        result = PollResults.create({
          pollId: this.poll.get('_id').$oid,
          choice: this.poll.get('choices').at(choiceId).attributes()
        });
        result.$save(void 0, function() {
          return _this.set('showResults', true);
        });
      }
    }
  });
});

/*
//@ sourceMappingURL=Poll.map
*/
