# Author Fred Mello (artjerom)
gulp = require 'gulp'
connect = require 'gulp-connect'
jade = require 'gulp-jade'
stylus = require 'gulp-stylus'
# imageop = require 'gulp-image-optimization'
# coffee = require 'gulp-coffee'
# uglify = require 'gulp-uglify'
# clean = require 'gulp-clean'
# rjs = require 'gulp-requirejs'

gulp.task 'connect', ->
  connect.server
    port: 1337
    livereload: on
    root: './app'

gulp.task 'jade', ->
  gulp.src 'jade/*.jade'
    .pipe do jade
    .pipe gulp.dest 'app'
    .pipe do connect.reload

gulp.task 'stylus', ->
  gulp.src 'stylus/*.styl'
    .pipe stylus set: ['compress']
    .pipe gulp.dest 'app/css'
    .pipe do connect.reload

# IMAGES

# gulp.task 'images', ->
#   gulp.src([
#     'images/*.png'
#     'images/*.jpg'
#     'images/*.gif'
#     'images/*.jpeg'
#   ]).pipe(imageop(
#     optimizationLevel: 5
#     progressive: true
#     interlaced: true))
#     .pipe gulp.dest 'app/img'
#     .pipe do connect.reload

# IMAGES

gulp.task 'build', ->
  gulp.src 'javascript/*.js'
    #.pipe do uglify
    .pipe gulp.dest 'app/js'
    .pipe do connect.reload

  # gulp.src 'javascript/', read: no
  #   .pipe do clean

# gulp.task 'js', ->
#   gulp.src 'javascript/*.js'
#     .pipe do js
#     .pipe gulp.dest 'js'

gulp.task 'watch', ->
  gulp.watch 'jade/*.jade', ['jade']
  gulp.watch 'stylus/*.styl', ['stylus']
  gulp.watch 'javascript/*.js', ['build']
  # gulp.watch [
  #   'images/*.png'
  #   'images/*.jpg'
  #   'images/*.gif'
  #   'images/*.jpeg'], ['images']

# Add task 'images'
gulp.task 'default', ['jade', 'stylus', 'build', 'watch', 'connect']
