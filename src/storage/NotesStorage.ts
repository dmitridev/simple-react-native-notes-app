import AsyncStorage from '@react-native-community/async-storage';
import { resolve } from 'dns';
import Note from '../entity/Note';

export default class NotesStorage {
    static async getNote(id: string): Note {
        const response: string | null = await AsyncStorage.getItem(id);
        if (response != null) {
            const item = JSON.parse(response);
            const note = new Note(item.id, item.text);
            return note;
        } else
            return new Note(null, null);
    }

    static async updateNote(id: string, text: string): void {
        const note = new Note(id, text);
        await AsyncStorage.setItem(id, JSON.stringify({ id, text }));
    }

    static async deleteNote(id: string): void {
        await AsyncStorage.removeItem(id);
    }

    static async getAllNotes(): Promise<Note[]> {
        const keys = await AsyncStorage.getAllKeys();
        const response = await AsyncStorage.multiGet(keys);
        const ret: Note[] = response.map(([k, v]) => {

            if (v != null) {
                console.log(v);
                return JSON.parse(v);
            } else return null;
        }).filter(out => out != null);
        return ret;
    }
    static async clear(): void {
        return AsyncStorage.clear();
    }
}