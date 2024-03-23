import { existsSync, readdirSync, lstatSync, unlinkSync, rmdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const deleteFolderRecursive = (path) => {
  if (existsSync(path)) {
    readdirSync(path).forEach((file) => {
      const curPath = join(path, file);
      if (lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        unlinkSync(curPath);
      }
    });
    rmdirSync(path);
  }
};

const folderPath = join(__dirname, '../dist');

deleteFolderRecursive(folderPath);
