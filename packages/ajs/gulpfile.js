var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');

var paths = {
    scripts: ['js/**/*.js', 'components/**/*.js', 'services/**/*.js', 'directives/**/*.js'],
    styles: ['assets/css/style.less'] 
};

gulp.task('scripts', function() {
    // concat and copy all JavaScript
    return gulp.src(paths.scripts)
        .pipe(concat('blog.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(less())
		.pipe(gulp.dest('assets/css'));
})

// The default task (called when you run `gulp` from cli)
// gulp.task('default', ['scripts', 'styles']); 
gulp.task('default', ['styles']); 
