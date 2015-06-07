// ref: gruntjs.com/getting-started

// export the grunt function through the module.exports
module.exports = function (grunt) {

	// project configuration
	grunt.initConfig({
		// less task configuration
		less: {
			// an arbitrary named task
			// ref: https://github.com/gruntjs/grunt-contrib-less/issues/33
			compile: {
				// building file object dynamically
				// ref: http://gruntjs.com/configuring-tasks
				files: [
					{
						expand: true,     // Enable dynamic expansion.
						cwd: 'css/',      // Src matches are relative to this path.
						// the following will match the files in all subdirectories
						//src: ['**/*.less'], // Actual pattern(s) to match. here 'less' files
						// to match only for one level deep, leave **
						src: ['*.less'],
						dest: 'css/',   // Destination path prefix.
						ext: '.css',   // Dest filepaths will have this extension.
						extDot: 'first'   // Extensions in filenames begin after the first dot	
					}
				]
			}
		} 
	});

	// load the necessary npm modules necessary for the tasks
	grunt.loadNpmTasks('grunt-contrib-less');

	// register the default tasks to perform
	grunt.registerTask('default', ['less']);
	// above runs all the tasks within less 
	// to specifically run compile  
	//grunt.registerTask('default', ['less:compile']);
};