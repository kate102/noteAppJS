(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.getAndInsertHTML = function(){
    document.getElementById("app").innerHTML = this.noteListView.showHTML();
  }

  exports.NoteController = NoteController
})(this)
