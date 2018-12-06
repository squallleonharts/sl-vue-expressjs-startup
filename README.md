# sl-vue-expressjs-startup

VueJS and ExpressJS startup project with video tutorial from freecodecamp.com

# Set up environment and create project

## create client

\$ npm install -g vue-cli
\$ vue list
\$ vue init webpack client
\$ npm install
\$ git add -all
\$ git commit -m "message"
\$ git push

## create server

\$ npm init -f
\$ npm install --save nodemon eslint
\$ replace script with the following in package.json

"scripts": {
"start": "./node\*modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
"lint": "./node_modules/.bin/eslint \*\*/\_.js"
},

\$ create app.js to server/src/
\$ npm start // some errors.
\$ node ./node_modules/eslint/bin/eslint.js--init
