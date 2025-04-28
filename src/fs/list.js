import { access, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'files')

const list = async () => {
    access(folderPath, err => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            listNames()
        }
    })
    function listNames() {
        const filesArray = readdirSync(folderPath);
        if (filesArray.length === 0) {
            throw new Error('No files in this directory!');
        }
        console.log("Current filenames:");
        filesArray.forEach(file => {
            console.log(file);
          });
        }
};

await list();