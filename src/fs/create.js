import { appendFile, access } from 'fs';

const create = async () => {
    const path = './src/fs/files/fresh.txt' 
    access(path, (err) => {
        if(err) {
            appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', function (err) {
                if (err) throw err;
                console.log('Success!');
            });
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await create();