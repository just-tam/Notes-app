function textCanBePushedIntoNotes() {
    var notes = new NotesList();
    var text = "I'm testing with Javascript!"
    notes.addNote(text);
    assert.isTrue(notes.notes.length === 1);
}

function canReturnATextNote() {
    var notes = new NotesList();
    var text = "I'm testing with Javascript!"
    notes.addNote(text);
    notes.viewNotes();
    assert.isTrue(notes.viewNotes() === "I'm testing with Javascript!")
}

function canReturnATextNoteWithHtml() {
    var noteslist = new NotesListView();
    var text = "I'm testing with Javascript!"
    noteslist.notesList.addNote(text);
    assert.isTrue(noteslist.viewNotesList() === "<ul><li><div>I'm testing with Javascript!</div></li></ul>")
}