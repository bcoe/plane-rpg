if (typeof foundima == 'undefined') {
  foundima = {};
}

(function() {
  
  var tileDefaults = {
    color: 'green',
    solid: false,
    world: null,
    element: null,
    width: 32,
    height: 48,
    create: function() {
      this.element = $('<div class="tile" />')
        .css('background-color', this.color)
        .css('left', (this.x * this.width) + 'px')
        .css('top', (this.y * this.height) + 'px')

      this.world.append(this.element);
    }
  };

  foundima.Ground = function(opts) {
    _.extend(this, tileDefaults, {
    }, opts)
    this.create();
  };

  foundima.Road = function(opts) {
    _.extend(this, tileDefaults, {
      color: 'black'
    }, opts)
    this.create();
  };

  foundima.Walk = function(opts) {
    _.extend(this, tileDefaults, {
      color: 'grey'
    }, opts)
    this.create();
  };

  foundima.Wall = function(opts) {
    _.extend(this, tileDefaults, {
      color: 'rgb(150, 0, 0)',
      solid: true
    }, opts)
    this.create();
  };

})();