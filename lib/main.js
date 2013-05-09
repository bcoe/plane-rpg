if (typeof foundima == 'undefined') {
  foundima = {};
}

(function() {
  function Main(opts) {
    var _this = this;

    this.console = new foundima.Console();

    this.player = new foundima.Player({
      console: this.console
    });

    _.extend(this, {
      map: new foundima.Map({
        console: this.console,
        world: $('#world'),
        player: this.player
      })
    });

    this.player.map = this.map;
    this.player.actions.commands();

    setInterval(function() {
      _this.map.render();
      _this.player.render();
      $('#commands').focus();
    }, 100);
  }

  foundima.Main = Main;
})();