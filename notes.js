class Notes {
    constructor() {
        this.notesList = []
    }

    addNote(text) {
        this.notesList.push(text);
    }

    viewNotes() {
        for (var i = 0; i < this.notesList.length; i++) {
            return this.notesList[i];
        }
    }
}