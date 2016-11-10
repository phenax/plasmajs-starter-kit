const gulp= require('gulp');
const autoprefixer= require('gulp-autoprefixer');
const sass= require('gulp-sass');
const minify= require('gulp-minify-css');

const BUILD_DIR= "./public/css";
const APP_DIR= "./client/scss";

function compileSASS() {
	return gulp.src(`${APP_DIR}/*.scss`)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minify())
		.pipe(gulp.dest(BUILD_DIR));
}

function watchSASS() {
	gulp.watch(`${APP_DIR}/**/*.scss`, ['buildSASS']);
}

gulp.task('buildSASS', compileSASS);
gulp.task('watchSASS', ['buildSASS'], watchSASS);

gulp.task('default', ['watchSASS']);
