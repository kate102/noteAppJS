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


(function(exports) {
  function testNoteListViewGetsHTML() {
    var note1 = new Note('First Note')
    var note2 = new Note('Second Note')
    var noteList = new NoteList()
    noteList.addNote(note1)
    noteList.addNote(note2)
    var noteListView = new NoteListView(noteList);
    var htmlStr = "<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>"
    console.log(noteListView.showHTML());
    if (noteListView.showHTML() === htmlStr) {
      console.log("Clear: testNoteListViewGetsHTML");
    }
    else {
      throw new Error("Error: testNoteListViewGetsHTML")
    }
  };
  testNoteListViewGetsHTML();
})(this);
