let gulp=require("gulp");

var sass=require("gulp-sass");

let concat=require("gulp-concat");

let mincss=require("gulp-clean-css");

let minjs=require("gulp-uglify");

let minhtml=require("gulp-htmlmin");

let babel=require("gulp-babel");

let server=require("gulp-webserver");

// 编译scss  合并  压缩
gulp.task("readscss",()=>{
    return gulp.src("./src/style/*.scss")
    .pipe(sass())
    .pipe(concat("all.css"))
    .pipe(mincss())
    .pipe(gulp.dest("./built/style"))
})

// 压缩js文件
gulp.task("minjs",()=>{
    return gulp.src("./src/script/index.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(minjs())
    .pipe(gulp.dest("./built/script"))
})

