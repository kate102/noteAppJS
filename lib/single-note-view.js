// Code is wrapped in the module pattern.
// Code uses the constructor and prototype pattern to define a single note view object that can be instantiated.
// The single note view constructor takes a note model as a parameter.
// The single note view has a method that, when called, returns a string of HTML that represents the note model.
// For example: <div>Favourite drink: seltzer</div>.
(function(exports) {
  function SingleNoteView(note) {
      this.note = note
  }

 SingleNoteView.prototype.returnHTML = function(){
  var returnHTMLStr = "<div>"+this.note.text+"</div>"
  return returnHTMLStr

  }

  exports.SingleNoteView = SingleNoteView
})(this)
