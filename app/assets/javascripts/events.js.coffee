# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready ->
  $('.edit_event, .new_event').nestedFields
    afterInsert: (item) ->
      $('input:text', item).datepicker
        dateFormat: "yy-mm-dd"
  $('.event_date_field').datepicker
      dateFormat: "yy-mm-dd"
