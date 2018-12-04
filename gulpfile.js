const { src, dest, task } = require("gulp");

exports.default = function() {
  return src("src/*.html").pipe(dest("build/"));
};
