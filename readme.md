# theToddler
the Toddler, a react-native project in app development

rules of engagement
  to run program: cd /theToddler/ and run npm start
  to run eslint:  npm run lint


setup steps:
  eslint: npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint

  run  node./node_modules/eslint/bin/eslint.js --init

add to package.json {scripts {
      "lint" : "./node_modules/eslint/bin/eslint.js **/*.js"
      }}


ragnarr18: Ragnar Geir Ragnarsson

bjarnib18: Bjarni Berg Björgvinsson

arnarp18: Arnar Snær Pálsson
