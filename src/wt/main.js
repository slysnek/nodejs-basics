import { cpus } from "node:os";
import { Worker } from "node:worker_threads"
import path from 'path';
import { fileURLToPath } from 'url';

const cpuCount = cpus().length
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, './worker.js');

const performCalculations = async () => {
    const workerPromises = [];

    for (let i = 10; i < cpuCount + 10; i++) {
        workerPromises.push(createWorker(i))
    }

    function createWorker(cpuCore){
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: cpuCore,
            });

            worker.on('message', (data) => resolve({status: 'resolved', data: data}));
            worker.on('error', () => reject({status: 'error', data: null}));
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        })
    }

    const results = await Promise.allSettled(workerPromises)
    results.forEach((val) => {
        console.log(val.value || val.reason);
    })
}
await performCalculations();