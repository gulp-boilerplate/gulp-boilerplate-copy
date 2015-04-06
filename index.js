var gulp = require('gulp'),
    print = require('gulp-print'),
    gutil = require('gulp-util'),
    symbols = require('symbols'),
    success = symbols.success,
    error = symbols.error;

module.exports = function (config) {
    return function() {
        gulp.src(config.src)
        .on('error', gutil.log.bind(gutil, error + ' Error in fonts '))
        .pipe(print(function (filepath) {
            return success + ' ' + filepath;
        }))
        .pipe(gulp.dest(config.dest));
    };
};
