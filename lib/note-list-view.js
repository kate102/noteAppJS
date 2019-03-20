(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  exports.NoteListView = NoteListView;
})(this);


NoteListView.prototype.showHTML = function() {
  var i;
  var htmlStr = "<ul>"
  for (i = 0; i < this.noteList.notesArray.length; i++) {
    htmlStr = htmlStr + "<li><div>" + this.noteList.notesArray[i].text + "</div></li>"
  }
  return htmlStr += "</ul>";

};
