// Code is wrapped in the module pattern.
// Code uses the constructor and prototype pattern to define a single note view object that can be instantiated.
// The single note view constructor takes a note model as a parameter.
// The single note view has a method that, when called, returns a string of HTML that represents the note model.
// For example: <div>Favourite drink: seltzer</div>.
(function(exports) {

  function SingleNoteViewTest() {
    // create double of noteList called "noteListDouble"
    function noteDouble() {
      this.text = "Favourite drink: Merlot"
    }

    var noteDouble = new noteDouble()
    var testStr = "<div>Favourite drink: Merlot</div>"
    var singleNoteView = new SingleNoteView(noteDouble)

    assertionToCheck = (singleNoteView.returnHTML() === testStr)
    assert.isTrue(assertionToCheck)


  }
  SingleNoteViewTest()
})(this)
