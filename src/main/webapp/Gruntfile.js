/**
 * Created by rizki on 11/03/15.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        wiredep: {
            task: {
                src: [
                    'pages/*.html'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-wiredep');
};