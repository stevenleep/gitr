const { joinPath, getPath } = require("./path");
const fs = require("fs");

function getPackagePath(projectRoot) {
  if (!projectRoot) {
    projectRoot = tryGetProjectRoot();
  }

  const packagePath = joinPath(projectRoot, "package.json");
  if (!fs.existsSync(packagePath)) {
    throw new Error(`Could not find package.json at ${packagePath}`);
  }
  return packagePath;
}

function tryGetProjectRoot() {
  try {
    return getPath(__dirname, "../");
  } catch (e) {
    throw new Error(`Could not find project root`);
  }
}

module.exports = {
  getPackagePath,
};
