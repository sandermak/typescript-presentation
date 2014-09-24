### Example app with TypeScript and Angular
You need to have NodeJS/npm installed before proceeding with running this example.

Then, install Bower (management of clientside JS libs, as defined in bower.json) and gulp (JS build system, see gulpfile.js) to run the example:

```
cd demo-typescript-angular
npm install bower gulp -g
npm install
bower install
```

Now, you should have a node_modules dir filled with all the build dependencies and a bower_modules dir with the clientside libs like Angular.

Typing ```gulp``` kicks of the build, starts a lightweight webserver on port 9000 and keeps watching for changes to recompile.

The app can be opened with [http://localhost:9000/app/#](http://localhost:9000/app/#)

