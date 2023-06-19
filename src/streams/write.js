import { createWriteStream, appendFile } from 'fs';
import path from 'path';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToWrite.txt')

const write = async () => {
    const { stdout } = process;

    const rline = createInterface({
        input: process.stdin,
        output: process.stdout
    })

    createWriteStream(filePath);
    stdout.write('Hello! Enter some text to add to the file:\n')
    rline.on('line', line => {
        let text = line;
        if (text === 'exit') {
            process.exit()
        }
        appendFile(filePath, text, err => {
            if (err) throw console.error(err);
            console.log('\nText was added. Enter some more text or type "exit" to end editing the file');
        })
    })

    process.on('exit', () => stdout.write('\nBye!'))

};

await write();