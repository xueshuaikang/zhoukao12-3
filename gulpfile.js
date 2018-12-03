/*
 * @Author: mikey.薛帅康 
 * @Date: 2018-12-03 19:31:10 
 * @Last Modified by: mikey.薛帅康
 * @Last Modified time: 2018-12-03 19:45:59
 */
let gulp=require("gulp");

var sass=require("gulp-sass");

let concat=require("gulp-concat");

let mincss=require("gulp-clean-css");

let minjs=require("gulp-uglify");

let minhtml=require("gulp-htmlmin");

let babel=require("gulp-babel");

let server=require("gulp-webserver");

let url=require("url");

let fs=require("fs");

let path=require("path");

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
    return gulp.src("./src/script/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat("all.js"))
    .pipe(minjs())
    .pipe(gulp.dest("./built/script"))
})

// 起服务
gulp.task("server",()=>{
    return gulp.src('./src')
    .pipe(server({
        port:9900,
        open: true,
        //fallback: 'index.html',
        //host:"169.254.76.137",
        // middleware:function(req,res,next){
        //      // 获取地址栏 localhost 后面的地址路径的方法（属于原生 node）
        //      let pathname=url.parse(req.url).pathname;

        //      if(pathname=="/favicon.ico"){
        //          return;
        //      }
        // }
    }));
})

// gulp.task("watch",()=>{
//     return gulp.watch()
// })

gulp.task("default",gulp.series("readscss","minjs"))