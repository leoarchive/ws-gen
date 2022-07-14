import * as fs  from 'fs'
import * as config from '../../../wsgen.json' assert {type: "json"};
import { copyFile } from '../../utils/filesystem.js';
import { siteassetsdir } from './constants.js';

export const copyAssets = () => {
  fs.mkdirSync(siteassetsdir, { recursive: true })

  const readFiles = (dirname) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) throw err;

      filenames.forEach((filename) => {
        copyFile(dirname + filename, siteassetsdir + filename)
      });
    });
  }
  
  readFiles(config.default.assetsdir)
}