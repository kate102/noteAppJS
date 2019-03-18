(function(exports) {
  function testNoteListCanbeInstantiated() {
    var noteList = new NoteList();

    if (noteList instanceof NoteList) {
      console.log("testNoteListCanbeInstantiated: Yep, that's an instance!");
    }
    else {
      throw new Error("testNoteListCanbeInstantiated Error: Not an instance of object")
    }
  };
  testNoteListCanbeInstantiated();
})(this);

(function(exports) {
  function testNoteListIsInstantiatedWithArray() {
    var noteList = new NoteList();

    if (noteList.notesArray.length !== 0) {
      console.log(noteList.notesArray)
      throw new Error("Error: testNoteListIsInstantiatedWithArray does not match");
    }
    else {
      console.log("testNoteListIsInstantiatedWithArray: Clear")
    }
  };
  testNoteListIsInstantiatedWithArray();
})(this);
