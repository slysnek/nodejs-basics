import { fork } from 'node:child_process';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    fork(
        path.join(__dirname, "files/script.js"),
        args
    );
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test', 2]);
