const { src, dest, parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const imagemin = require("gulp-imagemin");

function html() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

function js() {
  return src("src/assets/js/*.js")
    .pipe(minify())
    .pipe(dest("dist/assets/js"));
}

function css() {
  return src("src/assets/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/assets/css"));
}

function bootstrap() {
  return src("src/bootstrap3/**/*.*")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/bootstrap3"));
}

function img() {
  return src("src/assets/img/**/*.*")
    .pipe(imagemin())
    .pipe(dest("dist/assets/img"));
}

exports.default = parallel(html, css, bootstrap, js, img);
