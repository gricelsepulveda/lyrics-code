module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          { //IMAGES
            expand: true,
            cwd: 'src',
            src: ['favicon.svg'],
            dest: 'dist'
          },
          { //IMAGES
            expand: true,
            cwd: 'src/assets/img',
            src: ['{,*/}*'],
            dest: 'dist/assets/img'
          },
          { //FONTS
            expand: true,
            cwd: 'src/assets/fonts',
            src: ['{,*/}*'],
            dest: 'dist/assets/fonts'
          }
        ],
      },
    },    
    slim: {                    
      dist: {   
        options: {                   
          pretty: false
        }, 
        files: [{
          expand: true,
          cwd: 'src/views',
          src: ['{,*/}*.slim'],
          dest: 'dist',
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          noCache: true,
          style: 'compressed',
          sourcemap: 'none',
          trace: true,
          debugInfo: true
        },
        files: {
          'dist/assets/styles/fontawesome-5.min.css': 'src/assets/styles/fontawesome-5.scss',
          'dist/assets/styles/lyrics-font.min.css': 'src/assets/styles/lyrics-font.css',
          'dist/assets/styles/ly-styles.min.css': 'src/assets/styles/ly-styles.scss',
          'dist/assets/styles/normalize.min.css': 'src/assets/styles/normalize.css',
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dist/assets/styles/ly-styles.min.css':'dist/assets/styles/ly-styles.min.css'
        }
      }
    },
    jshint: {
      files: 'src/js/*.js',
      options: {
        reporterOutput: "",
        force: true,
        globals: {
          jQuery: true
        },
        ignores: ['src/js/jquery-3.3.1.js', 'src/js/smooth-scroll.js'],
      }
    },
    uglify: {
      build: {
        files: [{
            expand: true,
            src: ['*.js'],
            cwd: 'src/js',
            dest: 'dist/js',
            rename: function (dest, src) {
              return dest + '/' + src.replace('.js', '.min.js');
            }
        }]
      }
    },
    'http-server': {
      'dev': {
        root: './dist/',
        port: 8080,
        host: 'localhost',
        cache: 1,
        showDir: true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true,
        openBrowser: true,
      }
    },
    watch: {
      options: {
        livereload: true,
        host: 'localhost'
      },
      copy: {
        files: ['src/assets/**/*'],
        tasks: ['copy']
      },
      sass: {
        files: ['src/assets/styles/*.scss'],
        tasks: ['sass']
      },
      slim: {
        files: ['src/views/*.slim'],
        tasks: ['slim']
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-slim');
  grunt.loadNpmTasks('grunt-autoprefixer');  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['copy', 'slim', 'sass', 'autoprefixer','http-server', 'uglify','watch']);
};