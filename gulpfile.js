let gulp=require("gulp");

let sass=require("gulp-sass");

let concat=require("gulp-concat");

let mincss=require("gulp-clean-css");

let minjs=require("gulp-uglify");

let minhtml=require("gulp-htmlmin");

// let babel=require("gulp-babel");

// let server=require("gulp-webserver");

// 编译scss
gulp.task("readscss",()=>{
    return gulp.src("./src/style/*.scss")
    .pipe(sass())
    .pipe(concat("all.css"))
    .pipe(mincss())
    .pipe(gulp.dest("./built/style"))
})