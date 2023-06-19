import { access, promises, copyFile } from 'fs';
import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = join(__dirname, 'files')
const folderCopyPath = join(__dirname, 'files_copy')

const copy = async () => {
  access(folderPath, err => {
    if (err) {
      throw new Error('FS operation failed')
    } else {
      access(folderCopyPath, err => {
        if (err) {
          promises.mkdir(folderCopyPath)
            .then(() => copyFiles())
        } else {
          throw new Error('FS operation failed')
        }
      })
    }
  })

  function copyFiles() {
    promises.readdir(folderPath)
      .then(fileArray => {
        for (const file of fileArray) {
          const filePath = join(folderPath, file)
          const destPath = join(folderCopyPath, file)
          copyFile(filePath, destPath, () => console.log('File has been copied!'))
        }
      }).catch((err) => (console.log(err)))
  }
};

await copy();


