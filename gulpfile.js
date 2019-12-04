const { src, dest, parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const imagemin = require("gulp-imagemin");
const sitemap = require('gulp-sitemap');

function html(cb) {
  return src("src/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest("dist"));
}

function js(cb) {
  return src("src/assets/js/*.js")
  .pipe(minify())
  .pipe(dest("dist/assets/js"));
}

function css(cb) {
  return src("src/assets/css/*.css")
  .pipe(cleanCSS({ compatibility: "ie8" }))
  .pipe(dest("dist/assets/css"));
}

function bootstrapCSS() {
  return src("src/bootstrap3/**/*.css")
  .pipe(cleanCSS({ compatibility: "ie8" }))
  .pipe(dest("dist/bootstrap3"));
}

function bootstrapJS() {
  return src("src/bootstrap3/**/*.js").pipe(dest("dist/bootstrap3"));
}

function img() {
  return src("src/assets/img/**/*.*")
  .pipe(imagemin())
  .pipe(dest("dist/assets/img"));
}

function sm() {
  return src('src/*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://www.victorfateh.com'
  }))
  .pipe(dest('dist'));
}

exports.default = parallel(html, css, bootstrapJS, bootstrapCSS, js, img, sm);
