
var gulp = require('gulp');
var cucumber = require('gulp-cucumber');

gulp.task('cuke', function() {

    return gulp.src('test/features/*.feature', {
            read: false
        })
        .pipe(cucumber({
            'support': ['test/features/support/*.js'],
            'steps': ['test/features/step_definitions/*.js'],
            'format': 'pretty'
                // 'tags': '@dev, @profile'
        }));
});
