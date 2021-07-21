export default class NoteEntity {
    public id: string | null | undefined;
    public text: string | null | undefined;
    public folder: string | null | undefined;

    constructor(id: string | null | undefined, text: string | null | undefined, folder: string | null | undefined) {
        this.id = id;
        this.text = text;
        this.folder = folder;
    }
    static Empty(): NoteEntity {
        return new NoteEntity(null, "", "default");
    }

    static Undefined(): NoteEntity {
        return new NoteEntity(undefined, undefined, undefined);
    }
}