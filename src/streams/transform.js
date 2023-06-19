import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
      transform(chunk, encoding, callback) {
        const resultString = `${chunk.toString('utf8').split('').reverse('').join('')}\n`;
        callback(null, resultString);
      }
    });
    
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
}
await transform();