export default class NoteEntity {
    public id: string | null;
    public text: string | null;
    public folder: string | null;
    
    constructor(id: string | null, text: string | null, folder: string | null) {
        this.id = id;
        this.text = text;
        this.folder = folder;
    }
    static Empty(): NoteEntity {
        return new NoteEntity(null, null, null);
    }
}