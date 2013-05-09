if (typeof foundima == 'undefined') {
  foundima = {};
}

(function() {
  function Console(opts) {
    var _this = this;
    _.extend(this, {
    });
  }

  Console.prototype.getCommand = function() {
    var command = $('#commands').val();
    $('#commands').val('');
    var splitCommand = command.split(' ')
    return [splitCommand.shift(), splitCommand.join(' ')];
  };

  Console.prototype.message = function(message) {
    var message = $('<div />')
      .text(message)
    $('#messages').prepend('<br />');
    $('#messages').prepend(message);
  };

  foundima.Console = Console;
})();