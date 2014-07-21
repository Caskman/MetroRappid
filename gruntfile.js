module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js',
                    mainConfigFile: 'js/build.js',
                    include: 'main',
                    insertRequire: ['main'],
                    name: '../bower_components/almond/almond',
                    out: 'js/built.js',
                    wrap: true,
                    optimize: 'uglify2',
                    preserveLicenseComments: false,
                    generateSourceMaps: true,
                    replaceRequireScript: [{
                        files: ['index.html'],
                        modulePath: 'js/built'
                    }]
                }
            }
        },
        connect: {
            server: {
              options: {
                port: 1234,
                keepalive: true
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // build for production
    // replace the script tag in index.html to target the single file js
    grunt.registerTask('build', ['requirejs']);

    grunt.registerTask('serve', ['connect']);
};
