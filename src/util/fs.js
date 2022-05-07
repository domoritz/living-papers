import fs from 'node:fs/promises';

export function mkdirp(path) {
  return fs.mkdir(path, { recursive: true });
}

export function ls(path) {
  return fs.readdir(path);
}

export function rmrf(path) {
  return fs.rm(path, { recursive: true, force: true });
}

export function readFile(path, enc = 'utf8') {
  return fs.readFile(path, enc);
}

export function writeFile(path, data) {
  return data ? fs.writeFile(path, data) : null;
}
