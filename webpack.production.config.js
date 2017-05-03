'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var S3Plugin = require('webpack-s3-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var PROJECT_DIR = path.resolve(__dirname, 'projects');

// s3 bucket settings
var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
var DATA_PROJECTS_S3_BUCKET_NAME = process.env.DATA_PROJECTS_S3_BUCKET_NAME;

function getProjectEntryPoints() {
    var entryPoints = {};
    var whichProject = process.env.npm_config_project;

    console.log(whichProject);

    if (whichProject) {
        var projectList = [whichProject];
    } else {
        var projectList = ['varying_degrees'];
    }

    for (var project of projectList) {
        entryPoints[project] = PROJECT_DIR + "/" + project + '/index.js';
    }

    console.log(entryPoints);

    return entryPoints;
}

module.exports = {
    entry: getProjectEntryPoints(),
    // Where you want the output to go
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurenceOrderPlugin(),


        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new S3Plugin({
          // Only upload css and js 
          include: /.*\.(scss|css|js)/,
          // s3Options are required 
          s3Options: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
            region: 'us-west-2'
          },
          s3UploadOptions: {
            Bucket: DATA_PROJECTS_S3_BUCKET_NAME
          }
        })
    ],
    

    module: {
        // loaders handle the assets, like transforming sass to css or jsx to js.
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json?$/,
            loader: 'json'
        }, {
            test: /\.scss$/,
            // we extract the styles into their own .css file instead of having
            // them inside the js.
            loader: 'style!css!sass'
        }, 
        { 
            test: /\.svg$/, loader: 'svg-react' 
        },
        {
            test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
            loader: 'file'
        }]
    },
    postcss: [
        require('autoprefixer')
    ]
};
