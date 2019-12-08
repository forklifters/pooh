import { expose } from 'comlink';
import { addFile, updateFile, getFiles, deleteFile } from './DB';
import { File } from '../models';

export class WorkerAPI {
    addFile(): Promise<void> {
        return addFile();
    }
    updateFile(payload: { id: string; content: string }): Promise<void> {
        return updateFile(payload);
    }
    getFiles(): Promise<File[]> {
        return getFiles();
    }
    deleteFile(payload: { id: string }): Promise<void> {
        return deleteFile(payload);
    }
}

expose(WorkerAPI);