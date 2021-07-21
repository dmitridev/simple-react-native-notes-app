import AsyncStorage from '@react-native-community/async-storage';
import { resolve } from 'dns';
import NoteEntity from '../entity/NoteEntity';

export default class NotesStorage {
    static async getNote(id: string): NoteEntity {
        const response: string | null = await AsyncStorage.getItem(id);
        if (response != null) {
            const item = JSON.parse(response);
            const note = new NoteEntity(item.id, item.text, item.folder);
            return note;
        } else
            return new NoteEntity(null, null, null);
    }

    static async updateNote(id: string, text: string): void {
        let note = NotesStorage.getNote(id);
        await AsyncStorage.setItem(id, JSON.stringify({ id, text, folder: note.folder }));
    }

    static async deleteNote(id: string): void {
        await AsyncStorage.removeItem(id);
    }

    static async getAllNotes(): Promise<NoteEntity[]> {
        const keys = await AsyncStorage.getAllKeys();
        const response = await AsyncStorage.multiGet(keys);
        const ret: NoteEntity[] = response.map(([k, v]) => {

            if (v != null) {
                return JSON.parse(v);
            } else return null;
        }).filter(out => out != null);
        return ret;
    }

    static async getNotes(folder: string): NoteEntity[] {
        const keys = await AsyncStorage.getAllKeys();
        const response = await AsyncStorage.multiGet(keys);
        let note = NoteEntity.Empty();
        const ret: NoteEntity[] = response.map(([k, json]) => {
            if (json !== null) {
                const note: NoteEntity = JSON.parse(json);
                if (note.folder !== folder)
                    return NoteEntity.Empty();
                else return new NoteEntity(note.id, note.text, note.folder);
            }
            return NoteEntity.Empty();
        }).filter(out => out !== note);
        return ret;
    }

    static async clear(): void {
        return await AsyncStorage.clear();
    }

    static async getFolders(): string[] | null {
        const optional = await AsyncStorage.getItem('folders');
        if (optional != null)
            return JSON.parse(optional) as string[];

        return null;
    }
}