//plug-in
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');

// sassとcssの保存先
gulp.task('sass', function(){
    gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css/'));
});

//自動監視
gulp.task('sass-watch', ['sass'], function(){
    var watcher = gulp.watch('./sass/**/*.scss', ['sass']);
    watcher.on('change', function(event) {
    });
});

gulp.task('default', ['sass-watch']);


// gulpタスクの作成
gulp.task('build', function(){
  browserify({
    entries: ['src/app.js'] // ビルド元のファイルを指定
  }).bundle()
    .pipe(source('bundle.js')) // 出力ファイル名を指定
    .pipe(gulp.dest('css/')); // 出力ディレクトリを指定
});
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./", // 対象ディレクトリ
      index: "index.html" //indexファイル名
    }
  });
});
gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Gulpを使ったファイルの監視
gulp.task('default', gulp.series(gulp.parallel('build', 'browser-sync'), function(){
  gulp.watch('./src/*.js', ['build']);
  gulp.watch("./*.html", ['bs-reload']);
  gulp.watch("./css/*.+(js|css)", ['bs-reload']);
}));
