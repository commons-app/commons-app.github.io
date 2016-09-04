module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
    	dist: {
    		files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      files: 'scss/**/*.scss',
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
