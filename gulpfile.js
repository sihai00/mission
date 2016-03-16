var gulp = require('gulp');
	less = require('gulp-less');
	cssmin = require('gulp-minify-css');

gulp.task('less',function(){
	gulp.src('less/mission-box.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest('css'));
});

gulp.task('watch-less',function(){
	gulp.watch('less/mission-box.less',['less']);
});

gulp.task('default',['watch-less']);