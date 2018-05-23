module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'themes/uptown/assets/css/styles.css' : 'themes/uptown/assets/css/src/input.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'themes/uptown/assets/css/styles.css':'themes/uptown/assets/css/styles.css'
        }
      }
    },
    watch: {
      css: {
        files: 'themes/uptown/assets/css/src/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
