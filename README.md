# Angularjs and jasmine poc

POC app based on angular-js, and Jasmine unit testing framework.

Steps to setup the app:
- Download git from http://git-scm.com/
- Download npm from http://nodejs.org/
- Clone this project using git:
```sh
git clone https://github.com/ramit21/angular-jasmine-poc.git
cd angular-jasmine-poc
```
- Run npm install to download dependencies. 
- Behind the scenes this will also call bower install. You should find that you have two new folders in your project:
```sh
node_modules - contains the npm packages for the tools we need
app/bower_components - contains the angular framework files
```
- Start the server by running following command:
```sh
npm start
```
- Now browse to the app at http://localhost:8000/app/index.html
- To Run unit test cases, run :
```sh
npm test
```
Test cases can be launched against a browser (eg. Chrome), or against PhantomJS (headless browser).
