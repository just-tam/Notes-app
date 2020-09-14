function textCanBePushedIntoNotes() {
    var notes = new Notes();
    var text = "I'm testing with Javascript!"
    notes.addNote(text);
    assert.isTrue(notes.notesList.length === 1);
}