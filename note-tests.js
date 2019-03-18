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
