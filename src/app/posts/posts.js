import * as fs  from 'fs'
import * as config from '../../../wsgen.json' assert {type: "json"};
import showdown from 'showdown'
import { writeFile, readFile } from '../../utils/filesystem.js';
import { outdir, head, body } from './constants.js';

const mdtohtml = (md) => {
  try {
    // weird
    showdown.Converter()
    return showdown.makeHtml(md);
  } catch (err) {
    throw err;
  }
}

export const compilePosts = () => {
  fs.mkdirSync(outdir, { recursive: true })

  const readFiles = (dirname) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) throw err;

      filenames.forEach((filename) => {
        const content = readFile(dirname + filename)
        writeFile(outdir + filename.substring(0, filename.length - 3) + ".html", head + body(mdtohtml(content)))
      });
    });
  }
  
  readFiles(config.default.posts.path)
}
