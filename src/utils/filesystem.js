import * as fs from 'fs'

export const readFile = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    throw err;
  }
}

export const writeFile = (path, content) => {
  try {
    fs.writeFileSync(path, content);
  } catch (err) {
    throw err;
  }
}

export const copyFile = (source, destination) => {
  fs.copyFile(source, destination, (err) => {
    if (err) throw err;
  });
}