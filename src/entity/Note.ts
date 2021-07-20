export default class Note {
    public id: string | null;
    public text: string | null;
    constructor(id: string | null, text: string | null) {
        this.id = id;
        this.text = text;
    }
}