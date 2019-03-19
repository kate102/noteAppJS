(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  exports.NoteListView = NoteListView;
})(this);


NoteListView.prototype.showHTML = function() {
  console.log('In showHTML');
  var i;
  console.log(this.noteList);
  var htmlStr = "<ul>"
  for (i = 0; i < this.noteList.length; i++) {
    console.log(htmlStr);
    console.log("note is " + this.noteList[i]);
    htmlStr = htmlStr + "<li><div>" + this.noteList[i] + "</div></li>"
  }
  console.log(htmlStr += "</ul>");
  return htmlStr;
};
