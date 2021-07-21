import { initialWindowMetrics } from 'react-native-safe-area-context';
import NoteEntity from '../entity/NoteEntity';
import NotesStorage from '../storage/NotesStorage';

export default class Storage {
    public static notes: NoteEntity[];
    public static folders: string[];

    constructor() {
        Storage.update();
    }

    public static async update() {
        Storage.notes = await NotesStorage.getList();
        Storage.folders = await NotesStorage.getAllFolders();
    }
}