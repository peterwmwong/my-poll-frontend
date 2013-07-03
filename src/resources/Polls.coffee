define (require)->
  Resource = require 'cell/Resource'
  Collection = require 'cell/Collection'

  new Resource
    url: 'https://api.mongolab.com/api/1/databases/testpeterwmwong/collections/polls/{id}?apiKey=4cIC7N8HM4TTAeOHVNrR3CstB1eGJQ7z'
    params:
      id: ''
    transform: (obj)->
      obj.choices = new Collection obj.choices
      obj