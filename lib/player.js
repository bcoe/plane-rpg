if (typeof foundima == 'undefined') {
  foundima = {};
}

(function() {
  function Player(opts) {
    var _this = this;

    _.extend(this, {
      console: null,
      x: 2,
      y: 2,
      map: null,
      money: 2,
      inventory: ['skinny jeans', 'javascript the good parts'],
      actions: {
        commands: function() {
          _this.console.message("Commands include: [give, pull, look, inventory, work, buy, commands]. Hit [space] to talk.");
        },
        inventory: function(action) {
          var message = 'your inventory contains: '
          _this.inventory.forEach(function(item) {
            message += item;
            message += ', ';
          });
          message += ' and ' + _this.money + '$';
          _this.console.message(message);
        },
        look: function(action) {
          _this.console.message("You've found yourself in the Mission District of San Francisco, what adventures await!")
        }
      }
    }, opts);

    // Handle player movement and actions.
    $('body').on('keydown', function(e) {
      var x = _this.x,
        y = _this.y;

      // 37 Left.
      if (e.keyCode == 37) {
        x -= 1;
      }

      // 39 right.
      if (e.keyCode == 39) {
        x += 1;
      }

      // 38 up.
      if (e.keyCode == 38) {
        y -= 1;
      }

      // 40 down.
      if (e.keyCode == 40) {
        y += 1;
      }

      if (x < 0) {
        x = 0;
      }

      if (x >= _this.map.width()) {
        x = _this.map.width();
      }

      if (y < 0) {
        y = 0;
      }

      if (y >= _this.map.height()) {
        y = _this.map.height();
      }

      // Test the tile.
      var tile = _this.map.getTile(x, y);
      if (!tile.solid) {
        _this.x = x;
        _this.y = y;
      }

      // 32 space.
      if (e.keyCode == 32) {
        if ($('#commands').val().replace(' ', '').length == 0) {
          _this.map.handleAction(null);
          setTimeout(function() {
            $('#commands').val('');
          }, 100);
        }
      }

      // will take an action.
      if (e.keyCode == 13) {
        var command = _this.console.getCommand();
        if (_this.actions[command[0]]) {
          _this.actions[command[0]](command[1]);
        }
        _this.map.handleAction(command);
      };

    });
  }

  Player.prototype.giveItem = function(item) {
    this.console.message('received ' + item + '!');
    this.inventory.push(item);
  };

  Player.prototype.render = function() {
    $('#player')
      .css('left', this.x * 32 + 'px')
      .css('top', this.y * 48 + 'px');
  };

  foundima.Player = Player;
})();