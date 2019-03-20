// The note controller constructor does the following:
// Takes a note list model as a parameter.
(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    // Adds a note that says Favourite drink: seltzer.
    // var note = new Note("Favourite drink: merlot")
    // this.noteList.addNote(note)
    // Creates a note list view, passing in the note list model.
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.getAndInsertHTML = function(){
    return this.noteListView.showHTML()
  }

  exports.NoteController = NoteController
})(this)
