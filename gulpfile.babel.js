const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

const public = 'public/scripts/*.js'
const src = 'src/api.js'

gulp.task('build', () =>
    gulp.src([public, src])
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-transform-async-to-generator']
        }))
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/'))
)