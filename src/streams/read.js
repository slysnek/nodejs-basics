import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToRead.txt')

const read = async () => {
const readStream = createReadStream(filePath, 'utf-8')
    readStream.on('error', error => console.error(`error: ${error}`))
    readStream.on('data', data => process.stdout.write(data))
};

await read();