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
      console.log("Pass: " + arguments.callee.name.toString())
    }
    else {
      console.log(noteList.printAll())
      throw new Error("Error: testNoteListCanPrint does not match");
    }
  };
  testNoteListCanPrint();
})(this);

(function(exports) {
  function testNoteListNoteIdsAreUnique() {
    var noteList = new NoteList();
    noteList.notesArray.push(new Note('Note Hello!'))
    noteList.notesArray.push(new Note('Note Goodbye!'))

    var firstId = noteList.notesArray[0].getId()
    var secondId = noteList.notesArray[1].getId()

    if (firstId !== secondId){
      console.log("Pass: " + arguments.callee.name.toString())
    }
    else {
      throw new Error(`Error: ${arguments.callee.name.toString()} does not match`);
    }
  };
  testNoteListNoteIdsAreUnique();
})(this);
