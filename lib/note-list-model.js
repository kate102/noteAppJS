(function(exports) {
  function NoteList() {
    this.notesArray = []
  };

  exports.NoteList = NoteList;
})(this);


NoteList.prototype.printAll = function() {
    return this.notesArray
  };
