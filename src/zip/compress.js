import { createGzip } from 'zlib';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToCompress.txt')
const compressedFilePath = path.join(__dirname, 'files/archive.gz')

const compress = async () => {
    const gzip = createGzip();
    const inputStream = fs.createReadStream(filePath);
    const outStream = fs.createWriteStream(compressedFilePath);
    inputStream.pipe(gzip).pipe(outStream);
};

await compress();