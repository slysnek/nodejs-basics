import { rename, access } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'files')
const fileName = 'wrongFilename.txt'
const newFileName = 'properFilename.md'
const filePath = path.join(folderPath, fileName)
const newFilePath = path.join(folderPath, newFileName)

const renameFile = async () => {
    access(newFilePath, err => {
        if (!err) {
            throw new Error('FS operation failed')
        } else {
            rename(filePath, newFilePath, (err) => {
                if (err) throw new Error('FS operation failed')
                console.log("File has been renamed");
            });
        }
    })
};

await renameFile();