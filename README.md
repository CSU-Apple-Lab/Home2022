# CSU Apple Lab (iOS Club) Home Page

Source code of our new home page.

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

# Deploy

deploy to [https://csu-apple-lab.github.io/](https://csu-apple-lab.github.io/)
```bash
npm run deploy
```
# Troubles shooting

1. hot-reload not working

SvelteKit has supported hot-reload out of the box, if it doesn't work, check these out:

1. you are not running inside WSL (it causes some problems)
2. the format of your `.svelte` is correct (like `<p/>` will causes hot-reload not working).

# Todo

1. - [ ] Main page
2. - [ ] Members list
3. - [ ] Recruit page

# Team

| name     | email                 |
| ----     | ----                  |
| Rick Lin | 8208200137@csu.edu.cn |