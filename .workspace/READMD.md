# .workspace
Using the gitr command to generate a configuration file, the scripts in the file are automatically injected into gitconfig (but do not affect the use of the real .gitconfig) You can change the contents of the scripts in this file at any time, without having to re-register

```bash
npm run gitr #default workspace dirname is .workspace
```

Change dirname to .project
```bash
# TODO: npm run gitr --workspace .project
npm run gitr .project
```

