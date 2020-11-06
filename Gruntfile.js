module.exports = function(grunt) {  
    grunt.loadNpmTasks('grunt-shell');  
    grunt.initConfig({  
        shell: {  
            command: "for i in ./src/**/*.js; do node -c "$i"; done"  
        }  
    });  
    grunt.registerTask('syntax', ['syntax']);  
};  
