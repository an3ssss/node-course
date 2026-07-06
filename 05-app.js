// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependancy - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// depth dependancy 
// npm i nodemon -D 
// -D or --save-dev

// npm run start 
// npm run start02 ~= creating a short cut 
// npm run dev ~= live server

// creating a short cut => 
    // package.json => "scripts" =>
    //  add new property + the command =>
    //  type the command npm run example (example is the name of the proprerty you added)
    //  example : "start03": "node 03-app.js"

// creating something similar to live server
   // package.json => scripts =>
   // add the property + the command =>
   // type the command npm run example
   // example: "dev05": "nodemon 05-app.js"    

// if we have nodemon installed globally in the project we can type 
    // the command nodemon 05-app.js directly in the terminal 
    // and for any file

console.log('Ok');
console.log('Okkk');

