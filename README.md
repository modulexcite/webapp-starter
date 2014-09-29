Installing node.js
------------------

The server part of this starter application is a very simple node.js application.
In addition the build system is built on top of node.js. So, you will need to install node. That can be done here:

```
http://nodejs.org/download/
```


Installing webpack
------------------

Webpack is a package build system. It takes our modules, written in commonjs, and dependencies, and generates a static asset representing those modules (bundle.js). To install webpack:

```
npm install webpack -g
```

(npm is node package manager. It comes with your node install. The -g is a global install.)

More about webpack and what it can do for you below.

Installing node dependencies
----------------------------

These are used for both development and also dependencies within the distributed javascript bundle.

```
npm install
```

This will install dependencies locally to this project. The result will be in the node_modules directory.

Running the application
-----------------------

You can either type

```
npm start
```

or what that does, which is:

```
node server.js
```

This will start the server on localhost:8080. This port can be changed within server.js.

Running the tests
-----------------

The tests run in a web browser. First start run this command:

```
npm test
```

This will build a bundle for the tests and start the dev server. Then go to:

```
http://localhost:9500/webpack-dev-server/
```

The tests will rebuild and the web page automatically update when you change a dependency.

Webpack
=======

To watch your javascript source and have the bundle rebuilt when it changes:

```
webpack --watch
```

To build a production bundle.js (minimized):

```
webpack -p
```

Or just to do a regular build

```
webpack
```

That's more or less it.


