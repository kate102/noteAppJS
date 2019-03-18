(function(exports) {
  function Note(text) {
    this.text = text;
  };

  exports.Note = Note;
})(this);


Note.prototype.getText = function() {
    return this.text
  };
