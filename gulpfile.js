var gulp = require('gulp'); 

//For cleaning out the build dir
var clean = require('gulp-clean');

//For processing react and other files into minimized files
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//For browserify build
var browserify = require('gulp-browserify');

//For re-running node when server source changes
var nodemon = require('gulp-nodemon');

// Delete everything instide the build directory
gulp.task('clean', function() {
  return gulp.src(['build/*'], {read: false}).pipe(clean());
});

gulp.task('javascript', function() {

    console.log("Building Javascript");

    // Take every JS file in ./public/js
    return gulp.src('public/js/**/*.js')
        // Turn thier React JSX syntax into regular javascript
        .pipe(react())
        // Output each one of those --> ./build/js/ directory
        .pipe(gulp.dest('build/js/'))
        // Then take each of those and minimize
        .pipe(uglify())
        // Add .min.js to the end of each optimized file
        .pipe(rename({suffix: '.min'}))
        // Then output each optimized .min.js file --> ./build/js/ directory
        .pipe(gulp.dest('build/js/'));
});

gulp.task('browserify', ['javascript'], function() {

    console.log("Browserify");

    return gulp.src('build/js/client.js')
        .pipe(browserify({
            transform: ['envify']
        }))
        .pipe(rename('client.build.js'))
        .pipe(gulp.dest('build/js/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('watch', ['clean'], function() {

    gulp.start('browserify', function() {

        // Watch for changes in public javascript code and run the 'javascript' task
        gulp.watch('public/**/*.js', ['browserify']);

        // Restart node if anything in build changes
        nodemon({script: 'server.js', watch: 'build'});

    });
});

gulp.task('default', ['clean'], function() {
  return gulp.start('browserify');
});
