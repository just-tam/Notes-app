class NotesList {
    constructor() {
        this.notes = []
    }

    addNote(text) {
        this.notes.push(text);
    }

    viewNotes() {
        for (var i = 0; i < this.notes.length; i++) {
            return this.notes[i];
        }
    }
}