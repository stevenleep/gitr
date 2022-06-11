const fs = require("fs");

function createDir(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

module.exports = {
  createDir,
  copyFile,
};
