import * as fs  from 'fs'
import * as config from '../../../wsgen.json' assert {type: "json"};
import { copyFile } from '../../utils/filesystem.js';
import { sitetemplatedir } from './constants.js';

export const copyTemplate = () => {
  fs.mkdirSync(sitetemplatedir, { recursive: true })

  const readFiles = (dirname) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) throw err;

      filenames.forEach((filename) => {
        copyFile(dirname + filename, sitetemplatedir + filename)
      });
    });
  }
  
  readFiles(config.default.template.path)
}