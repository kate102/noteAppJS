(function(exports) {

  function HTMLContainsDefaultNote() {
    // create double of noteList called "noteListDouble"
    function noteDouble() {
      this.text = "Favourite food: pesto"
    }
    var noteDouble = new noteDouble()

    function noteListDouble() {
      this.notesArray = [noteDouble]
    }
    var noteListDouble = new noteListDouble()
    var noteController = new NoteController(noteListDouble)
    var testStr = "<ul><li><div>Favourite food: pesto</div></li></ul>"
    noteController.getAndInsertHTML()
    assertionToCheck = (document.getElementById("app").innerHTML === testStr)
    assert.isTrue(assertionToCheck)
  }

  HTMLContainsDefaultNote()
})(this)
