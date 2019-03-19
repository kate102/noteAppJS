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
