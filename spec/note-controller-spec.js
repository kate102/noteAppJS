(function(exports) {

  function HTMLContainsDefaultNote() {
    // create double of noteList called "noteListDouble"
    var noteDouble = {
      text: "Favourite food: peas"
    }

    function noteListDouble() {
      this.notesArray = [noteDouble]
    }
    var noteListDouble = new noteListDouble()
    var noteController = new NoteController(noteListDouble)
    var testStr = "<ul><li><div>Favourite food: peas</div></li></ul>"
    noteController.getAndInsertHTML()
    assertionToCheck = (document.getElementById("app").innerHTML === testStr)
    assert.isTrue(assertionToCheck)
  }

  HTMLContainsDefaultNote()
})(this)
