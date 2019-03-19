(function(exports) {
  function testNoteListViewCanbeInstantiated() {
    var noteListView = new NoteListView();

    if (noteListView instanceof NoteListView) {
      console.log("testNoteListViewCanbeInstantiated: Yep, that's an instance!");
    }
    else {
      throw new Error("testNoteListViewCanbeInstantiated Error: Not an instance of object")
    }
  };
  testNoteListViewCanbeInstantiated();
})(this);

(function(exports) {
  function testNoteListViewTakesNoteList() {
    var noteList = new NoteList()
    var noteListView = new NoteListView(noteList);

    if (noteListView.noteList === noteList) {
      console.log("Clear: testNoteListViewTakesNoteList");
    }
    else {
      throw new Error("Error: testNoteListViewTakesNoteList")
    }
  };
  testNoteListViewTakesNoteList();
})(this);
