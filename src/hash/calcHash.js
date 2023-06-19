import { createHash } from "crypto";
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt')

const calculateHash = async () => {
    const bufferFile = fs.readFileSync(filePath);
    const hash = createHash("sha256").update(bufferFile).digest("hex");
    console.log(hash);
};

await calculateHash();