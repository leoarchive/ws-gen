import * as fs  from 'fs'

export const readFile = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
}

export const writeFile = (path) => {
  try {
    fs.writeFileSync(path, content);
  } catch (err) {
    console.error(err);
  }
}
