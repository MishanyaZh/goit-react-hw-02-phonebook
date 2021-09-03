# goit-react-hw-02-phonebook

1. npx create-react-app .

2. npm start

3. npm run build

   4.package.json (top)
   https://create-react-app.dev/docs/deployment/#github-pages "homepage":
   "https://myusername.github.io/my-app",
   "homepage":"https://mishanyazh.github.io/goit-react-hw-02-phonebook",

4. npm run build

5. npm install --save gh-pages

   7.package.json ("scripts") "predeploy": "npm run build", "deploy": "gh-pages
   -d build",

6. npm run deploy
   <!-- ------------- -->
7. npm install --save-dev prettier eslint

8. npx mrm@2 lint-staged

   10.1. add to jsone "lint-staged": { "_.{js,jsx}": "eslint --cache --fix",
   "_.{js,css,md,jsx}": "prettier --write" }

9. .prettierrc.json { "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi":
   true, "singleQuote": true, "trailingComma": "all", "bracketSpacing": true,
   "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }
   <!-- ---------------------- -->

   liba

10. css liba https://emotion.sh/docs/introduction

11. prop-types https://www.npmjs.com/package/prop-types npm i prop-types
