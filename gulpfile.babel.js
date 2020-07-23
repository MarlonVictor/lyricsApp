const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

const public = 'public/scripts/*.js'
const src = 'src/api.js'

gulp.task('build', () =>
    gulp.src([public, src])
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-transform-async-to-generator']
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/'))
)