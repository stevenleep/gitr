# gitcr

the original plan was to name it gitr, but unfortunately that name was taken.

Add a secure .gitconfig file to your project with a simple command that facilitates .git extensions and internal git workflows

## Usage
```bash
yarn add gitcr # or npm/pnpm

# This command will automatically create a .workspace folder
# a .gitconfig file is stored in the folder
yarn run gitr 

# You can run the `git r` command from the command line, and the console will output an "gitr is runing..." prompt

git r # custom git alias
```

## Feature
- Separate configuration file injection, no conflicts with .git under projects
- More secure, update your git extensions (e.g. Alias) whenever you want, adaptable to internal Git workflow conventions

