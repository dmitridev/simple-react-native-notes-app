import AsyncStorage from '@react-native-async-storage/async-storage';
import { resolve } from 'dns';
import NoteEntity from '../entity/NoteEntity';
import INotesStorage from './INotesStorage';
import { v4 } from 'uuid';


export default class NotesStorage implements INotesStorage {
    
    public static async getList(folder: string | null = null): NoteEntity[] {
        var notesStorage = new NotesStorage();
        return await notesStorage.getList(folder);
    }



    async getList(folder: string | null = null): NoteEntity[] {
        console.log(folder);
        const keys = (await AsyncStorage.getAllKeys()).filter(e => e != 'folders');
        const response = await AsyncStorage.multiGet(keys);
        console.log(keys);
        let note = NoteEntity.Empty();
        const ret: (NoteEntity | null)[] = response.map(([k, json]) => {
            if (json) {
                const note: NoteEntity = JSON.parse(json);
                console.log(note);
                if (folder && note.folder != folder)
                    return null;
                else return note;
            }
            return null;
        }).filter(out => out != null && out != NoteEntity.Undefined());
        console.log(ret);

        return ret;
    }

    public static async get(id: string): NoteEntity {
        return await new NotesStorage().get(id);
    }

    async get(id: string): NoteEntity {
        const response: string | null = await AsyncStorage.getItem(id);
        if (response != null) {
            const item = JSON.parse(response);
            const note = new NoteEntity(item.id, item.text, item.folder);
            return note;
        } else
            return NoteEntity.Empty();
    }

    async update(entity: NoteEntity): void {
        if (entity.folder == null)
            entity.folder = "default";

        const folders: string[] = JSON.parse(await AsyncStorage.getItem('folders') || "[]");
        if (!folders.includes("default")) {
            folders.push("default");
            AsyncStorage.setItem('folders', JSON.stringify(folders));
        }



        const id = entity?.id ? entity?.id : v4();
        console.log(entity)
        await AsyncStorage.setItem(id, JSON.stringify({ id, text: entity.text, folder: entity.folder }));
    }
    public static async update(entity: NoteEntity): void {
        return await new NotesStorage().update(entity);
    }

    delete(id: string): void {
        AsyncStorage.removeItem(id);
    }

    public static async delete(id: string) {
        return await new NotesStorage().delete(id);
    }

    static async getFolders(): Promise<string | null> {
        return await AsyncStorage.getItem('folders');
    }

    static async getAllFolders(): string[] {
        const response = await AsyncStorage.getItem('folders') || "[]";

        return JSON.parse(response);
    }
}