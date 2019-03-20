console.log("hello1");
(function(exports) {
  console.log("hello2");
  function HTMLContainsDefaultNote() {
    console.log("hello3");
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
    console.log(noteController.noteListView.showHTML());
    assertionToCheck = (noteController.noteListView.showHTML() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
    assert.isTrue(assertionToCheck)

  }

  HTMLContainsDefaultNote()
})(this)
