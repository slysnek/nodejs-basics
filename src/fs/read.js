import { createReadStream } from 'fs';
import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = join(__dirname, 'files/fileToRead.txt')
    const readStream = createReadStream(filePath, 'utf-8')

    readStream.on('error', () => { throw new Error('FS operation failed') })
    readStream.on('data', data => console.log(data))
};

await read();