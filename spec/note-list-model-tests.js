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

// (function(exports) {
//   function testReturnNoteText() {
//     var note = new Note("It is a test note, stupid");
//
//     if (note.getText() !== "It is a test note, stupid") {
//       throw new Error("Error: testReturnNoteText does not match");
//     }
//     else {
//       console.log("testReturnNoteText: Clear")
//     }
//   };
//
//   testReturnNoteText();
// })(this);
