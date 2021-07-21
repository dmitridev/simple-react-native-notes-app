import NoteEntity from '../entity/NoteEntity';


export default interface INotesStorage {
    getList(folder: string): NoteEntity[];
    get(id: string): NoteEntity;
    update(entity: NoteEntity): void;
    delete(id: string): void;
}