module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          outputStyle: "nested"
        },
        files: {
          "css/app.css": "css/scss/app.scss"
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: "css/scss/*.scss",
        tasks: ["sass"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("build", ["sass"]);
  grunt.registerTask("default", ["build", "watch"]);
};