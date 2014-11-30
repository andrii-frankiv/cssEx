var gulp = require('gulp');

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;

var lr;
var watchList = ['*.html', '*.css', '*.js'];

// TASKS
gulp.task('default', function() {
    startExpress();
    startLiveReload();
    gulp.watch(watchList, notifyLiveReload);
});


//
function startExpress () {
    var express = require('express');
    var app = express();

    app.use(require('connect-livereload')());
    app.use(express.static(EXPRESS_ROOT));
    app.listen(EXPRESS_PORT);
}

function startLiveReload () {
    lr = require('tiny-lr')();
    lr.listen(LIVERELOAD_PORT);
}

function notifyLiveReload (event) {
    var fileName = require('path').relative(EXPRESS_ROOT, event.path);
    lr.changed({
        body: {
            files: [fileName]
        }
    });
}