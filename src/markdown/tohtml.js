import { readFile } from '../utils/fileio.js';
import showdown from 'showdown'

export const tohtml = (path) => {
  try {
    // weird
    showdown.Converter()
    return showdown.makeHtml(readFile(path));
  } catch (err) {
    console.error(err);
  }
}