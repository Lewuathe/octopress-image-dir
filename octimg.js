#!/usr/bin/env node

var fs = require('fs');

var currentDir = fs.realpathSync('./');

var defaultMap = {
    'image-dir': 'source/images/posts',
    'source-dir': 'source/_posts'
}

var argv = require('minimist')(process.argv.slice(2), {default: defaultMap});

var sourceDir = currentDir + '/' + argv['source-dir'];
var imageDir = currentDir + '/' + argv['image-dir'];

fs.readdir(sourceDir, function(err, list) {
    // Obtain latest post
    var latest = list[list.length-1].split('.')[0];

    // Create same name directory for images of this post.
    fs.mkdir(imageDir + '/' + latest, function(err) {
        if (err) {
            console.log("Some error has occured: " + err);
            throw err;
        }
        console.log("Created: " + imageDir + '/' + latest);
    });
});







