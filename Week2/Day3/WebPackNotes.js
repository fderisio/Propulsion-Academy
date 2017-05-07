var path = require('path');

// Basic configuration!! Do not change except the file names
modeule.exports = {
	entry: __dirname + '/src/app.js', // a que archivo se va a referir, a donde se van a colocar los require (se van a imprtar los archivos)
	output: {
		path: path.resolve(__dirname, 'dist'); // donde va  crear la carpeta dist
		filename: 'app.bundle.js'; // el nombre del archivo que va a crear
	},
 module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'] // ES6
        }
      }
    ]
  }

}


