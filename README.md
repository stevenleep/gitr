# Gitr

This repository shows you how to extend your own gitconfig and githooks in your project...

You can use the `includePath`` or `gitSubCommand` extension commands, where includePath is used as follows:

```bash
git config --local include.path ../.workspace/.gitconfig
```
The gitsubcommand is relatively simple, just name your script file git-xxx and place it in the git working directory (or link to it)

```bash
# git-test.sh
echo "Hello World"
```

```bash
```bash
git test
```

## Cli
I plan to implement a gitr command in the Core branch to quickly initialize the gitconfig extension in a project and support dynamic configuration; a locally available base version of the class has now been implemented (no release yet)

**Approximate usage steps**
```bash
npm install gitr # or yarn/pnpm
```
```bash
npm run gitr
# This command will automatically create a .workspace folder
# a .gitconfig file is stored in the folder
```
```bash
# You can run the `git r` command from the command line, and the console will output an "gitr is runing..." prompt
git r # custom git alias
```