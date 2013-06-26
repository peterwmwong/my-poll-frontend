define -> ({beforeEachRequire})->

  beforeEachRequire ['views/MyView'], (@MyView)->

  describe 'When MyView is rendered', ->
    beforeEach ->
      @el = new @MyView().el

    it 'it renders "Hello from MyView!"', ->
      expect(@el.textContent).toBe 'Hello from MyView!'