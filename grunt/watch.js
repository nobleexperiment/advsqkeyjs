module.exports = {
	js: {
		files: [
			'models/**/*.js',
			'routes/**/*.js'
		],
		tasks: ['jshint:all']
	},
	express: {
		files: [
			'keystone.js',
			'public/js/lib/**/*.{js,json}'
		],
		tasks: ['jshint:server', 'concurrent:dev']
	},
	sass: {
		files: ['public/styles/**/*.scss'],
		tasks: ['sass']
	},
	livereload: {
		files: [
			'public/styles/**/*.css',
		],
		options: {
			livereload: true
		}
	}
};
