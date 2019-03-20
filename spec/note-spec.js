(function(exports) {
  function testNoteTakesTextOnInstantiation() {
    var note = new Note("It is a test note, stupid");

    if (note.text !== "It is a test note, stupid") {
      throw new Error("Error: testNoteTakesTextOnInstantiation does not match");
    }
    else {
      console.log("testNoteTakesTextOnInstantiation: Clear")
    }
  };
  testNoteTakesTextOnInstantiation();
})(this);

(function(exports) {
  function testReturnNoteText() {
    var note = new Note("It is a test note, stupid");

    if (note.getText() !== "It is a test note, stupid") {
      throw new Error("Error: testReturnNoteText does not match");
    }
    else {
      console.log("testReturnNoteText: Clear")
    }
  };
  testReturnNoteText();
})(this);
