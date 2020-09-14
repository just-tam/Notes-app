class NotesListView {

    constructor() {
        this.notesList = new NotesList;
        this.list = this.notesList.notes;
    }

    viewNotesList() {

        this.list.forEach(note => console.log("<ul><li><div>" + note + "</div></li></ul>"));

    }
}