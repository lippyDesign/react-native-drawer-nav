var gulp = require('gulp'),
    babel = require('gulp-babel'),
    less = require('gulp-less');

gulp.task("dev:styles", styles(false));
gulp.task("dev:scripts", devScripts);

gulp.task('prod:styles', styles(true))

gulp.task("default",
    gulp.parallel(
        'dev:styles',
        devScripts
    )
);

function styles(isProduction) {
    return () => {
        return gulp
            .src('./src/styles/site.less')
            .pipe(less())
            .pipe(gulp.dest('./public/styles'));
    }
}

function devScripts() {
    return gulp
        .src("./src/scripts/**/*.js")
        // INTERESTING STUFF GOES HERE
        .pipe(babel())
        .pipe(gulp.dest('./public/scripts'));
}