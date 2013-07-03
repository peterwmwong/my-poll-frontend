// Generated by CoffeeScript 1.6.3
define(function(require) {
  var Polls;
  Polls = require('resources/Polls');
  return require('cell/defineView!')({
    beforeRender: function() {
      return this.polls = Polls.query();
    },
    render: function(_) {
      return [
        _('h1', 'Polls'), _('.content', _.map(this.polls, function(poll) {
          return _('a.title', {
            href: "#/" + (poll.get('_id').$oid)
          }, poll.get('title'));
        }))
      ];
    }
  });
});

/*
//@ sourceMappingURL=Polls.map
*/