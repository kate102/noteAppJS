# Note

# SETUP

TEST
Made a test using plain js, asserting that passing text as an parameter to the object should match itself.

ERROR
(Note is not defined)

RED
Defined Note

ERROR
(Text does not match test text)

GREEN
Passed this.text as an attribute equal to the test parameter


TEST
Asserting that getText function could retrieve the attribute

ERROR
(getText not a function)

RED
Made getText function

ERROR
(does not match text)

GREEN
Made getText return text


# Note List

SETUP

TEST
Asserting that noteList is an instance of the NoteList object

ERROR
(NoteList is not defined)

GREEN
Defined NoteList

TEST
Asserting new NoteList is instantiated with an empty array for notes.

ERROR
testNoteListIsInstantiatedWithArray does not match
    at testNoteListIsInstantiatedWithArray

GREEN
Instantiated NoteList with an empty array


TEST
Expecting that printAll returns the array

ERROR
(printAll is not defined)

RED
Defined printAll

ERROR
(Does not match expected result)

GREEN
Changed test to expect printAll to return all entries in the array


TEST
