(function(exports) {
  var idCounter = 0

  function createId() {
    idCounter += 1
    return idCounter
  }

  function Note(text) {
    this.text = text;
    this.id = createId()
  };

  Note.prototype.getText = function() {
    return this.text
  };

  Note.prototype.getId = function() {
    return this.id
  };

  exports.Note = Note;
})(this);
