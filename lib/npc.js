if (typeof foundima == 'undefined') {
  foundima = {};
}

(function() {
  function NPC(opts) {
    var _this = this;

    _.extend(this, {
      x: 0,
      y: 0,
      name: null,
      player: null,
      greetingIndex: 0,
      console: null
    }, opts);

    this.createElement();
  }

  NPC.prototype.say = function(message) {
    this.console.message(this.name + ': ' + message);
  };

  NPC.prototype.handleAction = function(action) {
    if (!action) {
      var greeting = this.greetings[this.greetingIndex];
      this.say(greeting);
      this.greetingIndex = (this.greetingIndex + 1) % this.greetings.length;
    } else {
      if (this.actions[action[0]]) {
        this.actions[action[0]](this, action[1]);
      } else {
        this.console.message("I don't know anything about that.")
      }
    }
  };

  NPC.prototype.createElement = function() {
    var element = $('<div class="npc" />')
      .css('left', this.x * 32 + 'px')
      .css('top', this.y * 48 + 'px');

    $('#world').append(element)
  };

  foundima.NPC = NPC;
})();