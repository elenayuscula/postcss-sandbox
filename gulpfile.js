var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var precss = require('precss');
var nano = require('gulp-cssnano');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');


// Evita tener que reiniciar la tarea watch cada vez que hay un error
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


// Tarea CSS
gulp.task('css', function() {
	var processors = [ 
		cssnext ({ browsers: ['last 2 versions']}),
		precss
	]

	return gulp.src('src/styles-dev.css') // sólo queremos que se aplique la tarea en el archivo styles-dev.css
		.pipe(postcss(processors))// le paso el array a postcss
		.on('error', handleError) // En caso de error, ejecuta la función handleError
		.pipe(plumber()) 
		.pipe(csscomb()) // limpia y ordena el CSS según la configuración del archivo .csscomb.json
		.pipe(rename('./styles.css')) // cambio el nombre del archivo de destino
		.pipe(gulp.dest('dest')) // especifico carpeta de destino
});



// Tarea minificar CSS
gulp.task('minify', function() {
	var configNano = { // array con opciones de minificación
	    discardComments: { removeAll: true },
	    safe: true
	}

	return gulp.src('dest/styles.css')
		.pipe(nano(configNano)) // paso el array
		.pipe(rename('./styles.min.css')) // renombro el archivo resultante
		.pipe(gulp.dest('dest')) // elijo carpeta de destino

});



// Watch
gulp.task('watch', function() {
	gulp.watch('src/**/*.css', ['css']) 
	gulp.watch('dest/styles.css', ['minify'])
});




// Default
gulp.task('default', ['watch']);