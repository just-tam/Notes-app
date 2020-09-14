function textCanBePushedIntoNotes() {
    var notes = new Notes();
    var text = "I'm testing with Javascript!"
    notes.addNote(text);
    assert.isTrue(notes.notesList.length === 1);
}

function canReturnATextNote() {
    var notes = new Notes();
    var text = "I'm testing with Javascript!"
    notes.addNote(text);
    notes.viewNotes();
    assert.isTrue(notes.viewNotes() === "I'm testing with Javascript!")
}