module.exports = ()=>
  $.gulp.task('watch', ()=>{
    for(const key in $.path.watch) {
        const watching = $.path.watch[key]
        $.gulp.watch(watching, $.gulp.series(key))
    }})