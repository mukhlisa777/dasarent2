module.exports = ()=>{
  $.gulp.task('serv', ()=>{
    $.bs.init({
      server:{
        baseDir: $.path.serverPath
      }
    })
  })
}