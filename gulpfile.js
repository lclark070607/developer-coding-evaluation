const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

//Compile Sass
gulp.task('sass', function(){
    return gulp.src(['src/scss/*.scss']) //looking for sass files we want to be compiled into regular css, * = any
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css')) //tell it where to compile to
        .pipe(browserSync.stream());
    });

//Watch & Serve
gulp.task('serve', ['sass'], function(){
    browserSync.init({  //pass in a configuration object
        server: './src'
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);  //watch sass files
    gulp.watch(['src/*.html']).on('change', browserSync.reload); //for our html files
});

//Default
gulp.task('default', ['serve']);