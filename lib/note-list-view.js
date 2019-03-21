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
    var noteText = this.noteList.notesArray[i].text
    htmlStr += this.createHTMLStr(noteText)
  }
  return htmlStr += "</ul>";

};

NoteListView.prototype.createHTMLStr = function(noteStr) {
  return "<li><div>" + noteStr.substring(0,20) + "</div></li>"
};
