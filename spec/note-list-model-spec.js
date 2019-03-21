(function(exports) {
  function testNoteListCanbeInstantiated() {
    var noteList = new NoteList();
    assertionToCheck = (noteList instanceof NoteList)
    // if (noteList instanceof NoteList) {
    if (noteList instanceof NoteList) {
      console.log("Pass: testNoteListCanbeInstantiated - Yep, that's an instance!");
    }
    else {
      throw new Error("Fail: testNoteListCanbeInstantiated - Not an instance of object")
    }
  };
  testNoteListCanbeInstantiated();
})(this);
// assertionToCheck = (noteController.getAndInsertHTML() === testStr)
// assert.isTrue(assertionToCheck)

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


(function(exports) {
  function testNoteListCanPrint() {
    var noteList = new NoteList();
    noteList.notesArray.push('Note Hello!')
    noteList.notesArray.push('Note Goodbye!')

    if (noteList.printAll().includes("Note Hello!", "Note Goodbye!")){
      console.log("testNoteListCanPrint: Clear")
    }
    else {
      console.log(noteList.printAll())
      throw new Error("Error: testNoteListCanPrint does not match");
    }
  };
  testNoteListCanPrint();
})(this);
