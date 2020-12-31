var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");

gulp.task("sprite", async function () {
  var config = {
    symbol: {
      dest: "_includes/test",
    },
    mode: {
      symbol: true,
    },
  };

  var sprite = gulp
    .src("**/*.svg", { cwd: "assets/img/icons" })
    .pipe(svgSprite(config))
    .pipe(gulp.dest("_includes"));
});
