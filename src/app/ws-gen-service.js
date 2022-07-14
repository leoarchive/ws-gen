import * as fs  from 'fs'
import * as data from '../../wsgen.json' assert {type: "json"};
import showdown from 'showdown'
import { writeFile, readFile } from '../utils/fileio.js';

const tohtml = (md) => {
  try {
    // weird
    showdown.Converter()
    return showdown.makeHtml(md);
  } catch (err) {
    console.error(err);
  }
}

const compilePosts = () => {
  const postsConfg = data.default.posts;
  const htmlHead = `
  <!DOCTYPE html>
  <html lang=\"en\">
  <head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>Document</title>
  <link rel="stylesheet" href="${postsConfg.style}">
  </head>
  `
  
  fs.mkdirSync(postsConfg.output, { recursive: true })

  const readFiles = (dirname) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) {
        console.error(err);
        return;
      }

      filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, 'utf-8', function(err, content) {
          if (err) {
            console.error(err);
            return;
          }
          writeFile(postsConfg.output+filename+".html", htmlHead + tohtml(content))
        });
      });
    });
  }
  
  readFiles(postsConfg.path)
}
compilePosts();
// console.log(data.default)