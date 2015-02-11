var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    http = require('http'),
    ecstatic = require('ecstatic'),
    typescript = require('gulp-type'),
    bowerFiles = require('gulp-bower-files')

var output = "static/"
var tsScriptFiles = "concerts/**/*.ts"
var staticAssetPaths = ["concerts/**/*.html", "**/*.jpg", "**/data/**/*.json", "concerts/**/*.css"];

gulp.task('default', ['clean'], function() {
    return gulp.start('watch');
});

gulp.task('dist', ['clean'], function() {
    return gulp.start('buildDist');
});

gulp.task('clean', function() {
    return gulp.src(['!./' + output + '/.gitignore', output + "/*"], {read: false})
        .pipe(rimraf());
});

gulp.task('watch', ['compileTS', 'copyAssets', 'serve'], function(done) {
    gulp.watch(tsScriptFiles, ['compileTS', 'copyScripts']);
    gulp.watch(staticAssetPaths, ['copyStaticAssets']);
    return done();
});

var tsProject = typescript.createProject({
    declarationFiles: false,
    noExternalResolve: true,
    module: "amd",
    target: "ES5"
});

gulp.task('compileTS', function() {
    var tsResult = gulp.src(tsScriptFiles)
        .pipe(typescript(tsProject));

    return tsResult.js
        .pipe(gulp.dest(output))
});

gulp.task('copyAssets', ['copyBowerLibs', 'copyScripts', 'copyStaticAssets']);

gulp.task("copyBowerLibs", function(){
    return bowerFiles().pipe(gulp.dest(output + "/lib"));
});

gulp.task('copyScripts', function() { return copy(["concerts/**/*.js", tsScriptFiles]); });
gulp.task('copyStaticAssets', function() { return copy(staticAssetPaths); });

gulp.task('serve', function(done) {
    http.createServer(ecstatic({ root: __dirname + "/static" })).listen(9000);
    return done();
});

function copy(source) {
    return gulp.src(source).pipe(gulp.dest(output));
}
