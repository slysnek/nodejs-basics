import { access, unlink } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'files')
const fileName = 'fileToRemove.txt'
const filePath = path.join(folderPath, fileName)

const remove = async () => {
    access(filePath, err => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            unlink(filePath, (err) => {
                if (err) throw new Error('FS operation failed')
                console.log("File has been removed");
            });
        }
    })
};

await remove();