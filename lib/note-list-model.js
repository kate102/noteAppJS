(function(exports) {
  function NoteList() {
    this.notesArray = []
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.addNote = function(note) {
     this.notesArray.push(note);
  };
NoteList.prototype.printAll = function() {
    return this.notesArray
};

NoteList.prototype.notesArrayLength = function() {
  console.log(this.notesArray.length);
      return this.notesArray.length
};
