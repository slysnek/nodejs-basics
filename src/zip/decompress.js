import * as zlib from 'zlib';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files/archive.gz')
const decompressedFilePath = path.join(__dirname, 'files/fileToCompress.txt')

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const inputStream = fs.createReadStream(filePath)
    const outputStream = fs.createWriteStream(decompressedFilePath);
    inputStream.pipe(unzip).pipe(outputStream);
};

await decompress();