class NotesListView {

    constructor() {
        this.notesList = new NotesList;
        this.list = this.notesList.notes;

    }

    viewNotesList() {

        var arrlist = this.list.map(note => "<ul><li><div>" + note + "</div></li></ul>");
        return arrlist

    }




}