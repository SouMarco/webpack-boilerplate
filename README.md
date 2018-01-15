Webpack 3 Boilerplate
===========

> Webpack 3 boilerplate with SASS

## Requirements
Only need <b>node.js</b> pre-installed. 

## Download
Download in current directory
```sh
$ curl -L -o master.zip https://github.com/soumarco/webpack-boilerplate/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-boilerplate-master/* ./
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```
## Deployment
Build the current application
```sh
$ npm run build:prod
```

### Boilerplate structure

```
.
├── .gitignore                # git ignore config
├── package.json              # https://docs.npmjs.com/files/package.json
├── README.md                 # this file
├── webpack.config.js         # webpack config
├── dist/                     # webpack build output
└── src/                      # source code
    ├── assets/
    |   ├── js                # js files
    |   ├── media             # images files
    |   └── scss              # sass files
    |       └── app.scss      # sass entry file
    ├── apps.js               # app entry file
    └── index.html            # template used by html-webpack-plugin
```

## Packages used
clean-webpack-plugin
css-loader
extract-text-webpack-plugin
file-loader
html-loader
html-webpack-plugin
node-sass
sass-loader
style-loader
url-loader
webpack
webpack-dev-server
