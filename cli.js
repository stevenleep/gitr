#!/usr/bin/env node

const { getProjectRoot, pathExists, joinPath, getPath } = require("./lib/path");
const { createDir, copyFile } = require("./lib/fs");

const workspace = process.argv[2] || ".workspace";
const packageJson = getPath(getProjectRoot, "package.json");
const packageJsonContent = require(packageJson);

function start(workspaceName = workspace) {
  const workspacePath = joinPath(getProjectRoot, workspace);
  if (!pathExists(workspacePath)) {
    createDir(workspacePath);
  }

  injectFile("./temps/.gitconfig", workspacePath + "/.gitconfig");
  injectPackageScript("gitr", "gitr");
  rewritePackageJson();

  runGit();
}

function runGit() {
  require("child_process").exec(
    `git config --local include.path ../${workspace}/.gitconfig`,
    (error, stdout, stderr) => {
      console.log("Git config injected", error, stdout, stderr);
    }
  );
}

function injectFile(parentPath, dest) {
  copyFile(parentPath, dest);
}

function injectPackageScript(scriptName, script) {
  if (packageJsonContent.scripts === undefined) {
    packageJsonContent.scripts = {};
  }
  packageJsonContent.scripts[scriptName] = script;
}

function rewritePackageJson() {
  require("fs").writeFileSync(
    packageJson,
    JSON.stringify(packageJsonContent, null, 2)
  );
}

start();
