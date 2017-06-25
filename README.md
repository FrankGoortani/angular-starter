Toptal Starter
=========

[Description](#Description)
[Installation Guide](#Installation-Guide)
[Running the project](#Running-the-project)
[Documentations](#Documentations)

## Description

This project is created to facilitate creating an Angular 2 project with Webpack in the spirit of bootstraping the Toptal interview.

## Installation Guide

In order to set up the development environment of toptal starter project, you need to have the latest versions of node.js and npm installed. This project has been tested on Mac and Linux and might work on Windows too but use at your own risk!

after cloning the project, go to the cloned library and type the following command:

```bash
npm install
```
Do not worry if you received an error message indicating incomplete install or incompatible versions. Normally these types of errors will resolve running npm install multiple times


## Running the project

package.json provides 3 scripts for running in dev mode, test mode and production:

### Development Environment

```bash
npm start
```
OR

```bash
webpack-dev-server --inline --progress --port 8080
```

### Running Unit Tests

```bash
npm test
```
OR

```bash
karma start
```

### Building for Production

```bash
npm build
```
OR

```bash
rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail
```

## Documentations

Here, I provided the links to documentations for packages used in the project:
http://devdocs.io/

### Angular JS
https://angular.io/docs
https://angular.io/guide/router

### Zurb Foundation
http://foundation.zurb.com/sites/docs/

### WebPack
https://webpack.github.io/docs/

### Karma
https://docs.angularjs.org/guide/unit-testing

### Jasmin
https://jasmine.github.io/

### Highcharts
https://www.npmjs.com/package/angular2-highcharts
https://www.highcharts.com/docs

### Underscore
http://underscorejs.org/

