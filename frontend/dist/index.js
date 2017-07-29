(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
  // 條件找朋友列表
  if($('.filter').length > 0) {
    
    //取得職缺列表放進 select 選項裡
    $.ajax({
      url: 'http://172.20.10.3:3000/jobs'
    }).done(function(data) {
      console.log(data);
      for(var i=0; i<data.length; i++) {
        var option = $('<option  value="' + data[i].id + '">' + data[i].content.name +  '</option>');
        $('.js-jobs-select').append(option);
      }
    });
    
    $('.js-search-btn').click(function () {
      var jobId = $('.js-jobs-select').val();
      var gender = $('.js-gender-select').val();
      var up = $('.js-age-up').val();
      var low = $('.js-age-up').val();

      
    });
  }
});

},{}]},{},[1])