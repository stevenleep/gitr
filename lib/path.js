const path = require("path");
const fs = require("fs");

function getPath(...subPaths) {
  return path.resolve(__dirname, ...subPaths);
}

function join(parentPath, ...childPaths) {
  return path.join(parentPath, ...childPaths);
}
function pathExists(path) {
  return fs.existsSync(path);
}

module.exports = {
  getProjectRoot: getPath("../"),
  getPath,
  joinPath: join,
  pathExists,
};
