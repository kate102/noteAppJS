(function(exports) {

  function HTMLContainsDefaultNote() {

    // create double of noteList called "noteListDouble"
    function noteDouble() {
      this.text = "Favourite drink: seltzer"
    }

    var noteDouble = new noteDouble()

    function noteListDouble() {
      this.notesArray = [noteDouble]
    }
    noteListDouble.prototype = {
      addNote: function(note) {
        this.notesArray.push(note);
      }
    }
    var noteListDouble = new noteListDouble()
    var noteController = new NoteController(noteListDouble)
    assertionToCheck = (noteController.noteListView.showHTML() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
    assert.isTrue(assertionToCheck)
  }

  HTMLContainsDefaultNote()
})(this)
