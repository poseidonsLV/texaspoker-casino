const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

function stylesTask() {
    return src("src/assets/scss/*.scss")
        .pipe(sass())
        .pipe(dest("public/css"))
        .pipe(browserSync.stream());
}

function copyHTMLTask() {
    return src("src/*.html").pipe(dest("public")).pipe(browserSync.stream());
}
function jsConcatTask() {
    return src("src/assets/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(dest("public/js"))
        .pipe(browserSync.stream());
}

function browsersyncServe() {
    browserSync.init({
        server: { baseDir: "public" },
    });

    watch("src/assets/scss/*.scss").on("change", stylesTask);
    watch("src/*.html").on("change", copyHTMLTask);
    watch("src/assets/js/*.js").on("change", jsConcatTask);
}

exports.default = series(
    stylesTask,
    copyHTMLTask,
    jsConcatTask,
    browsersyncServe
);